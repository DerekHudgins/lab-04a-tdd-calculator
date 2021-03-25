import { add } from './calculator.js';

const input1 = document.getElementById ('input-1');
const input2 = document.getElementById ('input-2');
const plus = document.getElementById ('plus');
const equals = document.getElementById ('equals');
const SumAnswer = document.getElementById ('sum-answer'); 
    const AnswerDisplay = document.getElementById ('answer-display');

SumAnswer.addEventListener('click', () => {
    AnswerDisplay.textContent=Number(input1.value)+Number(input2.value) 
});

const input3 = document.getElementById ('input-3');
const input4 = document.getElementById ('input-4');
const MinusAnswer = document.getElementById ('minus-answer');
const MinusAnswerDisplay =document.getElementById('minus-answer-display');

MinusAnswer.addEventListener('click', () => {
    MinusAnswerDisplay.textContent=Number(input3.value)-Number(input4.value)
});

const input5 = document.getElementById ('input-5');
const input6 = document.getElementById ('input-6');
const ProductAnswer = document.getElementById ('product-answer');
const ProductAnswerDisplay = document.getElementById('product-answer-display');

ProductAnswer.addEventListener('click', () => {
    ProductAnswerDisplay.textContent=Number(input5.value)*Number(input6.value)
});

const input7 = document.getElementById ('input-7');
const input8 = document.getElementById ('input-8');
const quotientAnswerDisplay = document.getElementById ('quoient-answer');


quotientAnswer.addEventListener('click', () => {
    QuotientAnswerDisplay.textContent=Number(input7.value)/Number(input8.value)
});
