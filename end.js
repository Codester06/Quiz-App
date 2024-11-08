const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

saveScoreBtn.addEventListener('click', saveHighScore);

function saveHighScore(e) {
  e.preventDefault();

  fetch('/api/highscores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: username.value,
      score: mostRecentScore
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    window.location.assign('/');
  })
  .catch(error => {
    console.error('Error saving high score: ', error);
  });
}

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});

finalScore.innerText = mostRecentScore;