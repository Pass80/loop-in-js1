console.log('==========1===========');

let i = 0;

do {
    console.log(`the Number is ${i}`);
    i += 2;
} while (i < 21);

console.log('==========2===========');

let j = 1;

do {
    console.log(`the Number is ${j}`);
    j += 1;
} while (j < 6);

console.log('==========3===========');

const numInput = document.getElementById('number');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

let numOfO = [];

const addOForWord = () => {
    result.innerHTML = '';
    numOfO.push('L');
    for (let s = 0; s < +numInput.value; s++) {
        numOfO.push('O');
    }
    numOfO.push('P');
    result.innerHTML = numOfO.join('');
    numOfO = [];
};

console.log('=====================');
