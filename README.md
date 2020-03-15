# Backend repo for Game Realm project

This repo contains the back end code for the NURD Game Realm project.  The front end repo can be found at https://github.com/RyanEllingson/nurd, and the deployed app can be found at https://nurd-game-realm.netlify.com/

## Description
---

Game Realm is an app designed for creating and finding groups of people interested in playing a specific game (video game, board game, etc.).  This repo houses the code for the Express server listening for requests from the front end, the API routes that define how the program will handle the different types of requests, and code for communicating with the database used by the app.  Additionally, this repo contains the Mongoose model definitions used by our database, as well as code for handling user authentication using Passport.  Finally, this repo contains tests written to ensure our database models behave as expected.  Below is a screenshot showing the successful passing of all tests:
![test screenshot](https://github.com/RyanEllingson/NURD-be/blob/master/assets/images/test%20screenshot.JPG)

## Techniques and Technologies Used
---

This app uses an Express server to handle requests from the front end.  It stores all user and group data in a MongoDB database, using the Mongoose object modelling package.  Mocha and Chai are used for testing.  Passport is used for user authentication.  The key used to access our database is securely stored as an environment variable in our hosting platform.

Future work includes further expanding the tests to include testing the interactions with the database.  In theory, Sinon is used to stub the Mongoose model methods and you should be able to test that the expected information is sent when the method is called, but I have been unable to get this to work as of yet.