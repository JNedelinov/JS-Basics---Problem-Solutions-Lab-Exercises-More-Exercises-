/* Matrix */

/* 

Description: 

The matrix is a rectangle table with columns and rows;



*/

function matrix(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    let output = '';

    let count = 0;

    for (let firstRowFirstNum = a; firstRowFirstNum <= b; firstRowFirstNum++) {
        for (let firstRowSecondNum = a; firstRowSecondNum <= b; firstRowSecondNum++) {
            for (let secondRowFirstNum = c; secondRowFirstNum <= d; secondRowFirstNum++) {
                for (let secondRowSecondNum = c; secondRowSecondNum <= d; secondRowSecondNum++) {

                    let firstDiagonalSum = firstRowFirstNum + secondRowSecondNum;
                    let secondDiagonalSum = firstRowSecondNum + secondRowFirstNum;

                    let firstRowNotEqual = firstRowFirstNum !== firstRowSecondNum;
                    let secondRowNotEqual = secondRowFirstNum !== secondRowSecondNum;

                    if (firstDiagonalSum === secondDiagonalSum && firstRowNotEqual && secondRowNotEqual) {
                        console.log(`${firstRowFirstNum}${firstRowSecondNum} `);
                        console.log(`${secondRowFirstNum}${secondRowSecondNum} `);
                        console.log();
                    }
                }
            }
        }
    }
}

matrix(['1', '2', '3', '4']);


/* 

TIPS: 

- gotta think how many nested loops we will have;
- what is the actual condition to print;

*/


/* Number Pyramid  */

function numberPyramid(input) {
    let numberN = Number(input[0]);

    let count = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let rows = 1; rows <= numberN; rows++) {
        for (let cols = 1; cols < rows; cols++) {
            if (count > numberN) {
                isBigger = true;
                break;
            }
            printCurrentLine += `${count} `;
            count++;
        }
        console.log(`${printCurrentLine}`);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(['7']);

/* Coding */

function coding(input) {
    let randomNumber = input[0];

    let currentNumber = 0;
    let sumOfCurrentNum = 0;
    let currentNumberSymbol = '';

    let printLastSymbol = '';

    for (let separatedNum = randomNumber.length; separatedNum > 0; separatedNum--) {

        currentNumber = Number(randomNumber[separatedNum - 1]);
        sumOfCurrentNum += currentNumber + 33;
        currentNumberSymbol = String.fromCharCode(sumOfCurrentNum);

        if (currentNumber === 0) {
            console.log('ZERO');
        } else {
            for (let i = 1; i <= currentNumber; i++) {
                printLastSymbol += `${currentNumberSymbol}`;
            }
            console.log(printLastSymbol);
        }
        currentNumber = 0;
        sumOfCurrentNum = 0;
        currentNumberSymbol = '';
        printLastSymbol = '';
    }
}

coding(['9347439']);


/* 

EQUAL SUMS IN EVEN AND ODD POSITIONS:

- 6-ЦИЕФРЕНО ЧИСЛО; 
- РАГЛЕЖДАМЕ ВСЯКА ЦИФРИЧКА ПО ОТДЕЛНО И СУМИРАМЕ;
- ИФ, ЗА ДА ВИДИМ ДАЛИ СУМИТЕ НА ЦИФРИТЕ НА ЧЕТНИТЕ МЕСТА СА РАВНИ НА ЦИФРИТЕ НА НЕЧЕТНИТЕ МЕСТА;

*/

function equalSumsOddEven(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let oddSum = 0;
    let evenSum = 0;

    let concatRes = '';

    for (let i = num1; i <= num2; i++) {
        let lengthOfNum1 = String(i).length;
        for (let j = 0; j < lengthOfNum1; j++) {
            if (j % 2 === 0) {
                evenSum += Number(String(i).charAt(j));
            } else {
                oddSum += Number(String(i).charAt(j));
            }
        }
        if (evenSum === oddSum) {
            concatRes += `${i} `;
        }
        oddSum = 0;
        evenSum = 0;
    }
    console.log(concatRes);
}

equalSumsOddEven(['100000', '100050']);

/* Equal Sums Left and Right Positions */

/* 

    - if sumLeft > sumRight => the middle number in the number 
    is additioned with the sumRight => newSum = middleNum + sumRight

    1. Counting and checking the big numbers (going thru them);
    2. New Variable which will save the String value of the every
    number in the 1st for-loop (used for the .length property and
    to check each small number in given position from the bigger
    number);
    3. Creating a new for-loop for the 'going thru' the number;
    4. In the nested for-loop:
    - Condition if j < 2 (left numbers without the middle one (2)) => 
    => sumLeft + the consecutive single number from the bigger number;
    - Condition if j > 2 (right numbers without th middle one (2)) =>
    => sumRight + the consecutive single number from the bigger number;
    5. Still in the nested for-loop 1 condition with two nested conditions:
    - Condition if sumLeft === sumRight - if so, concatenate the number (i);
    } else {
            - Condition if sumLeft < sumRight - add the middle number (j = 2) from the big number (i) to sumLeft 
            and if the sumLeft === sumRight => concatenate the number (i) and change the value of the boolean variable to true;
        } else {
            - add the middle number (j = 2) from the big number (i) to sumRight
            and if the sumLeft === sumRight => concatenate the number (i) and change the value of the boolean variable to true;
        }
    }

*/

function equalSumsLR(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);

    let sumLeft = 0;
    let sumRight = 0;

    let newSum = 0;

    let concatOfNumbers = '';

    let isThereAnyNumbers = false;

    for (let i = numberOne; i <= numberTwo; i++) {
        let nOneStr = String(i);
        for (let j = 0; j < nOneStr.length; j++) {
            if (j < 2) {
                sumLeft += Number(String(i).charAt(j));
            } else if (j > 2) {
                sumRight += Number(String(i).charAt(j));
            }
        }
        if (sumLeft === sumRight) {
            concatOfNumbers += `${i} `;
            isThereAnyNumbers = true;
        } else {
            if (sumLeft < sumRight) {
                newSum += sumLeft + Number(String(i).charAt(2));
                if (newSum === sumRight) {
                    concatOfNumbers += `${i} `;
                    isThereAnyNumbers = true;
                }
            } else {
                newSum += sumRight + Number(String(i).charAt(2));
                if (newSum === sumLeft) {
                    concatOfNumbers += `${i} `;
                    isThereAnyNumbers = true;
                }
            }
        }
        sumLeft = 0;
        sumRight = 0;
        newSum = 0;
    }
    if (isThereAnyNumbers) {
        console.log(concatOfNumbers);
    }
}

equalSumsLR(['12345', '12666']);

/* Sum Prime Non Prime */

function sumPrimeNonPrime(input) {
    let randomInput = input.shift();

    let sumPrime = 0;
    let sumNonPrime = 0;

    let isPrimeNum = true;

    while (randomInput !== 'stop') {
        if (Number(randomInput) < 0) {
            console.log('Number is negative.');
            randomInput = input.shift();
            continue;
        } else if (Number(randomInput) >= 2 && Number(randomInput) <= 3) {
            isPrimeNum = true;
        } else if (Number(randomInput) % 2 === 0 || Number(randomInput) % 3 === 0) {
            isPrimeNum = false;
        }

        if (isPrimeNum) {
            sumPrime += Number(randomInput);
        } else {
            sumNonPrime += Number(randomInput);
        }

        isPrimeNum = true;
        randomInput = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(['10', '25', '0', '7', '19', '4', 'stop']);

/* function isPrime(input) {
    let random = input[index];
    let primey = false;
    while (random !== 'stop') {
        if (Number(random) % 2 === 0 || Number(random) % 3 === 0) {
            primey = false;
        } else {
            for (let i = 5; i < ; i += 6) {
                if (Number(random) % i === 0 || Number(random) % (i + 2) === 0) {
                    primey = false;
                } else {
                    primey = true;
                }
                if (primey) {
                    console.log(i);
                }
            }
        }
        if (primey) {
            console.log(random);
        }
        primey = false;
        random = input.shift();
    }
}

isPrime(['10', '25', '0', '7', '19', '4', 'stop']); */

/* Train the Trainers */

function trainTheTrainers(input) {
    let jury = input.shift();

    let presentation = input.shift();

    let sumOfPresentation = 0;

    let finalSum = 0;

    let loop = 0;

    while (presentation !== 'Finish') {
        for (let i = 0; i < Number(jury); i++) {
            sumOfPresentation += Number(input.shift(i));
        }
        console.log(`${presentation} - ${(sumOfPresentation / Number(jury)).toFixed(2)}.`);
        finalSum += sumOfPresentation;
        loop++;
        sumOfPresentation = 0;
        presentation = input.shift();
    }
    console.log(`Student's final assessment is ${(finalSum / (Number(jury) * loop)).toFixed(2)}.`);
}

trainTheTrainers([
    '2', 'While-Loop',
    '6.00', '5.50',
    'For-Loop', '5.84',
    '5.66', 'Finish',
    ''
]);

/* Fishing */

function fishing(input) {
    let numberOfFishes = input.shift();
    let fishName = input.shift();
    let fishKgs = input.shift();

    let asciiSum = 0;

    let lostMoney = 0;

    let taxTotalSum = 0;

    let fishCount = 1;

    let j = 1;

    let fishCountOver = false;

    let filledQuote = false;

    let wonMoney = 0;

    let diffSum = 0;

    while (fishName !== 'Stop') {
        for (let i = 0; i < fishName.length; i++) {
            asciiSum += fishName.charCodeAt(i);
        }
        while (!fishCountOver) {
            if (fishCount / 3 === j) {
                fishCountOver = true;
                j++;
                break;
            } else {
                break;
            }
        }

        if (!fishCountOver) {
            lostMoney += asciiSum / Number(fishKgs);
            /* taxTotalSum += lostMoney; */
        } else {
            wonMoney += asciiSum / Number(fishKgs);
        }



        if (fishCount < Number(numberOfFishes)) {
            fishName = input.shift();
            if (fishName !== 'Stop') {
                fishCountOver = false;
                asciiSum = 0;
                fishCount++;
                fishKgs = input.shift();
            } else {
                break;
            }
        } else {
            filledQuote = true;
            break;
        }

    }
    if (filledQuote) {
        console.log('Lyubo fulfilled the quota!');
        if (wonMoney > lostMoney) {
            diffSum = wonMoney - lostMoney;
            console.log(`Lyubo's profit from ${fishCount} fishes is ${diffSum.toFixed(2)} leva.`);
        } else {
            diffSum = lostMoney - wonMoney;
            console.log(`Lyubo lost ${diffSum.toFixed(2)} leva today.`);
        }
    } else {
        if (wonMoney > lostMoney) {
            diffSum = wonMoney - lostMoney;
            console.log(`Lyubo's profit from ${fishCount} fishes is ${diffSum.toFixed(2)} leva.`);
        } else {
            diffSum = lostMoney - wonMoney;
            console.log(`Lyubo lost ${diffSum.toFixed(2)} leva today.`);
        }
    }
}

fishing(['6', 'Bluefish', '17.4', 'Garfish', '14.9', 'Stop']);

/* Password Generator */

function passGenerator(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    let concat = '';

    for (let firstSymbol = 1; firstSymbol < firstNum; firstSymbol++) {
        for (let secondSymbol = 1; secondSymbol < firstNum; secondSymbol++) {
            for (let thirdSymbol = 97; thirdSymbol < 97 + secondNum; thirdSymbol++) {
                for (let fourthSymbol = 97; fourthSymbol < 97 + secondNum; fourthSymbol++) {
                    for (let fifthSymbol = 1; fifthSymbol <= firstNum; fifthSymbol++) {
                        if (fifthSymbol > firstSymbol && fifthSymbol > secondSymbol) {
                            concat += `${firstSymbol}${secondSymbol}${String.fromCharCode(thirdSymbol)}${String.fromCharCode(fourthSymbol)}${fifthSymbol} `;
                        }
                    }
                }
            }
        }
    }
    console.log(concat);
}

passGenerator(['3', '2']);
/* passGenerator(['3', '1']); */

/* Special Numbers */

function specialNumber(input) {
    let magicNumber = input.shift();

    let counter = 0;

    let specialNumbers = '';

    for (let i = 1111; i <= 9999; i++) {
        for (let j = 0; j < String(i).length; j++) {
            let symbol = String(i).charAt(j);
            if (Number(magicNumber) % Number(symbol) === 0) {
                counter++;
            }
            if (counter === 4) {
                specialNumbers += `${i} `;
            }
        }
        counter = 0;
    }
    console.log(specialNumbers);
}

specialNumber(['3']);