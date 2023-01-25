# Accordion and Pagination

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specs of the project for development may be seen at [/dev-info](/dev-info/) directory.

## Node version

The project can be done with Node 18, but as AWS Amplify does not yet use version 18, it is recommended to use Node 16.\
AWS Amplify is the AWS service to deploy the page - see details below.

## Instalation and running

```bash
git clone https://github.com/imbroisi/react-accordion-pagination
cd react-accordion-pagination
npm i
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Launches the lint runner to analyse the code and find problems.\
See  [ESLint](https://eslint.org/) for more information.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Deployment

The deployment is done automatically to AWS by [AWS Amplify](https://docs.amplify.aws/d) service.\
Amplify is connect and watching the `main` branch in the project's [Github repository](https://github.com/imbroisi/react-accordion-pagination), so it will enter in CI/CD process eveytime there are changes in that branch.

## API mock

The API used by the program is mocked with [msw](https://mswjs.io/), so there is no need to have a backend running during the development cicle.\
For the purposes of this challenge, the API in production is also mocked (in the real world, the production system will access the backend, not the mock).

## Production Page

You can access the page in prodution at [https://main.d2mwsb69zg769t.amplifyapp.com](https://main.d2mwsb69zg769t.amplifyapp.com/).

## Lighthouse measurements

This is the Google's Lighthouse performance, quality, and correctness of the web app, printed Jan/19/2023.

![Lighthouse](/dev-info/lighthouse.png)
