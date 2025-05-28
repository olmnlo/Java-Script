'use strict';

let myNumber = Math.trunc(Math.random() * 20) + 1;
// let myNumber = 5;

function check() {
  let score = Number(document.querySelector('.score').textContent);
  let guess = document.querySelector('.guess').value;
  if (guess == myNumber) {
    document.querySelector('.number').textContent = guess;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'click again to retry';
    document.body.style.backgroundColor = '#60b347';
    myNumber = Math.trunc(Math.random() * 20) + 1;
  } else if (guess < myNumber) {
    document.querySelector('.message').textContent = 'Low';
    document.querySelector('.score').textContent = score - 1;
  } else if (guess > myNumber) {
    document.querySelector('.message').textContent = 'Hihg';
    document.querySelector('.score').textContent = score - 1;
  }
}
function again() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
}

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', again);
