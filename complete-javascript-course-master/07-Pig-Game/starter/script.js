'use strict';

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let player1Score = document.getElementById('score--0');
let player2Score = document.getElementById('score--1');
let player1CurrentScore = document.getElementById('current--0');
let player2CurrentScore = document.getElementById('current--1');
let whoPlay = true;
zero();

function zero() {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
}

function changePlayer() {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    whoPlay = false;
  } else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    whoPlay = true;
  }
  zero();
}

function nIsNotOne(n) {
  if (whoPlay) {
    player1Score.textContent = Number(player1Score.textContent) + n;
  } else {
    player2Score.textContent = Number(player2Score.textContent) + n;
  }
}

function newGame() {
  zero();
  whoPlay = true;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  hold();
  //   player2.classList.remove('player--active');
  //   player1.classList.add('player--active');
}

function hold() {
  if (whoPlay) {
    player1CurrentScore.textContent =
      Number(player1Score.textContent) +
      Number(player1CurrentScore.textContent);
    player1Score.textContent = 0;
  } else {
    player2CurrentScore.textContent =
      Number(player2Score.textContent) +
      Number(player2CurrentScore.textContent);
    player2Score.textContent = 0;
  }
  changePlayer();
}

function roll() {
  let n = Math.trunc(Math.random() * 6) + 1;
  switch (n) {
    case 1:
      document.querySelector('.dice').src = 'dice-1.png';
      changePlayer();
      break;
    case 2:
      document.querySelector('.dice').src = 'dice-2.png';
      nIsNotOne(n);
      break;
    case 3:
      document.querySelector('.dice').src = 'dice-3.png';
      nIsNotOne(n);
      break;
    case 4:
      document.querySelector('.dice').src = 'dice-4.png';
      nIsNotOne(n);
      break;
    case 5:
      document.querySelector('.dice').src = 'dice-5.png';
      nIsNotOne(n);
      break;
    case 6:
      document.querySelector('.dice').src = 'dice-6.png';
      nIsNotOne(n);
      break;
  }
}

btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', newGame);
