# Web API Deployment Challenge

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please fork this repository and follow along **using your fork** as the instructor deploys the API to `heroku`.

# Continuous Deployment

CODE ==> COMMIT & PUSH ==> SETUP ==> HEROKU DEPLOYS

<== SETUP ==>
LOCAL GIT FOLDER => STAGING => REMOTE, GITHUB, BITBUCKET

## Deployment to Heroku
- make the PORT for the api dynamic aka read the port from the environment
- provide "start" script in `package.json` that uses `node` to run the API. Heroku will run your application using `npm start`
- create new application on heroku
- connect it to the branch to be deployed from the repository on GitHub.

- [ ] - `npm install dotenv`
- [ ] - create `.env` file
- [ ] - place `require('dotenv').config();` the the top of your `index.js` file
- [ ] - create `PORT=<PORT NUMBER>`