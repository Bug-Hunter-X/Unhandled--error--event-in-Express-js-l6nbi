const express = require('express');
const app = express();

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});
