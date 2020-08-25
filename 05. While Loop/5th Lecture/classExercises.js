function solve1() {
    let num1 = 5;
    let num2 = 5;

    num1++;
    ++num2;

    console.log(num1);
    console.log(num2);
}

solve1();

/* while loop example 1 */

function wLoopE1() {
    let counter = 1;

    while (counter <= 12) {

        if (counter % 2 === 0) {
            console.log(counter);
        }

        counter++;
    }
}

wLoopE1();

/* Number in Range */

function numberInRange(input) {
    let numE1 = Number(input.shift());

    while (numE1 < 1 || numE1 > 100) {
        /* Четене на потребителски вход,
        докато не е изпълнено условието,
        в този случай until numE1 is in the range */
        numE1 = Number(input.shift());
    }

    console.log(numE1);
}

numberInRange(['-1', '102', '-11', '5', '-10', '111']);

/* While Loop Example #2 */

function wLoopE2(input) {
    let line = input.shift();

    while (line !== 'End') {
        let num = Number(line);

        console.log(num);

        line = input.shift();
    }
}

wLoopE2(['-1', '102', '-11', '5', '-10', '111', 'End']);

/* Password */

function login(input) {
    let username = input.shift();
    let password = input.shift();

    let passForLogin = input.shift();

    while (passForLogin !== password) {
        passForLogin = input.shift();
    }

    console.log(`Welcome ${username}!`);
}

login(['Nakov', '1234', 'pass', '1324', '1234'])

/* Row with Numbers 2k + 1 */

function rowWithNumbers(input) {
    let n = Number(input.shift());

    let k = 1;

    while (k <= n) {
        console.log(k);
        k = 2 * k + 1;
    }
}

rowWithNumbers(['8']);

/* Прекъсване на безкраен цикъл без да стигаме до false условие */

function solve2(input) {
    let counter = 1;
    while (true) {

        if (counter === 5) {
            break;
        }

        console.log('invalid loop!');
        counter++;
    }
}

solve2();

/* Account Balance */

function accountBalance(input) {
    let withdraw = Number(input.shift());

    let counter = 0;
    let balance = 0.0;
    let installment;

    while (counter < withdraw) {
        installment = Number(input.shift());

        if (installment < 0) {
            console.log('Invalid operation!');
            break;
        }

        balance += installment;
        console.log(`Increase: ${installment.toFixed(2)}`);
        counter++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(['3', '5.51', '69.42', '100']);

/* Max Number */

function maxNumber(input) {
    let n = +input.shift();
    let counter1 = 0;
    let n1 = +input.shift();
    let maxNum = n1;

    while (counter1 < n) {
        n1 = +input.shift();

        if (maxNum < n1) {
            maxNum = n1;
        }

        counter1++;
    }
    console.log(maxNum);
}

maxNumber(['2', '-2', '-1']);

/* Min Number */

function minNumber(input) {
    let amountOfNumbers = +input.shift();
    let counter2 = 0;
    let n2 = +input.shift();
    let minNum = n2;

    while (counter2 < amountOfNumbers) {
        n2 = +input.shift();

        if (minNum > n2) {
            minNum = n2;
        }

        counter2++;
    }
    console.log(minNum);
}

minNumber(['2', '-2', '-1']);

/* Graduation */

function graduation(input) {
    let nameOfStudent = input.shift();
    let counter3 = 0;
    let sumOfGrades = 0.0;

    while (counter3 < 12) {
        let grades1 = +input.shift();

        if (grades1 >= 4.00) {
            sumOfGrades += grades1;
            counter3++;
        }

    }
    let averageGrade = sumOfGrades / 12;
    console.log(`${nameOfStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

graduation([
    'Pesho', '4', '5.5',
    '6', '5.43', '4.5',
    '6', '5.55', '5',
    '6', '6', '5.43',
    '5', '6'
]);

/* Graduation pt.2 */

function graduationPtTwo(input) {
    let nameOfStudent2 = input.shift();

    let year = 0;
    let fail = 0;

    let sumOfGrades2 = 0.0;

    while (year < 12) {
        let grades2 = +input.shift();

        if (grades2 >= 4.00) {
            sumOfGrades2 += grades2;
            year++;
        } else if (grades2 < 4.00) {
            fail++;
            if (fail > 1) {
                console.log(`${nameOfStudent2} has been excluded at ${year} grade`);
                break;
            } else {
                year++;
            }
        }
    }
    let averageGrade2 = sumOfGrades2 / 12;

    if (year === 12) {
        console.log(`${nameOfStudent2} graduated. Average grade: ${averageGrade2.toFixed(2)}`);
    }
}

graduationPtTwo([
    'Gosho', '5', '5.5',
    '6', '5.43', '5.5',
    '6', '5.55', '5',
    '6', '6', '5.43',
    '5'
]);

/* Moving */

function moving(input) {
    let width = +input.shift();
    let length = +input.shift();
    let height = +input.shift();

    let space = width * length * height;

    let neededSpace = 0;

    let amount = input.shift();

    neededSpace += Number(amount);

    while (amount !== 'Done' && neededSpace < space) {
        amount = input.shift();
        if (amount !== undefined) {
            if (amount === 'Done') {
                if ((space - neededSpace) < 0) {
                    console.log(`No more free space! You need ${Math.abs(space - neededSpace)} Cubic meters more.`);
                    break;
                } else {
                    console.log(`${Math.abs(space - neededSpace)} Cubic meters left.`);
                    break;
                }
            } else {
                neededSpace += Number(amount);
            }
        } else {
            break;
        }
    }

    if (amount === undefined || amount !== 'Done'){
        if ((space - neededSpace) < 0){
            console.log(`No more free space! You need ${Math.abs(space - neededSpace)} Cubic meters more.`);
        } else {
            console.log(`${Math.abs(space - neededSpace)} Cubic meters left.`);
        }
    }
}

/* moving([ '10', '1', '2', '4', '6', 'Done']) */

moving([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '119'
  ])
/* 
  while (neededSpace < space) {
    amount = input.shift();
    if (amount !== undefined) {
        if (amount === 'Done') {
            if ((space - neededSpace) < 0) {
                console.log(`No more free space! You need ${Math.abs(space - neededSpace)} Cubic meters more.`);
                break;
            } else {
                console.log(`${Math.abs(space - neededSpace)} Cubic meters left.`);
                break;
            }
            } else {
                neededSpace += Number(amount);
            }
        } else {
            break;
        }
    }

if (String(amount) !== 'Done'){
    if ((space - neededSpace) < 0){
        console.log(`No more free space! You need ${Math.abs(space - neededSpace)} Cubic meters more.`);
    } else {
        console.log(`${Math.abs(space - neededSpace)} Cubic meters left.`);
    }
}


function moving(input) {
    let width = +input.shift();
    let length = +input.shift();
    let height = +input.shift();

    let space = width * length * height;

    let neededSpace = 0;

    let amount = input.shift();

    neededSpace += Number(amount);


while (neededSpace < space) {
    amount = input.shift();
    if (amount !== undefined) {
        if (amount === 'Done') {
            if ((space - neededSpace) < 0) {
                console.log(`No more free space! You need ${Math.abs(space - neededSpace)} Cubic meters more.`);
                break;
            } else {
                console.log(`${Math.abs(space - neededSpace)} Cubic meters left.`);
                break;
            }
            } else {
                neededSpace += Number(amount);
            }
        } else {
            break;
        }
    }


if (String(amount) !== 'Done'){
    if ((space - neededSpace) < 0){
        console.log(`No more free space! You need ${Math.abs(space - neededSpace)} Cubic meters more.`);
    } else {
        console.log(`${Math.abs(space - neededSpace)} Cubic meters left.`);
    }
}
} */