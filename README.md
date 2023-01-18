# Traive Frontend Challange

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalation and running

```bash
git clone https://github.com/imbroisi/traive
cd traive
npm i
npm start
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Deployment

The deployment is done automatically by [AWS Amplify](https://docs.amplify.aws/d).

Amplify is connect to `development` branch in the project repo at Github, so it will enter in CI/CD process eveytime there are changes in that branch.
