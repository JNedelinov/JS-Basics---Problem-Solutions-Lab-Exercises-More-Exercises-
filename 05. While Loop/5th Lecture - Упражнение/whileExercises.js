/* Old Library */

function oldLibrary(input) {
    let book = input.shift();
    let librabryCapacity = +input.shift();

    let searchedBook = input.shift();

    let bookCount = 0;

    while (book !== searchedBook || bookCount < librabryCapacity) {
        if (searchedBook !== book) {
            searchedBook = input.shift();
            bookCount++;
            if (bookCount >= librabryCapacity) {
                break;
            }
        } else {
            console.log(`You checked ${bookCount} books and found it.`)
            break;
        }
    }

    if (bookCount > librabryCapacity || searchedBook !== book) {
        console.log('The book you search is not here!');
        console.log(`You checked ${bookCount} books.`);
    }
}

oldLibrary([
    'Bourne', '32',
    'True Story', 'Forever',
    'More Space', 'The Girl',
    'Spaceship', 'Strongest',
    'Profit', 'Tripple',
    'Stella', 'The Matrix',
    'Bourne'
])

/* Exam Preparation */

function examPreparation(input) {
    let badGrades = +input.shift();

    let counter = 0;
    let problem = 0;

    let nameOfExercise;
    let earnedGrade;

    let sumOfGrades = 0;
    let lastProblem;

    while (counter < badGrades) {
        nameOfExercise = input.shift();
        /* Дори и без тази проверка за дали nameOfExercise e != от undefined, програмата си работи,
        защото имаме лимит на лоши оценки и когато го стигнем
        цикъла спира (първи кейс), ако пък не достигнем лимита
        имаме условие с Enough, който спира цикъла (втори кейс) */
        if (nameOfExercise !== undefined) {
            if (nameOfExercise !== 'Enough') {
                problem++;
                lastProblem = nameOfExercise;
                earnedGrade = +input.shift();
                if (earnedGrade >= 2.00 && earnedGrade <= 4.00) {
                    counter++;
                }
                sumOfGrades += earnedGrade;

            } else {
                /* possible change of counter's value at the beginning */
                console.log(`Average score: ${(sumOfGrades / problem).toFixed(2)}`);
                console.log(`Number of problems: ${problem}`);
                console.log(`Last problem: ${lastProblem}`);
                break;
            }
        } else {
            break;
        }
    }
    if (counter === badGrades) {
        console.log(`You need a break, ${counter} poor grades.`)
    }
}

examPreparation([
    '3', 'Money',
    '6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough',
    ''
  ]
  )

  /* Vacation */

function vacation(input) {
    let vacationMoney = +input.shift();
    let availableMoney = +input.shift();

    let action = input.shift();
    let left;

    let check = availableMoney;

    let pastDays = 0;

    while (action !== undefined) {
        left = +input.shift();
        if (action === 'spend') {
            check -= left;
            if (check <= 0) {
                check = 0;
            }
            pastDays++;
        } else if (action === 'save') {
            check += left;
            pastDays++;
        }
        action = input.shift();
    }
    if (check < vacationMoney) {
        console.log(`You can't save the money.`);
        console.log(pastDays);
    } else {
        console.log(`You saved the money for ${pastDays} days.`);
    }
}

vacation([
    '250',   '150',
    'spend', '50',
    'spend', '50',
    'save',  '100',
    'save',  '100'
  ])

  /* Steps */

function steps(input) {
    let steps = 0;

    let stepsCalc = 0;

    while (stepsCalc < 10000) {
        steps = input.shift();
        if (steps !== undefined) {
            if (steps !== 'Going home') {
                stepsCalc += Number(steps);
            } else {
                steps = input.shift();
                stepsCalc += Number(steps);
                break;
            }
        } else {
            break;
        }
    }
    if (stepsCalc >= 10000) {
        console.log('Goal reached! Good job!');
    } else {
        console.log(`${Math.abs(stepsCalc - 10000)} more steps to reach goal.`)
    }
}

steps([ '1500', '3000', '250', '1548']);

/* Coins */

function coins(input) {
    let change = +input.shift();

    let bigCoins = Math.floor(change);
    /* console.log(bigCoins); */
    let mediumCoins = Math.floor(((change * 100) % 100) / 10) * 10;
    /* console.log(mediumCoins); */
    let smallCoins = Math.floor((change * 100) % 10);
    /* console.log(smallCoins); */

    let SumOfCoins = 0;
    /* console.log(SumOfCoins); */

    let result = 0;
    
/*     while (SumOfCoins !== change) { */
        if (bigCoins >= 1 && bigCoins <= 9) {
            if (bigCoins === 1 || bigCoins === 2 || bigCoins === 5) {
                result++;
            } else if (bigCoins === 1 + 2) {
                /* 3 */
                result += 2;
            } else if (bigCoins === 2 + 2) {
                /* 4 */
                result += 2;
            } else if (bigCoins === 1 + 5) {
                /* 6 */
                result += 2;
            } else if (bigCoins === 2 + 5) {
                /* 7 */
                result += 2;
            } else if (bigCoins === 1 + 2 + 5) {
                /* 8 */
                result += 3;
            } else if (bigCoins === 2 + 2 + 5) {
                /* 9 */
                result += 3;
            }
        } else {
            bigCoins = 0;
        }
        SumOfCoins += bigCoins; 
        if (mediumCoins >= 10 && mediumCoins <= 90) {
            if (mediumCoins === 10 || mediumCoins === 20 || mediumCoins === 50) {
                result++;
            } else if (mediumCoins === 10 + 20) {
                /* 30 */
                result += 2;
            } else if (mediumCoins === 20 + 20) {
                /* 40 */
                result += 2;
            } else if (mediumCoins === 10 + 50) {
                /* 60 */
                result += 3;
            } else if (mediumCoins === 20 + 50) {
                /* 70 */
                result += 2;
            } else if (mediumCoins === 10 + 20 + 50) {
                /* 80 */
                result += 3;
            } else if (mediumCoins === 20 + 20 + 50) {
                /* 90 */
                result += 3;
            }
        } else {
            mediumCoins = 0;
        }
        SumOfCoins += (mediumCoins / 100);
        if (smallCoins >= 1 && smallCoins <= 9) {
            if (smallCoins === 1 || smallCoins === 2 || smallCoins === 5) {
                result++;
            } else if (smallCoins === 1 + 2) {
                /* 3 */
                result += 2;
            } else if (smallCoins === 2 + 2) {
                /* 4 */
                result += 2;
            } else if (smallCoins === 1 + 5) {
                /* 6 */
                result += 2;
            } else if (smallCoins === 2 + 5) {
                /* 7 */
                result += 2;
            } else if (smallCoins === 1 + 2 + 5) {
                /* 8 */
                result += 3;
            } else if (smallCoins === 2 + 2 + 5) {
                /* 9 */
                result += 3;
            }
        } else {
            smallCoins = 0;
        }
        SumOfCoins += (smallCoins / 100);
        
/*     } */
    /* console.log(SumOfCoins); */
    console.log(result);
}

coins(['2.77'])

/* Softuni Coins Solution */

function softuniCoins(input) {
    let changeSf = Number(input.shift());
    changeSf *= 100;
    changeSf = Math.floor(changeSf);
    let coinsCnt = 0;

    while (changeSf > 0) {
        if (changeSf - 200 >= 0) {
            coinsCnt++;
            changeSf -= 200;
        } else if (changeSf - 100 >= 0) {
            coinsCnt++;
            changeSf -= 100;
        } else if (changeSf - 50 >= 0) {
            coinsCnt++;
            changeSf -= 50;
        } else if (changeSf - 20 >= 0) {
            coinsCnt++;
            changeSf -= 20;
        } else if (changeSf - 10 >= 0) {
            coinsCnt++;
            changeSf -= 10;
        } else if (changeSf - 5 >= 0) {
            coinsCnt++;
            changeSf -= 5;
        } else if (changeSf - 2 >= 0) {
            coinsCnt++;
            changeSf -= 2;
        } else if (changeSf - 1 >= 0) {
            coinsCnt++;
            changeSf -= 1;
        }
    }
    console.log(coinsCnt);
}

softuniCoins(['2.77']);

/* Cake */

function cake(input) {
    let sizeA = +input.shift();
    let sizeB = +input.shift();

    let size = sizeA * sizeB;

    let piecesInNum;
    let takenPieces = 0;

    let pieces;

    while (takenPieces < size) {
        pieces = input.shift();
        if (pieces !== "STOP") {
            piecesInNum = Number(pieces);
            takenPieces += piecesInNum;
        } else {
            if (takenPieces > size) {
                console.log(`No more cake left! You need ${Math.abs(size - takenPieces)} pieces more.`);
                break;
            } else if (takenPieces < size) {
                console.log(`${Math.abs(takenPieces - size)} pieces are left.`);
                break;
            } 
        }
    }
    if (pieces !== 'STOP' && takenPieces > size) {
        console.log(`No more cake left! You need ${Math.abs(size - takenPieces)} pieces more.`);
    } else if (pieces !== 'STOP' && takenPieces < size) {
        console.log(`${Math.abs(takenPieces - size)} pieces are left.`);
    }
}

cake([ '10', '2', '2', 'STOP', '4', '6', 'STOP' ])