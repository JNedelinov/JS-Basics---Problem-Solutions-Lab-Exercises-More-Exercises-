/* Oscar Ceremony */

function oscarCeremony(input) {
    let rentForHall = +input[0];

    let oscarStatues = rentForHall - (rentForHall * .30);
    let oscarFood = oscarStatues - (oscarStatues * .15);
    let oscarSound = oscarFood * .50;

    let oscarExpenses = rentForHall + oscarStatues + oscarFood + oscarSound;

    console.log(oscarExpenses.toFixed(2));
}

oscarCeremony(['3500']);

/* Godzilla Against Kong */

function godzillaAgainstKong(input) {
    let movieBudget = +input[0];
    let movieStatists = +input[1];
    let statistOutfit = +input[2];

    let decor = movieBudget * .10;
    let outfit = movieStatists * statistOutfit;

    if (movieStatists > 150) {
        outfit -= outfit * .10;
    }

    let movieExpenses = decor + outfit;

    if (movieExpenses > movieBudget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${Math.abs(movieExpenses - movieBudget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${Math.abs(movieExpenses - movieBudget).toFixed(2)} leva left.`);
    }
}

godzillaAgainstKong(['20000', '120', '55.5']);

/* Cinema Week */

function cinemaWeek(input) {
    let movieName = input[0];
    let hallType = input[1];
    let boughtTickets = +input[2];

    let totalSumForCinema = 0;

    switch (hallType) {
        case 'normal': {
            if (movieName === 'A Star Is Born') {
                totalSumForCinema = boughtTickets * 7.50;
            } else if (movieName === 'Bohemian Rhapsody') {
                totalSumForCinema = boughtTickets * 7.35;
            } else if (movieName === 'Green Book') {
                totalSumForCinema = boughtTickets * 8.15;
            } else if (movieName === 'The Favourite') {
                totalSumForCinema = boughtTickets * 8.75;
            } else {
                console.log('Movie Is Not Nominated!');
            }
        }; break;
        case 'luxury': {
            if (movieName === 'A Star Is Born') {
                totalSumForCinema = boughtTickets * 10.50;
            } else if (movieName === 'Bohemian Rhapsody') {
                totalSumForCinema = boughtTickets * 9.45;
            } else if (movieName === 'Green Book') {
                totalSumForCinema = boughtTickets * 10.25;
            } else if (movieName === 'The Favourite') {
                totalSumForCinema = boughtTickets * 11.55;
            } else {
                console.log('Movie Is Not Nominated!');
            }
        }; break;
        case 'ultra luxury': {
            if (movieName === 'A Star Is Born') {
                totalSumForCinema = boughtTickets * 13.50;
            } else if (movieName === 'Bohemian Rhapsody') {
                totalSumForCinema = boughtTickets * 12.75;
            } else if (movieName === 'Green Book') {
                totalSumForCinema = boughtTickets * 13.25;
            } else if (movieName === 'The Favourite') {
                totalSumForCinema = boughtTickets * 13.95;
            } else {
                console.log('Movie Is Not Nominated!');
            }
        }; break;
    }

    console.log(`${movieName} -> ${totalSumForCinema.toFixed(2)} lv.`);
}

cinemaWeek(['A Star Is Born', 'luxury', '42']);

/* Cinema Voucher */

function cinemaVoucher(input) {
    let voucher = +input.shift();

    let boughtProduct = input.shift();

    let movies = 0;
    let products = 0;

    let sum = 0;

    while (boughtProduct !== 'End') {
        if (boughtProduct.length > 8) {
            sum = boughtProduct.charCodeAt(0) + boughtProduct.charCodeAt(1);
            if (sum <= voucher) {
                movies++;
                voucher -= sum;
            } else {
                break;
            }
        } else if (boughtProduct.length <= 8 && boughtProduct.length > 0) {
            sum = boughtProduct.charCodeAt(0);
            if (sum <= voucher) {
                products++;
                voucher -= sum;
            } else {
                break;
            }
        }

        sum = 0;
        boughtProduct = input.shift();
    }
    console.log(movies);
    console.log(products);
}

cinemaVoucher(['300', 'Captain Marvel', 'popcorn', 'Pepsi']);

/* Tennis Ranklist */

/* function tennisRanklist(input) {
    let numberOfTournaments = +input.shift();
    let pointsAtTheStart = +input.shift();

    let tournamentPhase = input.shift();

    let pointsFromTournaments = 0;
    
    let allPoints = 0;

    let wins = 0;

    for (let i = 1; i <= numberOfTournaments; i++) {
        switch (tournamentPhase) {
            case 'W': {
                wins++;
                pointsFromTournaments += 2000;
            }; break;
            case 'F': {
                pointsFromTournaments += 1200;
            }; break;
            case 'SF': {
                pointsFromTournaments += 720;
            }; break;
        }
        tournamentPhase = input.shift();
    }
    allPoints = pointsAtTheStart + pointsFromTournaments;
    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(pointsFromTournaments / numberOfTournaments)}`);
    console.log(`${(wins / numberOfTournaments * 100).toFixed(2)}%`);
}

tennisRanklist([]); */

/* Movie Ratings */
/* 
function movieRatings(input){
    let highestRatingMovie = '';
    let highestRating = Number.MIN_SAFE_INTEGER;

    let lowestRatingMovie = '';
    let lowestRating = Number.MAX_SAFE_INTEGER;

    let averageRating = 0;

    let movieNumber = +input.shift();
    let movieName = input.shift();
    let movieRating = +input.shift();

    for(let i = 1; i <= movieNumber; i++) {
        averageRating += movieRating;

        if (movieRating > highestRating) {
            highestRating = movieRating;
            highestRatingMovie = movieName;
        }

        if (movieRating < lowestRating) {
            lowestRating = movieRating;
            lowestRatingMovie = movieName;
        }

        movieName = input.shift();
        movieRating = +input.shift();
    }

    console.log(`${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / movieNumber).toFixed(1)}`);
}

movieRatings(); */

/* Cinema Tickets */

function cinemaTickets(input) {
    let student = 0;
    let standard = 0;
    let kid = 0;

    let nameOfMovie = input.shift();
    let freeSpace;

    let typeOfTicket;

    let totalTickets = 0;
    let ticketsForMovie = 0;

    let isMorePPL = false;

    while (nameOfMovie !== 'Finish') {
        freeSpace = +input.shift();
        
        typeOfTicket = input.shift();

        while (typeOfTicket !== 'End') {
            switch(typeOfTicket) {
                case 'standard': {
                    ticketsForMovie++;
                    totalTickets++;
                    standard++;
                }; break;
                case 'student': {
                    ticketsForMovie++;
                    totalTickets++;
                    student++;
                }; break;
                case 'kid': {
                    ticketsForMovie++;
                    totalTickets++;
                    kid++;
                }; break;
            }


            if (ticketsForMovie === freeSpace) {
                isMorePPL = true;
                break;
            } else {
                typeOfTicket = input.shift();
            }
        }

        console.log(`${nameOfMovie} - ${(ticketsForMovie / freeSpace * 100).toFixed(2)}% full.`);
        nameOfMovie = input.shift();
        ticketsForMovie = 0;

    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'

  ]);