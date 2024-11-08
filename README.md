
# Anime Quiz Application

This is an anime quiz application that allows users to test their knowledge about various anime series.

## Features

- Displays a list of multiple-choice questions about popular anime.
- Fetches questions from a MySQL database and dynamically populates the quiz.
- Keeps track of high scores and stores them in the database.
- Provides a clean and responsive user interface.

## Technologies Used

- HTML
- CSS
- JavaScript
- MySQL
- Node.js
- Express

## Database Structure

The application uses a MySQL database with two tables:

1. **questions**
   - `id`: Auto-incrementing primary key for the question.
   - `question`: Text of the question.
   - `choice1`, `choice2`, `choice3`, `choice4`: Four possible answer choices.
   - `answer`: Index of the correct answer choice (1-4).

2. **highscores**
   - `id`: Auto-incrementing primary key for the high score entry.
   - `name`: Name of the player.
   - `score`: Player's high score.

To create the database and tables, run the following SQL script:

```sql
CREATE DATABASE IF NOT EXISTS Questions;
USE Questions;

CREATE TABLE IF NOT EXISTS questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT,
  choice1 VARCHAR(255),
  choice2 VARCHAR(255),
  choice3 VARCHAR(255),
  choice4 VARCHAR(255),
  answer INT
);

INSERT INTO questions (question, choice1, choice2, choice3, choice4, answer)
VALUES
  ('Which anime is known for its iconic mecha battles?', 'Neon Genesis Evangelion', 'Cowboy Bebop', 'Attack on Titan', 'Death Note', 1);

CREATE TABLE IF NOT EXISTS highscores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  score INT
);
```

## Getting Started

To use the Anime Quiz application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/anime-quiz-app.git
   ```

2. **Install the required dependencies:**
   - [MySQL](https://www.mysql.com/downloads/) (for the database)
   - Node.js and npm for managing the application dependencies

3. **Update the database connection details in the application's code.**

4. **Run the `create_database.sql` script to set up the database and tables.**

5. **Install the npm dependencies:**

   ```bash
   npm install
   ```

6. **Start the application:**

   ```bash
   npm start
   ```

7. **Open the `index.html` file in your web browser.**

## `package.json` and npm Scripts

The application uses a `package.json` file to manage dependencies and scripts:

```json
{
  "name": "question_assignment",
  "version": "1.0.0",
  "description": "An Express app serving static files and connecting to a MySQL database",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mysql": "^2.18.1"
  },
  "author": "Vivek Sharma",
  "license": "ISC"
}
```

### npm Scripts

- **`npm start`**: Starts the Express server, allowing the application to serve static files and connect to the MySQL database.

## Development

If you want to modify the Anime Quiz application, you can follow these steps:

1. Open the project in your preferred code editor.
2. Modify the HTML, CSS, JavaScript, and SQL files as needed.
3. Test your changes locally by running the application and interacting with the quiz.
4. Once you're satisfied with your changes, commit and push the updates to your GitHub repository.
