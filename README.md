# Express CORS proxy server

## Introduction

This tiny Express app is a proxy server which can be used to call public APIs with a restrictive CORS policy.

When you try to call a public API from your browser, you may find your request blocked because of CORS. The solution is to call this Express app instead, and let this app call the public API for you. The request then becomes a server-to-server request, which CORS doesn't block.

## How to run the app

Install npm packages:

```
npm install
```

Start the app:

```
npm start
```

## How to make API calls

Here is how you can now call this Express app:

```javascript
fetch(
  // this is where you call the Express app
  'http://localhost:3001/',
)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.warn('Something went wrong.', error);
  });
```

Then change the `url` in `index.js` (of this app) to the url of the API endpoint you want to call.
