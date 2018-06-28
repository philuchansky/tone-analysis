# Example app using IBM Watson's tone analysis API
## Getting started
- clone this repo to your machine
- within the repo directory, run `npm install`
- create a `.env` file at the root of the repo
- sign up for an [IBM Cloud](https://www.ibm.com/cloud/) account
- Create api credentials for the tone analysis API
- in the `.env` file, add your credentials in the following format:
```
WATSON_URL=https://gateway.watsonplatform.net/tone-analyzer/api
WATSON_USERNAME=auto-generated-username-here
WATSON_PASSWORD=auto-generated-password-here
```
- start the application with either `npm start` or `nodemon` if you have it.
- view on `localhost:3000`, and start analyzing!