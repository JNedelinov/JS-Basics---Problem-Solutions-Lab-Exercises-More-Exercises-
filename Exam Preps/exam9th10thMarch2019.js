/* Basketball equipment */

function basketballEquipment(input) {
    let taxForOneYear = Number(input[0]);
    let basketballKicks = taxForOneYear - (taxForOneYear * .40);
    let basketballJersey = basketballKicks - (basketballKicks * .20);
    let basketball = (1 / 4) * basketballJersey;
    let basketballAccs = (1 / 5) * basketball;

    let moneyForBasketballEquipment = taxForOneYear + basketballKicks + basketballJersey + basketball + basketballAccs;

    console.log(moneyForBasketballEquipment.toFixed(2));
}

basketballEquipment(['320']);

/* Tennis Equipment */

function tennisEquipment(input) {
    let tennisRocketPrice = Number(input[0]);
    let tennisRockets = Number(input[1]);
    let tennisShoes = Number(input[2]);

    let tennisShoePrice = (1 / 6) * tennisRocketPrice;

    let totalForTR = tennisRocketPrice * tennisRockets;
    let totalForShoes = tennisShoes * tennisShoePrice;

    let restOfTheEquipment = (totalForTR + totalForShoes) * 0.20;

    let totalForEquipment = totalForTR + totalForShoes + restOfTheEquipment;

    let moneyForDjokovic = totalForEquipment / 8;
    let moneyForSponsors = (7 / 8) * totalForEquipment;

    console.log(`Price to be paid by Djokovic ${Math.floor(moneyForDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(moneyForSponsors)}`);
}

tennisEquipment(['850', '4', '2']);

/* Football Results */

function footballResults(input) {
    let match = input.shift();

    let wins = 0;
    let losses = 0;
    let drawns = 0;

    for (let i = 1; i <= 3; i++) {

        let home = Number(match.charAt(0));
        let away = Number(match.charAt(2));

        if (home > away) {
            wins++;
        } else if (home < away) {
            losses++;
        } else {
            drawns++;
        }

        match = input.shift();
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${drawns}`);
}

footballResults(['3:1', '0:2', '0:0']);

/* Skeleton */

function skeleton(input) {
    let minutesFromTest = +input[0];
    let secondsFromTest = +input[1];
    let trackInMeters = +input[2];
    let secondsForHundredMeters = +input[3];

    let totalTrack = (minutesFromTest * 60) + secondsFromTest;

    let lostTime = trackInMeters / 120;

    let totalLostTime = lostTime * 2.5;

    let hisTime = (trackInMeters / 100) * secondsForHundredMeters - totalLostTime;

    if (hisTime <= totalTrack) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${hisTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${Math.abs(hisTime - totalTrack).toFixed(3)} second slower.`);
    }
}

skeleton(['1', '20', '1546', '12']);

/* Gymnastics */

function gymnastics(input) {
    let country = input[0];
    let instrument = input[1];

    let grade = 0;

    switch (instrument) {
        case 'ribbon': {
            if (country === 'Russia') {
                sum = (9.100 + 9.400);
            } else if (country === 'Bulgaria') {
                sum = (9.600 + 9.400);
            } else if (country === 'Italy') {
                sum = (9.200 + 9.500);
            } else {
                console.log('Invalid Country!');
            }
        }; break;
        case 'hoop': {
            if (country === 'Russia') {
                sum = (9.300 + 9.800);
            } else if (country === 'Bulgaria') {
                sum = (9.550 + 9.750);
            } else if (country === 'Italy') {
                sum = (9.450 + 9.350);
            } else {
                console.log('Invalid Country!');
            }
        }; break;
        case 'rope': {
            if (country === 'Russia') {
                sum = (9.600 + 9.000);
            } else if (country === 'Bulgaria') {
                sum = (9.500 + 9.400);
            } else if (country === 'Italy') {
                sum = (9.700 + 9.150);
            } else {
                console.log('Invalid Country!');
            }
        }; break;
        default: {
            console.log('Invalid Instrument!');
        }; break;
    }
    console.log(`The team of ${country} get ${sum.toFixed(3)} on ${instrument}.`);
    console.log(`${(((20 - sum) / 20) * 100).toFixed(2)}%`);
}

gymnastics(['Bulgaria', 'ribbon']);

/* World Snooker Championship */

function worldSnookerChampionship(input) {
    let phase = input[0];
    let typeOfTicket = input[1];
    let numberOfTickets = +input[2];
    let photoWithTrophy = input[3];

    let sum = 0;
    let photo = 0;

    switch (typeOfTicket) {
        case 'Standard': {
            if (phase === 'Quarter final') {
                sum = 55.50 * numberOfTickets;
            } else if (phase === 'Semi final') {
                sum = 75.88 * numberOfTickets;
            } else if (phase === 'Final') {
                sum = 110.10 * numberOfTickets;
            } else {
                console.log('Invalid phase of the tournament!');
            }
        }; break;
        case 'Premium': {
            if (phase === 'Quarter final') {
                sum = 105.20 * numberOfTickets;
            } else if (phase === 'Semi final') {
                sum = 125.22 * numberOfTickets;
            } else if (phase === 'Final') {
                sum = 160.66 * numberOfTickets;
            } else {
                console.log('Invalid phase of the tournament!');
            }
        }; break;
        case 'VIP': {
            if (phase === 'Quarter final') {
                sum = 118.90 * numberOfTickets;
            } else if (phase === 'Semi final') {
                sum = 300.40 * numberOfTickets;
            } else if (phase === 'Final') {
                sum = 400.00 * numberOfTickets;
            } else {
                console.log('Invalid phase of the tournament!');
            }
        }; break;
    }

    if (photoWithTrophy === 'Y') {
        if (sum <= 4000) {
            photo = numberOfTickets * 40;
        }
    }

    if (sum > 4000) {
        sum -= sum * .25;
    } else if (sum > 2500 && sum <= 4000) {
        sum -= sum * .10;
        sum += photo;
    } else if (sum <= 2500) {
        sum += photo;
    }

    console.log(sum.toFixed(2));
}

worldSnookerChampionship(['Semi final', 'VIP', '9', 'Y']);

/* Game Number Wars */

function gameNumberWars(input) {
    let firstPlayer = input.shift();
    let secondPlayer = input.shift();

    let firstPlayerCard = input.shift();
    let secondPlayerCard = '';

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    while (firstPlayerCard !== 'End of game') {
        secondPlayerCard = input.shift();

        if (Number(firstPlayerCard) > Number(secondPlayerCard)) {
            firstPlayerPoints += Number(firstPlayerCard) - Number(secondPlayerCard);
        } else if (Number(firstPlayerCard) < Number(secondPlayerCard)) {
            secondPlayerPoints += Number(secondPlayerCard) - Number(firstPlayerCard);
        } else if (Number(firstPlayerCard) === Number(secondPlayerCard)) {
            console.log("Number wars!");
            firstPlayerCard = Number(input.shift());
            secondPlayerCard = Number(input.shift());

            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayer} is winner with ${firstPlayerPoints} points`);
            } else {
                console.log(`${secondPlayer} is winner with ${secondPlayerPoints} points`);
            }
            break;
        }

        firstPlayerCard = input.shift();

        if (firstPlayerCard === 'End of game') {
            console.log(`${firstPlayer} has ${firstPlayerPoints} points`);
            console.log(`${secondPlayer} has ${secondPlayerPoints} points`);
            break;
        }
    }
}

gameNumberWars([
    'Aleks', 'Georgi', '4',
    '5', '3', '2',
    '4', '3', '4',
    '4', '5', '2',
    '', '', ''
]
);

/* Darts */

function darts(input) {
    let totalDartsPoints = 301;

    let nameOfPlayer = input.shift();

    let successfulShots = 0;
    let unsuccessfulShots = 0;

    let isLess = false;

    let area = input.shift();

    while (area !== 'Retire') {
        let playerDartsPoints = +input.shift();

        switch (area) {
            case 'Single': {
                if (playerDartsPoints <= totalDartsPoints) {
                    successfulShots++;
                    totalDartsPoints -= playerDartsPoints;
                } else {
                    unsuccessfulShots++;
                    if (playerDartsPoints > totalDartsPoints) {
                        area = input.shift();
                        isLess = true;
                    }
                }
            }; break;
            case 'Double': {
                playerDartsPoints *= 2;
                if (playerDartsPoints <= totalDartsPoints) {
                    successfulShots++;
                    totalDartsPoints -= playerDartsPoints;
                } else {
                    unsuccessfulShots++;
                    if (playerDartsPoints > totalDartsPoints) {
                        area = input.shift();
                        isLess = true;
                    }
                }
            }; break;
            case 'Triple': {
                playerDartsPoints *= 3;
                if (playerDartsPoints <= totalDartsPoints) {
                    successfulShots++;
                    totalDartsPoints -= playerDartsPoints;
                } else {
                    unsuccessfulShots++;
                    if (playerDartsPoints > totalDartsPoints) {
                        area = input.shift();
                        isLess = true;
                    }
                }
            }; break;
            default: {
                console.log("Invalid Area of the Darts Table!");
            }; break;
        }

        if (totalDartsPoints !== 0) {
            if (!isLess) {
                isLess = false;
                area = input.shift();
                if (area !== 'Retire') {
                    continue;
                } else {
                    console.log(`${nameOfPlayer} retired after ${unsuccessfulShots} unsuccessful shots.`);
                    break;
                }
            } else {
                isLess = false;
                if (area !== 'Retire') {
                    continue;
                } else {
                    console.log(`${nameOfPlayer} retired after ${unsuccessfulShots} unsuccessful shots.`);
                    break;
                }
            }
        } else {
            console.log(`${nameOfPlayer} won the leg with ${successfulShots} shots.`);
            break;
        }
    }
}

darts([
    'Rob Cross', 'Triple', '20',
    'Triple', '20', 'Triple',
    '20', 'Triple', '20',
    'Double', '20', 'Triple',
    '20', 'Double', '5',
    'Triple', '10', 'Double',
    '6', 'Retire', ''
]);

/* Tennis Ranklist */

function tennisRanklist(input) {
    let pointsPerTournament = 0;
    let averagePointsPerTournament = 0;
    let wins = 0;

    let tournaments = +input.shift();
    let pointsAtTheBeginning = +input.shift();

    let totalGrigorPoints = 0;
    totalGrigorPoints += pointsAtTheBeginning;

    for (let tournamentNumber = 1; tournamentNumber <= tournaments; tournamentNumber++) {
        let phaseOfTournament = input.shift();
        switch (phaseOfTournament) {
            case 'W': {
                totalGrigorPoints += 2000;
                pointsPerTournament += 2000;
                wins++
            }; break;
            case 'F': {
                totalGrigorPoints += 1200;
                pointsPerTournament += 1200;
            }; break;
            case 'SF': {
                totalGrigorPoints += 720;
                pointsPerTournament += 720;
            }; break;
            default: {
                console.log("Invalid Phase of Tournament!");
            }; break;
        }
    }
    console.log(`Final points: ${totalGrigorPoints}`);
    console.log(`Average points: ${Math.floor(pointsPerTournament / tournaments)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);
}

tennisRanklist([
    '5', '1400', 'F',
    'SF', 'W', 'W',
    'SF', '', ''
]
);

/* Fitness Center */

function fitnessCenter(input) {
    let workout = 0;
    let protein = 0;

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;

    let shake = 0;
    let bar = 0;

    let numberOfVisitors = +input.shift();

    for (let visitor = 1; visitor <= numberOfVisitors; visitor++) {
        let acitivity = input.shift();
        if (acitivity === 'Back' || acitivity === 'Chest' || acitivity === 'Legs' || acitivity === 'Abs') {
            workout++;
            if (acitivity === 'Back') {
                back++;
            } else if (acitivity === 'Chest') {
                chest++;
            } else if (acitivity === 'Legs') {
                legs++;
            } else {
                abs++;
            }
        } else if (acitivity === 'Protein shake' || acitivity === 'Protein bar') {
            protein++;
            if (acitivity === 'Protein shake') {
                shake++;
            } else {
                bar++;
            }
        } else {
            console.log('Invalid Input');
        }
    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);

    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);

    console.log(`${((workout / numberOfVisitors) * 100).toFixed(2)}% - work out`);
    console.log(`${((protein / numberOfVisitors) * 100).toFixed(2)}% - protein`);
}

fitnessCenter([
    '7',
    'Chest',
    'Back',
    'Legs',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    ''
]);

/* High Jump */

function highJump(input) {
    let desiredHeight = +input.shift();

    let startHeight = desiredHeight - 30;

    let totalJumps = 0;

    let failedJumps = 0;

    let isFailed = false;

    let hisJump = 0;

    while (hisJump <= desiredHeight) {
        for (let i = 0; i < 3; i++) {
            hisJump = +input.shift();
            totalJumps++;
            if (hisJump > startHeight) {
                startHeight += 5;
                break;
            }
            if (i === 2) {
                console.log(`Tihomir failed at ${startHeight}cm after ${totalJumps} jumps.`);
                isFailed = true;
            }
        }
        if (isFailed) {
            break;
        }
        /* 
        hisJump = +input.shift();
        totalJumps++;

        if (hisJump > desiredHeight) {
            
            break;
        }

        if (hisJump > startHeight) {
            startHeight += 5;
            failedJumps = 0;
        } else {
            failedJumps++;
        }

        if (failedJumps === 3) {
            console.log(`Tihomir failed at ${startHeight}cm after ${totalJumps} jumps.`);
            break;
        } else {
            continue;
        } */
    }

    if (!isFailed) {
        console.log(`Tihomir succeeded, he jumped over ${desiredHeight}cm after ${totalJumps} jumps.`);
    }

    /* if (hisJump >= desiredHeight) {
        console.log(`Tihomir succeeded, he jumped over ${desiredHeight}cm after ${totalJumps} jumps.`);
    } */
}

highJump([
    '231', '205', '212',
    '213', '228', '229',
    '230', '235', ''
]
);

/* Basketball Tournament */

function basketballTournament(input) {
    let teamWins = 0;
    let teamLosts = 0;
    let totalNumberOfGames = 0;

    let tournamentName = input.shift();

    while (tournamentName !== 'End of tournaments') {
        let numberOfGames = +input.shift();
        totalNumberOfGames += numberOfGames;
        for (let i = 1; i <= numberOfGames; i++) {
            let desiTeamPoints = +input.shift();
            let otherTeamPoints = +input.shift();

            if (desiTeamPoints > otherTeamPoints) {
                teamWins++;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${Math.abs(desiTeamPoints - otherTeamPoints)} points.`);
            } else {
                teamLosts++
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${Math.abs(desiTeamPoints - otherTeamPoints)} points.`);
            }
        }
        tournamentName = input.shift();
    }
    console.log(`${((teamWins / totalNumberOfGames) * 100).toFixed(2)}% matches win`);
    console.log(`${((teamLosts / totalNumberOfGames) * 100).toFixed(2)}% matches lost`);
}

basketballTournament([
    'Dunkers', '2',
    '75', '65',
    '56', '73',
    'Fire Girls', '3',
    '67', '34',
    '83', '98',
    '66', '45',
    'End of tournaments', ''
]
);

/* 161 - place - 1170 points */