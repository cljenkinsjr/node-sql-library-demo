# Express/Node/MySQL enabled Library Demo Project

## Objectives
- Create a single-page application (SPA) that will control relational tables for `Author`, `Book`, and `Campus`
- Develop an understanding of JavaScript backend development with Node
- Develop an understanding of creating and using a relational database management system (RDBMS), specifically MySQL, to create the proper entity relationships between tables

## Setup
- Install MySQL
- Install Node.js
- Execute the following commands on a command line to setup the project:
  - npm install -g express-generator
  - express --view=ejs node-sql-library-demo
  - cd node-sql-library-demo
  - npm install express-flash --save
  - npm install express-session --save
  - npm install method-override --save
  - npm install mysql --save
  - npm install http-errors --save
  - npm install ejs --save
  - npm install debug --save
  - npm install express --save
  - npm install path --save
  - npm install cookie-parser --save
  - npm install morgan --save
- Create a .gitignore file by going to https://www.toptal.com/developers/gitignore
  - Select/Type Node
  - Select/Type Visual Studio Code
  - Create and copy paste into .gitignore file in your project

## Execute/Run Application
- npm start
- project URL will be localhost:3000

## The Project Explanation

We are going to build a project that keeps track of `Book`s, the `Author`(s) that wrote them and the `Campus` they belong to. Along the way a user will be able to add `Campus`es,`Book`s, and `Author`s which could be utilized for categorization or search filtering purposes.  While there are many different ways we can begin to visual these table relationships, the tables below will certainly help to keep us all on the same page for this project. 

### The `Campus` Table

|String location|
|----|
|Cleveland|
|Columbus|

### The `Author` Table

|String firstName|String lastName|
|----|--------|
|Kathy|Sierra|
|Burt|Bates|
|Kent|Beck|
|Martin|Fowler|


### The `Book` Table


|String title|String description|`Campus`|`Author(s)`|
|----|-----------|-------|----------|
|"Head First Java"|"A good book to learn Java with."|`columbus`|`sierra`,`bates`|
|"Test Driven Development By Example"|"The first book on TDD and still one of the best."|`columbus`|`kent`|
|"Refactoring"|"The first book to catalog the many refactorings available to address code smells."|`columbus`|`fowler`|
|"Agile Principles Patters and Practices in C#"|"A classic book, refactored for C#."|`cleveland`|`martin`|
