/* Watch */

function watch() {
    for (let h = 0; h <= 23; h++) {
        for (let min = 0; min <= 59; min++) {
            if (min >= 0 && min <= 9) {
                console.log(`${h}:0${min}`);
            } else {
                console.log(`${h}:${min}`);
            }
        }
    }
}

watch();

/* Multiplication */

function multiplication() {
    for (let f = 1; f <= 10; f++) {
        for (let s = 1; s <= 10; s++) {
            console.log(`${f} * ${s} = ${f * s}`);
        }
    }
}

multiplication();

/* Combinations */

function combinations(input) {
    let n = Number(input[0]);
    let solutions = 0;
    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                if (x1 + x2 + x3 === n) {
                    solutions++;
                }
            }
        }
    }
    console.log(solutions);
}

combinations(['10']);

/* Sum of Two Numbers */

function sumOfTwoNumber(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinations = 0;

    let flag = false;

    if (num1 >= 1 && num1 <= 999) {
        if (num2 > num1 && num2 <= 1000) {
            if (magicNum >= 1 && magicNum <= 10000) {
                for (let f = num1; f <= num2; f++) {
                    for (let s = num1; s <= num2; s++) {
                        combinations++;
                        if (f + s === magicNum) {
                            console.log(`Combination N:${combinations} (${f} + ${s} = ${f + s})`);
                            flag = true;
                            break;
                        }
                    }
                    if (flag) {
                        break;
                    }
                }
            }
            if (!flag) {
                console.log(`${combinations} combinations - neither equals ${magicNum}`);
            }
        }
    }
}

sumOfTwoNumber(['88', '888', '1000']);

/* Travelling */

function travelling(input) {
    let destination = input.shift();
    let minimalBudget = Number(input.shift());

    let sum = 0;

    while (destination !== 'End') {
        for (let i = 0; i < i + 1; i++) {
            let savedMoney = Number(input.shift(i));
            sum += savedMoney;
            if (sum >= minimalBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
        destination = input.shift();
        minimalBudget = Number(input.shift());
        sum = 0;
    }
}

travelling([
    'France', '2000', '300',
    '300', '200', '400',
    '190', '258', '360',
    'Portugal', '1450', '400',
    '400', '200', '300',
    '300', 'Egypt', '1900',
    '1000', '280', '300',
    '500', 'End', ''
]);

/* Name Wars */

function nameWars(input) {
    let name = input.shift();

    let asciiSum = 0;

    let maxSum = Number.MIN_SAFE_INTEGER;
    let nameOfWinner = name;

    while (name !== 'STOP') {
        for (let i = 0; i < name.length; i++) {
            asciiSum += name.charCodeAt(i);
        }
        if (asciiSum > maxSum) {
            maxSum = asciiSum;
            nameOfWinner = name;
        }
        name = input.shift();
        asciiSum = 0;
    }
    console.log(`Winner is ${nameOfWinner} - ${maxSum}!`);
}

nameWars(['Ivo', 'Niki', 'Valio', 'Konstantin', 'STOP', '']);

/* Building */

function building(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    let lApartments = ''; /* Variable for L Apartments */
    let oOffices = ''; /* Variable for O Offices */
    let aApartments = ''; /* Variable for A Apartments */

    for (let i = floors; i >= 1; i--) {
        for (let r = 0; r < rooms; r++) {
            if (i % 2 === 0) { /* offices O */
                if (i === floors || floors === 1) { /* Checking if i = the last floor OR if we have only one floor */
                    lApartments += `L${i}${r} `; /* Concatenating */
                    if (r === rooms - 1) { /* If r is equal to (rooms - 1), then we print the results on the console and continue with the loop */
                        console.log(lApartments);
                    }
                } else {
                    oOffices += `O${i}${r} `; /* Concatenating */
                    if (r === rooms - 1) {
                        console.log(oOffices);
                    }
                }

            } else { /* apartments A */
                if (i === floors || floors === 1) {
                    lApartments += `L${i}${r} `; /* Concatenating */
                    if (r === rooms - 1) {
                        console.log(lApartments);
                    }
                } else {
                    aApartments += `A${i}${r} `; /* Concatenating */
                    if (r === rooms - 1) {
                        console.log(aApartments);
                    }
                }
            }
        }

        /* Refreshing the Values of the Both Variables
        Because We Want Them on New Lines Every for Every
        New Floor */

        oOffices = '';
        aApartments = '';
    }
}

building(['10', '5']);

/* Cookie Factory */

function cookieFactory(input) {
    /* flour / eggs / sugar */
    let batch = Number(input.shift());
    let products = '';
    let rightProducts = 0;
    for (let i = 1; i <= batch; i++) {
        for (let b = 0; b < b + 1; b++) { /* infinite loop because when I get a result I break it in the true condition */
            products = input.shift(b);
            if (products !== 'Bake!') {
                if (products === 'flour' || products === 'eggs' || products === 'sugar') {
                    rightProducts++;
                }
            } else { /* Bake */
                if (rightProducts === 3) {
                    console.log(`Baking batch number ${i}...`);
                    rightProducts = 0;
                    break;
                } else {
                    console.log('The batter should contain flour, eggs and sugar!');
                    while (rightProducts !== 3) {
                        b++;
                        products = input.shift(b);
                        if (products === 'flour' || products === 'eggs' || products === 'sugar') {
                            rightProducts++;
                        }
                    }
                    b++;
                    products = input.shift(b);
                    if (products === 'Bake!') {
                        console.log(`Baking batch number ${i}...`);
                        rightProducts = 0;
                        break;
                    }
                }
            }
        }
    }
}

cookieFactory([
    '4', 'flour', 'eggs',
    'jam', 'Bake!', 'sugar',
    'Bake!', 'flour', 'eggs',
    'milk', 'almonds', 'sugar',
    'Bake!', 'flour', 'eggs',
    'sugar', 'Bake!', 'Bake!'
]);


/* Cinema Tickets */

function cinemaTickets(input) {
    let movie = input.shift();
    let freeSpace = Number(input.shift());

    let totalTickets = 0;

    let sepTickets = 0;

    let standard = 0;
    let student = 0;
    let kid = 0;

    let flag = false;

    while (movie !== 'Finish') {
        let ticket = input.shift();
        while (!flag) {
            if (ticket === 'student') {
                student++;
            } else if (ticket === 'standard') {
                standard++;
            } else if (ticket === 'kid') {
                kid++;
            }
            totalTickets++;
            sepTickets++;
            ticket = input.shift();
            if (ticket === 'End' || sepTickets === freeSpace) {
                flag = true;
            }
        }
        console.log(`${movie} - ${((sepTickets / freeSpace) * 100).toFixed(2)}% full.`);

        if (sepTickets === freeSpace) {
            movie = ticket;
        } else {
            movie = input.shift();
        }
        if (movie != 'Finish') {
            freeSpace = Number(input.shift());
            sepTickets = 0;
            flag = false;
        } else {
            continue;
        }
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    'The Matrix', '20',
    'student', 'standard',
    'kid', 'kid',
    'student', 'student',
    'standard', 'student',
    'End', 'The Green Mile',
    '17', 'student',
    'standard', 'standard',
    'student', 'standard',
    'student', 'End',
    'Amadeus', '3',
    'standard', 'standard',
    'standard', 'Finish'
])