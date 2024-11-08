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

## Database Structure

The application uses a MySQL database with two tables:

1. **questions**
   - `id`: An auto-incrementing primary key for the question.
   - `question`: The text of the question.
   - `choice1`, `choice2`, `choice3`, `choice4`: The four possible answer choices.
   - `answer`: The index of the correct answer choice (1-4).

2. **highscores**
   - `id`: An auto-incrementing primary key for the high score entry.
   - `name`: The name of the player.
   - `score`: The player's high score.

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
  ('Which anime is known for its iconic mecha battles?', 'Neon Genesis Evangelion', 'Cowboy Bebop', 'Attack on Titan', 'Death Note', 1),
  -- Additional questions...
);

CREATE TABLE IF NOT EXISTS highscores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  score INT
);
```

## Getting Started

To use the Anime Quiz application, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/anime-quiz-app.git
   ```
2. Install the required dependencies:
   - [MySQL](https://www.mysql.com/downloads/) (for the database)
3. Update the database connection details in the application's code.
4. Run the `create_database.sql` script to set up the database and tables.
5. Open the `index.html` file in your web browser.

## Development

If you want to modify the Anime Quiz application, you can follow these steps:

1. Open the project in your preferred code editor.
2. Modify the HTML, CSS, JavaScript, and SQL files as needed.
3. Test your changes locally by running the application and interacting with the quiz.
4. Once you're satisfied with your changes, commit and push the updates to your GitHub repository.

