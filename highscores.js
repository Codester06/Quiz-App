const highScoresList = document.getElementById("highScoresList");

// Fetch high scores from the server
fetch('/api/highscores')
  .then(response => response.json())
  .then(highscores => {
    // Use the fetched high scores to display them
    displayHighscores(highscores);
  })
  .catch(error => {
    return 
  });

  function displayHighscores(highscores) {
    highScoresList.innerHTML = highscores
      .map(score => {
        // Capitalize the first letter of the name
        const capitalizedName = score.name.charAt(0).toUpperCase() + score.name.slice(1);
        return `<li class="high-score">${capitalizedName} - ${score.score}</li>`;
      })
      .join('');
}