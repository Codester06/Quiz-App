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
  ('What is the name of the protagonist in the anime "Fullmetal Alchemist: Brotherhood"?', 'Roy Mustang', 'Alphonse Elric', 'Edward Elric', 'Winry Rockbell', 3),
  ('Which anime is famous for its unique art style and supernatural elements?', 'Spirited Away', 'Naruto', 'Jojo''s Bizarre Adventure', 'Assassination Classroom', 1),
  ('What is the name of the main character in the anime "My Hero Academia"?', 'Izuku Midoriya', 'Katsuki Bakugo', 'Ochaco Uraraka', 'Shoto Todoroki', 1),
  ('Which anime is known for its long-running and epic storyline?', 'One Piece', 'Fairy Tail', 'Hunter x Hunter', 'Naruto', 1),
  ('What is the name of the protagonist in the anime "Code Geass"?', 'Lelouch Lamperouge', 'Suzaku Kururugi', 'C.C.', 'Kallen Stadtfeld', 1),
  ('Which anime is famous for its psychological themes and mind-bending plot twists?', 'Death Note', 'Steins;Gate', 'Evangelion', 'Attack on Titan', 1),
  ('What is the name of the main character in the anime "Akira"?', 'Tetsuo Shima', 'Kaneda Shotaro', 'Kei', 'Takashi', 2),
  ('Which anime is known for its unique blend of science fiction and fantasy?', 'Cowboy Bebop', 'Steins;Gate', 'Fullmetal Alchemist', 'Gurren Lagann', 4),
  ('What is the name of the protagonist in the anime "Demon Slayer: Kimetsu no Yaiba"?', 'Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 1);

CREATE TABLE IF NOT EXISTS highscores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  score INT
);


