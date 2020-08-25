/* Numbers to 1000 Ending on 7 */

function numbersEndingOnSeven() {
    /* for (let i = 7; i <= 1000; i+=10){
        console.log(i);
    } */

    for (let i = 0; i <= 1000; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

numbersEndingOnSeven();

/* Element Equal to the Sum of the Rest of the Numbers */

function equalElementToSum(input) {
    let n = Number(input[0]);

    let max = Number.MIN_SAFE_INTEGER;

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (Number(input[i]) > max) {
            max = Number(input[i]);
        }
        sum += Number(input[i]);
    }

    if (sum - max === max) {
        console.log('Yes');
        console.log(`Sum = ${max}`);
    } else {
        console.log('No');
        console.log(`Diff = ${Math.abs((sum - max) - max)}`);
    }
}

equalElementToSum(['3', '5', '5', '1']);

/* Odd / Even Positions */

function oddEvenPositions(input) {
    let randomNumber = Number(input[0]);

    let oddSum = 0;
    let minOdd = Number.MAX_SAFE_INTEGER;
    let maxOdd = Number.MIN_SAFE_INTEGER;

    let evenSum = 0;
    let minEven = Number.MAX_SAFE_INTEGER;
    let maxEven = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= randomNumber; i++) {
        if (i % 2 === 0) {
            evenSum += Number(input[i]);

            if (Number(input[i]) > maxEven) {
                maxEven = Number(input[i]);
            }

            if (Number(input[i]) < minEven) {
                minEven = Number(input[i]);
            }
        } else {
            oddSum += Number(input[i]);

            if (Number(input[i]) > maxOdd) {
                maxOdd = Number(input[i]);
            }

            if (Number(input[i]) < minOdd) {
                minOdd = Number(input[i]);
            }
        }
    }

    /* Odd Position Results */
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (minOdd === Number.MAX_SAFE_INTEGER) {
        console.log('OddMin=No,');
    } else {
        console.log(`OddMin=${minOdd.toFixed(2)},`);
    }
    if (maxOdd === Number.MIN_SAFE_INTEGER) {
        console.log('OddMax=No,');
    } else {
        console.log(`OddMax=${maxOdd.toFixed(2)},`);
    }

    /* Even Position Results */
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (minEven === Number.MAX_SAFE_INTEGER) {
        console.log('EvenMin=No,');
    } else {
        console.log(`EvenMin=${minEven.toFixed(2)},`);
    }
    if (maxEven === Number.MIN_SAFE_INTEGER) {
        console.log('EvenMax=No');
    } else {
        console.log(`EvenMax=${maxEven.toFixed(2)}`);
    }
}

oddEvenPositions(['0'])

/* Equal Couples */

function equalCouples(input) {
    /* В тази задача се гледат само последователните двойки */
    let num = Number(input[0]);
    let sumFirstPair = 0;
    let sumSecPair = 0;
    /* the counter is to check if the pair's position
    - odd or even and then if odd get a different sum, than
    the even sum (на коя двойка числа се намирам) */
    let counter = 0;
    /* let maxDiff = Number.MIN_SAFE_INTEGER; */
    let isEqual = true;

    /* Pairing the variables with this for-loop */
    for (let i = 1; i <= num * 2; i+=2) {
        let numA = Number(input[i]);
        let numB = Number(input[i + 1]); 
        if (counter % 2 === 0) {
            sumFirstPair = numA + numB;
        } else {
            sumSecPair = numA + numB;
            if (sumFirstPair !== sumSecPair) {
                isEqual = false;
/*                 let dif = Math.abs(sumFirstPair - sumSecPair);
                if (dif > maxDiff) {
                    maxDiff = dif;
                } */
            } 
        }
        counter++;
    }
    if (isEqual) {
        console.log(`Yes, value=${sumFirstPair}`);
    } else {
        console.log(`No, maxdiff=${Math.abs(sumFirstPair - sumSecPair)}`);
    }
}

equalCouples(['3', '1', '2', '0', '3', '4', '-1']);

/* Histogram */

function histogram(input) {
    let numbersInHistogram = Number(input.shift());

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    if (numbersInHistogram >= 1 && numbersInHistogram <= 1000) {
        for (let i = 0; i <= numbersInHistogram; i++) {
            if (Number(input[i]) > 0 && Number(input[i]) < 200) {
                p1++;
            } else if (Number(input[i]) >= 200 && Number(input[i]) < 400) {
                p2++;
            } else if (Number(input[i]) >= 400 && Number(input[i]) < 600) {
                p3++;
            } else if (Number(input[i]) >= 600 && Number(input[i]) < 800) {
                p4++;
            } else if (Number(input[i]) >= 800) {
                p5++;
            }
        }

        console.log(`${((p1 / numbersInHistogram) * 100).toFixed(2)}%`);
        console.log(`${((p2 / numbersInHistogram) * 100).toFixed(2)}%`);
        console.log(`${((p3 / numbersInHistogram) * 100).toFixed(2)}%`);
        console.log(`${((p4 / numbersInHistogram) * 100).toFixed(2)}%`);
        console.log(`${((p5 / numbersInHistogram) * 100).toFixed(2)}%`);
    } else {
        console.log('ERROR');
    }
}

histogram(['20', '53', '7', '56', '180', '450', '920', '12', '7', '150', '250', '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);

/* Divide Without Remainder */

function divideWithoutRemainder(input) {
    let numbers = Number(input.shift());

    let d1 = 0;
    let d2 = 0;
    let d3 = 0;

    if (numbers >= 1 && numbers <= 1000) {
        for (let i = 0; i <= numbers; i++) {
            if (Number(input[i]) % 2 === 0) {
                d1++;
            } 
            if (Number(input[i]) % 3 === 0) {
                d2++;
            } 
            if (Number(input[i]) % 4 === 0) {
                d3++;
            }
        }
        console.log(`${((d1 / numbers) * 100).toFixed(2)}%`);
        console.log(`${((d2 / numbers) * 100).toFixed(2)}%`);
        console.log(`${((d3 / numbers) * 100).toFixed(2)}%`);
    } else {
        console.log('ERROR');
    }
}

divideWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);

/* Salary */

function salary(input) {
    let tabs = input.shift();
    let salary = Number(input.shift());

    for (let i = 0; i <= tabs; i++) {
        if (salary > 0) {
            let openedTab = input[i];
            if (openedTab === 'Facebook') {
                salary -= 150;
            } else if (openedTab === 'Instagram') {
                salary -= 100;
            } else if (openedTab === 'Reddit') {
                salary -= 50;
            }
        } else {
            break;
        }
    }
    if (salary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(`${salary}`);
    }
}

salary([ '3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg', '' ]);