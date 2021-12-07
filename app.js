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

function playerOneScoreSubtract3() {
  Player1Score--
  Player1Score--
  Player1Score--
  document.getElementById('teamOneScore').innerText= Player1Score
}






function playerTwoScore() {
  Player2Score++
  document.getElementById('teamTwoScore').innerText= Player2Score
}

function playerTwoScore3() {
  Player2Score++
  Player2Score++
  Player2Score++
  document.getElementById('teamTwoScore').innerText= Player2Score
}

function playerTwoScoreSubtract() {
  Player2Score--
  document.getElementById('teamTwoScore').innerText= Player2Score
}

function playerTwoScoreSubtract3() {
  Player2Score--
  Player2Score--
  Player2Score--
  document.getElementById('teamTwoScore').innerText= Player2Score
}

function reset1() {
Player1Score = 0
document.getElementById('teamOneScore').innerText= Player1Score
}

function reset2() {
  Player1Score = 0
  document.getElementById('teamTwoScore').innerText= Player2Score
}