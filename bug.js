const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

//Error: Unhandled 'error' event. This error is thrown when an error is not caught in a request handler and is not handled using app.use().