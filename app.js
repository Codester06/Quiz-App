const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: 'Viveks-MacBook-Air.local',
  user: 'root',
  password: 'codester06',
  database: 'Questions'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '.')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Route for the game page
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

// Route for the end page
app.get('/end', (req, res) => {
  res.sendFile(path.join(__dirname,'end.html'));
});

// Route for the highscores page
app.get('/highscores', (req, res) => {
  res.sendFile(path.join(__dirname, 'highscores.html'));
});


// API endpoint to fetch questions
app.get('/api/questions', (req, res) => {
  connection.query('SELECT * FROM questions', (err, results) => {
    if (err) {
      console.error('Error fetching questions: ', err);
      res.status(500).json({ error: 'Error fetching questions' });
      return;
    }

    res.json(results);
  });
});

// API endpoint to save high scores
app.get('/api/highscores', (req, res) => {
  connection.query('SELECT * FROM highscores ORDER BY score DESC', (err, results) => {
    if (err) {
      console.error('Error fetching high scores: ', err);
      res.status(500).json({ error: 'Error fetching high scores' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/highscores', (req, res) => {
  const { name, score } = req.body;

  // Insert the high score into the database
  connection.query('INSERT INTO highscores (name, score) VALUES (?, ?)', [name, score], (err, results) => {
    if (err) {
      console.error('Error saving high score: ', err);
      return res.status(500).json({ error: 'Error saving high score' });
    }

    res.status(201).json({ message: 'High score saved successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});