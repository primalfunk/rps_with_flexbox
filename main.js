c_wins = 0
p_wins = 0
ties = 0

function StartGame(rps) {
  //remove the photos + win message
  var mNum
  if (rps === 'rock') {
    mNum = 0
  } else if (rps === 'paper') {
    mNum = 1
  } else {
    mNum = 2
  }
  arr = ['rock', 'paper', 'scissors']
  cNum = Math.floor(Math.random()*arr.length)
  
  //show the left side photo
  var my_side = document.createElement('img')
  my_side.src = "./pics/" + rps + "_left.jpg"
  my_side.height = 100;
  my_side.width = 100;
  document.getElementById('my_hand').appendChild(my_side)

  //show the right side photo
  var c_side = document.createElement('img')
  c_side.src = "./pics/" + arr[cNum] + "_right.jpg"
  c_side.height = 100;
  c_side.width = 100;
  document.getElementById('c_hand').appendChild(c_side)

  //choose a winner
  if (mNum == 0 && cNum == 1) {
    winner = 'Computer'
    c_wins ++
    console.log(c_wins + "for Computer")
  } else if (mNum == 0 && cNum == 2) {
    winner = 'Player'
    p_wins ++
    console.log(p_wins + " for Player")
  } else if (mNum == 1 && cNum == 2) {
    winner = 'Computer'
    c_wins ++
    console.log(c_wins + "for Computer")
  } else if (mNum == 1 && cNum == 0) {
    winner = 'Player'
    p_wins ++
    console.log(p_wins + " for Player")
  } else if (mNum == 2 && cNum == 0) {
    winner = 'Computer'
    c_wins ++
    console.log(c_wins + "for Computer")
  } else if (mNum == 2 && cNum == 1) {
    winner = 'Player'
    p_wins ++
    console.log(p_wins + " for Player")
  } else {
    winner = 'Tie'
    ties ++
    console.log(ties + " total draws so far.")
  }
  console.log("Player wins: " + c_wins + ", Computer wins: " + c_wins + ", Ties: " + ties)
  total = c_wins + p_wins + ties
  document.getElementById('stats').innerHTML = "Wins: " + p_wins + "<br>Losses: " + c_wins + "<br>Draws: " + ties
}

function clear_pics() {
  document.getElementById('c_hand').innerHTML = ''
  document.getElementById('my_hand').innerHTML = ''
  document.getElementById('winmsg').innerHTML = ''
}

var rButton = document.getElementById('rockbtn')
rButton.addEventListener('click', function() {
  clear_pics()
  StartGame('rock')
})
var sButton = document.getElementById('scissorsbtn')
sButton.addEventListener('click', function() {
  clear_pics()
  StartGame('scissors')
})
var pButton = document.getElementById('paperbtn')
pButton.addEventListener('click', function() {
  clear_pics()
  StartGame('paper')
})

