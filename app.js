import { getRandomThrow, getThrowNumber, checkResult } from './getRandomThrow.js';

const button = document.getElementById('submit-button');
const winsDisplay = document.getElementById('wins-display');
const loseDisplay = document.getElementById('lose-display');
const drawDisplay = document.getElementById('draw-display');
const resultDisplay = document.getElementById('result-display');
const resultImage = document.getElementById('result-image');

let wins = 0;
let lose = 0;
let draw = 0;


button.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);
    resultImage.classList.remove('hidden');

    if (computerChoice === 'rock') resultImage.src = 'https://images.homedepot-static.com/productImages/fa9fe9af-bd06-4a60-be35-384709e37a65/svn/outdoor-essentials-bagged-204952-64_1000.jpg';
    if (computerChoice === 'scissors') resultImage.src = 'https://www.ikea.com/us/en/images/products/sy-scissors__0112301_PE263788_S5.JPG?f=s';
    if (computerChoice === 'paper') resultImage.src = 'https://images.ctfassets.net/f1fikihmjtrp/29Ke1N1Qv2X0KsFOC4xyHd/6258f6d0581f8fa655485da0ec61cda3/10240-1009-1-3ww-l.jpg';

    if (result === 'win') {
        wins++;
        winsDisplay.textContent = wins;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Win!!!!';
    } else if (result === 'lose') {
        lose++;
        loseDisplay.textContent = lose;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Lose!!!!';
    } else {
        draw++;
        drawDisplay.textContent = draw;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Draw!!!!';
    }
});