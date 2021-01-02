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

Call this Express app from your own app. Here's an example:

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

## Sources / Further information

- [3 Ways to Fix the CORS Error — and How the Access-Control-Allow-Origin Header Works | by David Katz | Medium](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)
- [Fullstack part3 | Deploying app to internet](https://fullstackopen.com/en/part3/deploying_app_to_internet#same-origin-policy-and-cors)
