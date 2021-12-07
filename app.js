let Player1Score = 0  
let Player2Score = 0




function playerOneScore() {
  Player1Score++
  document.getElementById('teamOneScore').innerText= Player1Score
}

function playerOneScore3() {
  Player1Score++
  Player1Score++
  Player1Score++
  document.getElementById('teamOneScore').innerText= Player1Score
}

function playerOneScoreSubtract() {
  Player1Score--
  document.getElementById('teamOneScore').innerText= Player1Score
}
 