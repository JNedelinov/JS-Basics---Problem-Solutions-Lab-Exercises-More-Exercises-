/* 

function solve(){
    let firstNum = 5;
    let secondNum = 5;

    let comparison = firstNum === secondNum;

    if (comparison){
        console.log('They are equal.');
    }
    else{
        console.log('They are not equal.');
    }

    let secondComparison = firstNum !== secondNum;

    if(secondComparison){
        console.log('They are not equal.');
    }

    console.log('It runs.');
}

solve(); 

 */

/* 

function solve(){
    let areEqual = false;

    console.log(!areEqual);
}

solve(); 

*/

/* Check if the grade is excellent */

function checkingGrade(input) {
    let grade = Number(input.shift());

    let checker = grade >= 5.50;

    if (checker) {
        console.log('Excellent!');
    } else {
        console.log('Not excellent!');
    }
}

checkingGrade(['5.49 ']);

/* Greater number */

function greaterNumber(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());

    if (num1 > num2) {
        console.log(`Greater number: ${num1}`);
    } else {
        console.log(`Greater number: ${num2}`);
    }

    let greater = Math.max(num1, num2);

    console.log(greater);
}

greaterNumber(['10', '8']);

/* Even or Odd */

function evenOrOdd(input) {
    let a = Number(input.shift());

    if (a % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }

    /* Another Way of Finding the Even and Odd */

    let isOdd = a % 2 === 1;
    /* let isEven = a % 2 === 0; */

    if (isOdd) {
        console.log('odd');
    } else {
        console.log('even');
    }
}

evenOrOdd(['7']);

/* Серии от проверки. По-сложни условни конструкции */

function solve(input) {
    let day = Number(input.shift());

    if (day === 1) {
        console.log('Monday');
    } else if (day === 2) {
        console.log('Tuesday');
    } else if (day === 3) {
        console.log('Wednesday');
    } else if (day === 4) {
        console.log('Thursday');
    } else if (day === 5) {
        console.log('Friday');
    } else if (day === 6) {
        console.log('Saturday');
    } else if (day === 7) {
        console.log('Sunday');
    } else {
        console.log('Invalid day');
    }
}

solve(['8']);

/* Number from 1 to 9 */

function oneToNine(input) {
    let numb = Number(input.shift());

    if (numb === 1) {
        console.log('one');
    } else if (numb === 2) {
        console.log('two');
    } else if (numb === 3) {
        console.log('three');
    } else if (numb === 4) {
        console.log('four');
    } else if (numb === 5) {
        console.log('five');
    } else if (numb === 6) {
        console.log('six');
    } else if (numb === 7) {
        console.log('seven');
    } else if (numb === 8) {
        console.log('eight');
    } else if (numb === 9) {
        console.log('nine');
    } else {
        console.log('number too big');
    }
}

oneToNine(['5']);

/* Check In What Range The Number Varies */

function oneToTwoHunnid(input) {
    let bigNum = Number(input.shift());

    if (bigNum >= 100 && bigNum <= 200) {
        console.log('Between 100 and 200')
    } else if (bigNum < 100) {
        console.log('Less than 100');
    } else {
        console.log('Greater than 200');
    }
}

oneToTwoHunnid(['209']);

/* Password Check */

function passCheck(input) {
    let pass = input.shift();

    if (pass === 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!')
    }
}

passCheck(['s3cr3t!P@ssw0rd']);

/* Similar Words */

function similarWords(input) {
    let word1 = input.shift();
    let word2 = input.shift();

    if (word1 === word2) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

similarWords(['Hello', 'Hello'])

/* Area of Figures */

function areaOfFigures(input) {
    let figure = input.shift();

    if (figure === 'square') {
        let aSide = Number(input.shift());
        let area = aSide * aSide;
        console.log(area.toFixed(3));
    } else if (figure === 'rectangle') {
        let aSide = Number(input.shift());
        let bSide = Number(input.shift());
        let area = aSide * bSide;
        console.log(area.toFixed(3));
    } else if (figure === 'circle') {
        let radius = Number(input.shift());
        let area = Math.PI * radius * radius;
        console.log(area.toFixed(3));
    } else if (figure === 'triangle') {
        let aSide = Number(input.shift());
        let heightOfTriangle = Number(input.shift());
        let area = (aSide * heightOfTriangle) / 2;
        console.log(area.toFixed(3));
    } else {
        console.log('Invalid figure');
    }
}

areaOfFigures(['rectangle', '7', '2.5']);

/* More Rational Solution of the 'Area of Figures' */

function areaOfFigures(input) {
    let figure = input.shift();
    let area;

    if (figure === 'square') {
        let aSide = Number(input.shift());
        area = aSide * aSide;
    } else if (figure === 'rectangle') {
        let aSide = Number(input.shift());
        let bSide = Number(input.shift());
        area = aSide * bSide;
    } else if (figure === 'circle') {
        let radius = Number(input.shift());
        area = Math.PI * radius * radius;
    } else if (figure === 'triangle') {
        let aSide = Number(input.shift());
        let heightOfTriangle = Number(input.shift());
        area = (aSide * heightOfTriangle) / 2;
    } else {
        console.log('Invalid figure');
    }

    console.log(area.toFixed(3));
}

areaOfFigures(['rectangle', '7', '2.5']);

/* Toy Shop */

function toyShop(input) {
    let priceOfVacation = Number(input.shift());
    let numberOfPuzzles = Number(input.shift());
    let numberOfDolls = Number(input.shift());
    let numberOfBears = Number(input.shift());
    let numberOfMinions = Number(input.shift());
    let numberOfTrucks = Number(input.shift());

    let totalSum = (numberOfPuzzles * 2.60) + (numberOfDolls * 3) + (numberOfBears * 4.10) + (numberOfMinions * 8.20) + (numberOfTrucks * 2);
    let totalNumberOfBoughtToys = numberOfPuzzles + numberOfDolls + numberOfBears + numberOfMinions + numberOfTrucks;

    let discount;
    let finalPrice;
    let rentPercentage;
    let profit;
    let left;

    if (totalNumberOfBoughtToys >= 50) {

        discount = totalSum * 0.25;
        finalPrice = totalSum - discount;
        rentPercentage = finalPrice * 0.10;
        profit = finalPrice - rentPercentage;
        left = profit - priceOfVacation;

/*         console.log(`Yes! ${(left.toFixed(2))} lv left.`); */

/*         if (left > priceOfVacation) {
            console.log(`Yes! ${(left.toFixed(2))} lv left.`);
        } */
    } else {

        rentPercentage = totalSum * 0.10;
        profit = totalSum - rentPercentage;
        left = Math.abs(profit - priceOfVacation);

        /* console.log(`Not enough money! ${(left.toFixed(2))} lv needed.`); */
        
/*         if (left < priceOfVacation) {
            console.log(`Not enough money! ${(left.toFixed(2))} lv needed.`);
        } */
    }

    if (priceOfVacation > left){
        console.log(`Not enough money! ${(left.toFixed(2))} lv needed.`);
    } else if (priceOfVacation < left){
        console.log(`Yes! ${(left.toFixed(2))} lv left.`);

    }
}

/* toyShop(['320', '8', '2', '5', '5', '1',]); */
toyShop([ '40.8', '20', '25', '30', '50', '10',  ]);