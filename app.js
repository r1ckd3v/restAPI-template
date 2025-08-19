const express = require('express');

const app = express();
const PORT = 8080;

// Your routes and middleware go here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add the message here
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
