let express = require("express");
let campusRouter = express.Router();
let dbConn = require("../lib/db");

// display campuses on the page
campusRouter.get("/", function (req, res, next) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "SELECT * FROM campus ORDER BY campus_id desc",
      function (err, rows) {
        if (err) {
          req.flash("error", err);
          // render to views/campuses/index.ejs
          res.render("campuses", { data: "" });
        } else {
          // render to view/campuses/index.ejs
          res.render("campuses", { data: rows });
        }
      }
    );
  });
});

// add a new campus
campusRouter.post("/add", function (req, res, next) {
  console.log(req.body.location);
  let location = req.body.location;
  let errors = false;

  if (location.length === 0) {
    errors = true;

    req.flash("error", "Please enter a campus location");
    // render to campus index.ejs with flash message
    res.render("campus/add", {
      location: location,
    });
  }

  if (!errors) {
    let formData = {
      location: location,
    };

    return new Promise((resolve, reject) => {
      dbConn.query(
        "INSERT INTO campus SET ?",
        formData,
        function (err, result) {
          if (err) {
            req.flash("error", err);

            res.render("campuses/add", {
              location: location,
            });
          } else {
            req.flash("Success", "Campus successfully added");
            res.redirect("/campuses");
          }
        }
      );
    });
  }
});

campusRouter.get("/campus/:campus_id", function (req, res, next) {
  console.log(req.body.location);
  console.log(req.params.campus_id);

  let campusId = req.params.campus_id;

  return new Promise((resolve, reject) => {
    dbConn.query(
      "SELECT campus.campus_id, campus.location, book.book_id, book.title " +
        "FROM campus, book " +
        "WHERE campus.campus_id = book.campus_id " +
        "AND campus.campus_id = " +
        campusId,

      function (err, rows) {
        if (err) {
          req.flash("error", err);
          // render to views/campus/index.ejs
          res.render("campus", { data: "" });
        } else {
          // render to views/campus/index.ejs
          res.render("campus", { data: rows });
        }
      }
    );
  });
});

// campusRouter.post("/book/add", function (req, res, next) {
//   console.log(req.body.location);
//   let bookTitle = req.body.title;
//   let errors = false;

//   if (.length === 0) {
//     errors = true;

//     req.flash("error", "Please enter a campus location");
//     // render to campus index.ejs with flash message
//     res.render("/campuses/campus/", {
//       title: title,
//       description: description
//     });
//   }

//   if (!errors) {
//     let formData = {
//       title: title,
//       description: description
//     };

//     dbConn.query("INSERT INTO book SET ?", formData, function (err, result) {
//       if (err) {
//         req.flash("error", err);

//         res.render("campuses/campus", {
//           title: title,
//           description: description
//         });
//       } else {
//         req.flash("Success", "Book successfully added");
//         res.redirect("/campuses/campus");
//       }
//     });
//   }
// });

campusRouter.get("/campus/book/:book_id", function (req, res, next) {
  //console.log(req.body.book_id);
  console.log(req.params.book_id);

  let bookId = req.params.book_id;

  return new Promise((resolve, reject) => {
    dbConn.query(
      "SELECT book_authors.books_id, book_authors.authors_id, author.author_id, author.first_name, " +
        "author.last_name, book.title, book.description, book.campus_id " +
        "FROM book_authors " +
        "INNER JOIN author on book_authors.authors_id = author.author_id " +
        "INNER JOIN book on book_authors.books_id = book.book_id " +
        "WHERE book_authors.books_id = " +
        bookId,

      function (err, rows) {
        if (err) {
          req.flash("error", err);
          // render to views/book/index.ejs
          res.render("book", { data: "" });
        } else {
          // render to views/book/index.ejs
          res.render("book", { data: rows });
        }
      }
    );
  });
});

module.exports = campusRouter;
