'use strict';
let score0_element = document.getElementById('score--0');
let score1_element = document.getElementById('score--1');
let dice_element = document.querySelector('.dice');
let button_roll = document.querySelector('.btn--roll');
let button_new = document.querySelector('.btn--new');
let button_hold = document.querySelector('.btn--hold');
let current0_element = document.querySelector('#current--0');
let current1_element = document.querySelector('#current--1');
let player0_element = document.querySelector('.player--0');
let player1_element = document.querySelector('.player--1');


//  initial conditions

const score = [0, 0];
score0_element.textContent = 0;
score1_element.textContent = 0;
dice_element.classList.add('hidden');
let current = 0;
let active = 0;
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${active}`).textContent = 0;
    active = active === 0 ? 1 : 0;
    current = 0;
    player0_element.classList.toggle('player--active');
    player1_element.classList.toggle('player--active');
};

// dice functionality
button_roll.addEventListener('click', function () {
    if (playing) {
        const dice_number = Math.trunc(Math.random() * 6) + 1;
        dice_element.classList.remove('hidden');
        dice_element.src = `dice-${dice_number}.png`;
        if (dice_number !== 1) {
            current += dice_number;
            document.getElementById(`current--${active}`).textContent = current;
        }
        else {
            switchPlayer();

        }
    }

});
button_hold.addEventListener('click', function () {
    if (playing) {
        score[active] += current;
        document.getElementById(`score--${active}`).textContent = score[active];
        if (score[active] >= 100) {
            playing = false;
            dice_element.classList.add('hidden');
            document.querySelector(`.player--${active}`).classList.add('player--winner');
            document.querySelector(`.player--${active}`).classList.remove('player--active');
        }
        else {
            switchPlayer();

        }
    }

});
button_new.addEventListener('click', function () {

    document.querySelector(`.player--${active}`).classList.remove('player--winner');
    player0_element.classList.add('player--active');
    player1_element.classList.remove('player--active');
    score[0] = 0;
    score[1] = 0;
    current = 0;
    active = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    score0_element.textContent = 0;
    score1_element.textContent = 0;
    dice_element.classList.add('hidden')
    playing = true;
});
