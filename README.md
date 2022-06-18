# E-Commerce Back End


## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Instructions to run the app
 1. Before running the app, it's necessary to install all packages by typing npm install in your terminal.

 2. run the code from schema.sql in your sql workbench and then also add  "USE ecommerce_db;" and run.

 3. Seed the database by opening index.js from the seeds folder in  an integrated terminal and type node index.js

 4. open server.js in an integrated terminal and type node server.js

 5. open insomnia and test the routes, then you can check the database in SQL to make sure the changes are actually being made
 
NOTE: modify both env files with your user and password info found in the seeds folder and the root folder before using.



## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
https://www.youtube.com/watch?v=UbeS6X02KEg

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

https://github.com/Javierrmsf/E-Commerce-Back-end
