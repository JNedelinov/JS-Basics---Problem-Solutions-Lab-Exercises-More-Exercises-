/* FOR LOOP LAB EXERCISES AND EXAMPLES */

function solveUno() {
    /* let number = 0;
    while (number <= 10) {
        console.log(number);
        number++;
    } */

    for (let numberUno = 0; numberUno <= 10; numberUno++) {
        console.log(numberUno);
    }
}

solveUno();

/* Numbers from 1 to 100 on new line */

function solveDos() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

solveDos();

/* ASCII table */

function asciiTable() {
    let name = 'Pesho';
    /* всичко се свежда до нули и единици (двоична бройна система) */

    console.log(name.length);

    let = output = '';

    for (let index = 0; index < name.length; index++) {
        let asciiCode = name.charCodeAt(index);
        asciiCode += 1;
        let newSymbol = String.fromCharCode(asciiCode);
        output += newSymbol;

        console.log(asciiCode);
    }

    console.log(output);

    /* let asciiCode = name.charCodeAt(3);

    console.log(asciiCode); */
}

asciiTable();

/* All Latin Letters */

function allLatinLetters() {
    let letter = 'a';
    let lastLetter = 'z';

    let letterInNumber = letter.charCodeAt(0);
    let lastLetterInNumber = lastLetter.charCodeAt(0);

    console.log(letterInNumber);
    console.log(lastLetterInNumber);

    for (let i = letterInNumber; i <= lastLetterInNumber; i++) {
        let letterInString = String.fromCharCode(i);
        console.log(letterInString);
    }
}

allLatinLetters();

/* Work with Text */

function workWithText(input) {
    let name = input.shift();

    console.log(name[0]);
}

workWithText(['Pesho']);

/* Въвеждане по нов начин */

function inputInNewWay(input) {
    console.log(input);
    let firstName = input[0];
    let secondName = input[1];
    let thirdName = input[2];

    /* Разликата между този input[] и input.shift() e,
    че когато имаме input.shift() ние взимаме/присвояваме стойностите
    на дадената подред 'променлива', докато при input[]
    ние клонираме/копираме стойността и даваме копието
    на the given variable */

    for (let newWay = 0; newWay < input.length; newWay++) {
        console.log(input[newWay]);
    }
    console.log(input);
}

inputInNewWay(['Pesho', 'Gosho', 'Kiro']);

/* Сумиране на гласните букви */

function sumOfVowels(input) {
    let word = input[0];

    let sumOfLetters = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a') {
            sumOfLetters += 1;
        } else if (word[i] === 'e') {
            sumOfLetters += 2;
        } else if (word[i] === 'i') {
            sumOfLetters += 3;
        } else if (word[i] === 'o') {
            sumOfLetters += 4;
        } else if (word[i] === 'u') {
            sumOfLetters += 5;
        }
    }
    console.log(sumOfLetters);
}

sumOfVowels(['beer']);

/* Character Sequence */

function characterSequence(input) {
    let wordCS = input[0];

    for (let ii = 0; ii < wordCS.length; ii++) {
        console.log(wordCS[ii]);
    }
}

characterSequence(['ice cream']);

/* Sum of Numbers */

function sumOfNumber(input) {
    let countOfN = input[0];
    let sumOfNumbers = 0;

    for (let iI = 1; iI <= countOfN; iI++) {
        /* let num = Number(input[iI]); */
        sumOfNumbers += Number(input[iI]);
    }

    console.log(sumOfNumbers);
}

sumOfNumber(['2', '10', '20'])

/* Number Sequence */

function numberSequence(input) {
    let count = input[0];

    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;

    for (let x = 1; x <= count; x++) {
        if (Number(input[x]) > maxNum) {
            maxNum = Number(input[x]);
        }
        if (Number(input[x]) < minNum) {
            minNum = Number(input[x]);
        }
    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);
}

numberSequence(['5', '10', '20', '304', '0', '50']);

/* Left and Right */

function leftAndRight(input) {
    let abc = Number(input[0]);

    let sum1 = 0;
    let sum2 = 0;

    for (let c = 1; c < input.length - abc; c++) {
        sum1 += Number(input[c]);
    }

    for (let z = 1 + abc; z < input.length; z++) {
        sum2 += Number(input[z]);
    }

    if (sum1 === sum2) {
        console.log(`Yes, sum = ${sum1}`);
    } else {
        console.log(`No, diff = ${Math.abs(sum1 - sum2)}`);
    }
}

leftAndRight(['3', '10', '90', '50', '60', '40', '60']);

/* 
if (0 + 1 === 2+3) {
    console.log(`Yes, sum = ${Number(input[i]) + Number(input[i])}`);
} 
*/

/* Numbers from N to 1 */

function numbersUno(input) {
    let variableUno = Number(input[0]);

    for (let y = variableUno; y > 0; y--) {
        console.log(y);
    }
}

numbersUno(['5']);

/* Number from 1 to N with Step 3 */

function numbersDos(input) {
    let variableDos = Number(input[0]);

    for (let g = 1; g <= variableDos; g += 3) {
        console.log(g);
    }
}

numbersDos(['10']);

/* Smart Lilly */

function smartLilly(input) {
    let age = Number(input[0]);
    let goalPrice = Number(input[1]);
    let priceOfToy = Number(input[2]);

    let brother = 0;
    let evenSum = 0;
    let totalSum = 0;
    let toys = 0;
    let totalToys;
    let b = 1;

    for (let a = 1; a <= age; a++) {
        if (a % 2 === 0) {
            brother++;
            evenSum += 10 * b;
            b++;
        } else {
            toys++;
        }
    }
    totalToys = priceOfToy * toys;
    totalSum += (evenSum + totalToys) - brother;

    if (totalSum >= goalPrice) {
        console.log(`Yes! ${Math.abs(totalSum - goalPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(totalSum - goalPrice).toFixed(2)}`);
    }
}

smartLilly(['10', '170.00', '6'])

/* Odd / Even Sum */

function oddEvenSum(input) {
    let numCount = input[0];

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i < input.length; i++) {
        if (i % 2 === 0) {
            evenSum += Number(input[i]);
        } else {
            oddSum += Number(input[i]);
        }
    }
    if (evenSum === oddSum) {
        console.log('Yes');
        console.log(`Sum = ${evenSum}`);
    } else {
        console.log('No');
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }
}

oddEvenSum(['4', '10', '50', '60', '20'])

/* Четни степени на 2 */

function evenPowers(input) {
    let power = Number(input[0]);

    for (let i = 0; i <= power; i+=2) {
        console.log(Math.pow(2, i));
    }
}

evenPowers(['7']);