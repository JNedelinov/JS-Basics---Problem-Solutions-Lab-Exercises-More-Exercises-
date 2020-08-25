function solve(input) {
    let counter = 0;
    for (let h = 1; h <= 12; h++) {
        for (let m = 0; m <= 59; m++) {
            if (counter === 0) {
                console.log(`${h}:${m}AM`);
            } else {
                console.log(`${h}:${m}PM`);
            }
        }
        if (h === 12 && counter === 0) {
            counter++;
            h = 0;
        }
        if (h === 12 && counter === 2) {
            break;
        }
    }
}

solve();

/* Building SoftUni Solution */

function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let i = floor; i > 0; i--) {
        let result = ''; /* concatenation */
        for (let a = 0; a < room; a++) {
            if (i === floor) {
                result += `L${i}${a} `;
            } else if (i % 2 === 0) {
                result += `O${i}${a} `;
            } else {
                result += `A${i}${a} `;
            }
        }
        console.log(result);
    }
}

building(['3', '4']);

/* Cookie Factory SoftUni Solution */

function cookieFactory(input) {
    let index = 0;
    let n = Number(input[index]);

    for (let i = 1; i <= n; i++) {
        index++;
        let command = input[index];
        let isEggs = false;
        let isFlour = false;
        let isSugar = false;
        let isBake = false;
        while (!isBake) {
            switch (command) {
                case 'eggs': isEggs = true; break;
                case 'sugar': isSugar = true; break;
                case 'flour': isFlour = true; break;
                case 'Bake!':
                    if (isEggs && isFlour && isSugar) {
                        isBake = true;
                        console.log(`Baking batch number ${i}...`);
                    } else {
                        console.log('The batter should contain flour, eggs and sugar!');
                    }
                    ; break;
            }
            if (isEggs && isFlour && isSugar && isBake) {
                break;
            }
            index++;
            command = input[index];
        }
    }
}

/* cookieFactory([
    '2', 'flour',
    'eggs', 'sugar',
    'chocolate', 'Bake!',
    'flour', 'eggs',
    'sugar', 'caramel',
    'peanuts', 'Bake!'
]); */


cookieFactory([
    '3', 'flour', 'eggs',
    'jam', 'Bake!', 'sugar',
    'Bake!', 'flour', 'eggs',
    'milk', 'almonds', 'sugar',
    'Bake!', 'flour', 'eggs',
    'sugar', 'Bake!'
]);

/* CINEMA TICKETS - SOFTUNI SOLUTIONS */

/* ---------------------------------------------------- */

/* MY SOLUTION */

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