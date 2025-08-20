const express = require('express');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main');

const app = express();
const PORT = 8080;

// initialize body-parser for application/json
app.use(bodyParser.json());

// CORS Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// all the routes that starts by /main will be attended by this router
app.use('/main', mainRoutes);

// Add the message here
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
