const express = require('express');
const mysql = require('mssql'); // MySQL client library

const app = express();
const port = 3000;

// Database connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sa', // Your database username
  password: 'Jack@15122000', // Your database password
  database: 'Bikestores' // Your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define API endpoint to fetch data from the database
app.get('/api/data', (req, res) => {
  // Example query: fetch all data from a 'users' table
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data from database' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
