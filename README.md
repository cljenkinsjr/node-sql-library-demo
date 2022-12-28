# Express/Node/MySQL enabled Library Demo Project

## Objectives
- Create a single-page application (SPA) that will control entities for `Author`, `Book`, and `Campus`
- Develop an understanding of JavaScript backend development with Node
- Develop an understanding of creating and using a relational database management system (RDBMS) with MySQL to create the proper entity relationships

## Setup

- Execute the following to setup the project
--


## The Project Explanation

We are going to build a project that keeps track of `Book`s, the `Author`(s) that wrote them and the `Campus` they belong to. Along the way a user will be able to add `HashTag`s which could be utilized for categorization or search filtering purposes.  While there are many different ways we can begin to visual these object relationships, the tables below will certainly help to keep us all on the same page for this project. 

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
