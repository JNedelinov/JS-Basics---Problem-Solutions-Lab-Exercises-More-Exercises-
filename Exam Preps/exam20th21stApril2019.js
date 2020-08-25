/* Easter Lunch */

function easterLunch(input) {
    let numberOfStolens = +input[0];
    let numberOfEggs = +input[1];
    let kilogramsOfCookies = +input[2];

    let priceOfStolen = numberOfStolens * 3.20;
    let priceOfEggs = numberOfEggs * 4.35;
    let priceOfCookies = kilogramsOfCookies * 5.40;
    let priceOfDye = numberOfEggs * 12 * 0.15;

    let easterLunchPrice = priceOfCookies + priceOfDye + priceOfEggs + priceOfStolen;

    console.log(easterLunchPrice.toFixed(2));
}

easterLunch(['3', '2', '3']);

/* Easter Bakery */

function easterBakery(input) {
    let easterBakerySum = 0;

    let flourPriceForKG = +input[0];
    let flourKGs = +input[1];
    let sugarKGs = +input[2];
    let numberOfEggPlates = +input[3];
    let numberOfBoxesMaya = +input[4];

    let sugarPriceForKG = flourPriceForKG - (flourPriceForKG * .25);
    let priceOfEggPlate = flourPriceForKG + (flourPriceForKG * .10);
    let priceOfBoxMaya = sugarPriceForKG - (sugarPriceForKG * 0.80);

    easterBakerySum = (flourKGs * flourPriceForKG) + (sugarPriceForKG * sugarKGs) + (priceOfEggPlate * numberOfEggPlates) + (priceOfBoxMaya * numberOfBoxesMaya);

    console.log(easterBakerySum.toFixed(2));
}

easterBakery(['50', '10', '3.5', '6', '1']);

/* Easter Party */

function easterParty(input) {
    let numberOfGuests = +input[0];
    let couvertForOnePerson = +input[1];
    let budgetOfDesi = +input[2];

    let couvertPriceAfterDiscount = 0;

    let cakePrice = budgetOfDesi * .10;

    if (numberOfGuests >= 10 && numberOfGuests <= 15) {
        couvertPriceAfterDiscount = couvertForOnePerson - (couvertForOnePerson * .15);
    } else if (numberOfGuests > 15 && numberOfGuests <= 20) {
        couvertPriceAfterDiscount = couvertForOnePerson - (couvertForOnePerson * .20);
    } else if (numberOfGuests > 20) {
        couvertPriceAfterDiscount = couvertForOnePerson - (couvertForOnePerson * .25);
    }

    let easterPartyTotalSum;

    if (numberOfGuests >= 10) {
        easterPartyTotalSum = (numberOfGuests * couvertPriceAfterDiscount) + cakePrice;
    } else {
        easterPartyTotalSum = numberOfGuests * couvertForOnePerson + cakePrice;
    }

    if (easterPartyTotalSum <= budgetOfDesi) {
        console.log(`It is party time! ${Math.abs(easterPartyTotalSum - budgetOfDesi).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${Math.abs(easterPartyTotalSum - budgetOfDesi).toFixed(2)} leva needed.`);
    }
}

easterParty(['8', '25', '340']);

/* Easter Guests */

function easterGuests(input) {
    let guestsOfLyubo = +input[0];
    let budgetOfLyubo = +input[1];

    /* one easter bread for 3 persosns */
    /* each person gets 2 egss */

    let neededEasterBreads = Math.ceil(guestsOfLyubo / 3);
    let neededEgss = guestsOfLyubo * 2;

    let priceOfEasterBreads = neededEasterBreads * 4;
    let priceOfEasterEggs = neededEgss * 0.45;

    let totalLyuboSum = priceOfEasterBreads + priceOfEasterEggs;

    if (totalLyuboSum <= budgetOfLyubo) {
        console.log(`Lyubo bought ${neededEasterBreads} Easter bread and ${neededEgss} eggs.`);
        console.log(`He has ${Math.abs(totalLyuboSum - budgetOfLyubo).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${Math.abs(totalLyuboSum - budgetOfLyubo).toFixed(2)} lv. more.`);
    }
}

easterGuests(['10', '35']);

/* Easter Trip */

function easterTrip(input) {
    let destinationOfDesi = input[0];
    let dateOfReservation = input[1];
    let totalNights = +input[2];

    let expensesForTrip = 0;

    switch (destinationOfDesi) {
        case 'France': {
            if (dateOfReservation === '21-23') {
                expensesForTrip = totalNights * 30;
            } else if (dateOfReservation === '24-27') {
                expensesForTrip = totalNights * 35;
            } else if (dateOfReservation === '28-31') {
                expensesForTrip = totalNights * 40;
            } else {
                console.log("Invalid reservation dates");
            }
        }; break;
        case 'Italy': {
            if (dateOfReservation === '21-23') {
                expensesForTrip = totalNights * 28;
            } else if (dateOfReservation === '24-27') {
                expensesForTrip = totalNights * 32;
            } else if (dateOfReservation === '28-31') {
                expensesForTrip = totalNights * 39;
            } else {
                console.log("Invalid reservation dates");
            }
        }; break;
        case 'Germany': {
            if (dateOfReservation === '21-23') {
                expensesForTrip = totalNights * 32;
            } else if (dateOfReservation === '24-27') {
                expensesForTrip = totalNights * 37;
            } else if (dateOfReservation === '28-31') {
                expensesForTrip = totalNights * 43;
            } else {
                console.log("Invalid reservation dates");
            }
        }; break;
        default: {
            console.log("Invalid Country Destination!");
        }; break;
    }
    console.log(`Easter trip to ${destinationOfDesi} : ${expensesForTrip.toFixed(2)} leva.`);
}

easterTrip(['Germany', '24-27', '5']);

/* Easter Egg Painting */

function easterEggPainting(input) {
    let sizeOfEggs = input[0];
    let colorOfEggs = input[1];
    let batchOfEggs = +input[2];

    let salesOfTheFabric = 0;

    switch (sizeOfEggs) {
        case 'Large': {
            if (colorOfEggs === 'Red') {
                salesOfTheFabric = 16 * batchOfEggs;
            } else if (colorOfEggs === 'Green') {
                salesOfTheFabric = 12 * batchOfEggs;
            } else if (colorOfEggs === 'Yellow') {
                salesOfTheFabric = 9 * batchOfEggs;
            } else {
                console.log("Invalid Color Of Eggs");
            }
        }; break;
        case 'Medium': {
            if (colorOfEggs === 'Red') {
                salesOfTheFabric = 13 * batchOfEggs;
            } else if (colorOfEggs === 'Green') {
                salesOfTheFabric = 9 * batchOfEggs;
            } else if (colorOfEggs === 'Yellow') {
                salesOfTheFabric = 7 * batchOfEggs;
            } else {
                console.log("Invalid Color Of Eggs");
            }
        }; break;
        case 'Small': {
            if (colorOfEggs === 'Red') {
                salesOfTheFabric = 9 * batchOfEggs;
            } else if (colorOfEggs === 'Green') {
                salesOfTheFabric = 8 * batchOfEggs;
            } else if (colorOfEggs === 'Yellow') {
                salesOfTheFabric = 5 * batchOfEggs;
            } else {
                console.log("Invalid Color Of Eggs");
            }
        }; break;
        default: {
            console.log("Invalid Size Of Eggs");
        }; break;
    }
    console.log(`${(salesOfTheFabric - (salesOfTheFabric * .35)).toFixed(2)} leva.`);
}

easterEggPainting(['Large', 'Red', '7']);

/* The Easter Egg Fight */

function theEasterEggFight(input) {
    let playerOne = +input.shift();
    let playerTwo = +input.shift();

    let winnerOfFight = input.shift();

    let noMoreEggs = false;

    while (winnerOfFight !== 'End of battle') {

        if (winnerOfFight === 'one') {
            playerTwo--;
        } else if (winnerOfFight === 'two') {
            playerOne--;
        }

        if (playerOne === 0) {
            noMoreEggs = true;
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            break;
        } else if (playerTwo === 0) {
            noMoreEggs = true;
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
            break;
        }

        winnerOfFight = input.shift();
    }

    if (!noMoreEggs) {
        console.log(`Player one has ${playerOne} eggs left.`);
        console.log(`Player two has ${playerTwo} eggs left.`);
    }

}

theEasterEggFight([
    '5',
    '4',
    'one',
    'two',
    'one',
    'two',
    'two',
    'End of battle',
    '',
    '',
    ''
]
);

/* Easter Shop */

function easterShop(input) {
    let quantityOfEggsInStore = +input.shift();
    let buyOrFill = input.shift();
    let buyOrFillNum = +input.shift();
    let soldEggs = 0;

    let noEggs = false;

    while (buyOrFill !== 'Close') {

        if (buyOrFillNum > quantityOfEggsInStore && buyOrFill === 'Buy') {
            noEggs = true;
            console.log("Not enough eggs in store!");
            console.log(`You can buy only ${quantityOfEggsInStore}.`);
            break;
        }

        if (buyOrFill === 'Buy') {
            quantityOfEggsInStore -= buyOrFillNum;
            soldEggs += buyOrFillNum;
        } else if (buyOrFill === 'Fill') {
            quantityOfEggsInStore += buyOrFillNum;
        }

        buyOrFill = input.shift();
        buyOrFillNum = +input.shift();
    }
    if (!noEggs) {
        console.log("Store is closed!");
        console.log(`${soldEggs} eggs sold.`);
    }

}

easterShop([
    '20', 'Fill',
    '30', 'Buy',
    '15', 'Buy',
    '20', 'Close'
]
);

/* Easter Eggs */

function easterEggs(input) {
    let numberOfPaintedEggs = +input.shift();

    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;

    let colorOfEgg = '';

    let maxEggs = 0;

    for (let i = 1; i <= numberOfPaintedEggs; i++) {
        colorOfEgg = input.shift();

        if (colorOfEgg === 'red') {
            redEggs++;
        } else if (colorOfEgg === 'orange') {
            orangeEggs++;
        } else if (colorOfEgg === 'blue') {
            blueEggs++;
        } else {
            greenEggs++;
        }
    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);

    if (redEggs > orangeEggs && redEggs > blueEggs && redEggs > greenEggs) {
        console.log(`Max eggs: ${redEggs} -> red`);
    } else if (orangeEggs > redEggs && orangeEggs > blueEggs && orangeEggs > greenEggs) {
        console.log(`Max eggs: ${orangeEggs} -> orange`);
    } else if (blueEggs > redEggs && blueEggs > orangeEggs && blueEggs > greenEggs) {
        console.log(`Max eggs: ${blueEggs} -> blue`);
    } else {
        console.log(`Max eggs: ${greenEggs} -> green`);
    }
}

easterEggs([
    '7', 'orange',
    'blue', 'green',
    'green', 'blue',
    'red', 'green',
    ''
]
);

/* Easter Baking */

function easterBaking(input) {
    let maxFlour = Number.MIN_SAFE_INTEGER;
    let maxSugar = Number.MIN_SAFE_INTEGER;

    let easterBread = +input.shift();

    let neededSugar = 0;
    let neededFlour = 0;

    /* Math.Ceil -> flour + sugar */

    for (let i = 1; i <= easterBread; i++) {
        let sugarGrams = +input.shift();
        let flourGrams = +input.shift();

        neededSugar += sugarGrams;
        neededFlour += flourGrams;

        if (sugarGrams > maxSugar) {
            maxSugar = sugarGrams;
        }

        if (flourGrams > maxFlour) {
            maxFlour = flourGrams;
        }
    }
    console.log(`Sugar: ${Math.ceil(neededSugar / 950)}`);
    console.log(`Flour: ${Math.ceil(neededFlour / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

easterBaking([
    '3', '400',
    '350', '250',
    '300', '450',
    '380', ''
]
);

/* Easter Competition */

function easterCompetition(input) {
    let theBestBaker = '';
    let theBestBakerRes = Number.MIN_SAFE_INTEGER;

    let easterBreads = +input.shift();

    for (let i = 1; i <= easterBreads; i++) {
        let bakerName = input.shift();
        let totalPoints = 0;

        let gradeForEasterBread = input.shift();

        while (gradeForEasterBread !== 'Stop') {
            totalPoints += Number(gradeForEasterBread);

            gradeForEasterBread = input.shift();
        }

        console.log(`${bakerName} has ${totalPoints} points.`);

        if (totalPoints > theBestBakerRes) {
            theBestBakerRes = totalPoints;
            theBestBaker = bakerName;
            console.log(`${bakerName} is the new number 1!`);
        }
    }
    console.log(`${theBestBaker} won competition with ${theBestBakerRes} points!`);
}


easterCompetition([
    '2', 'Chef Angelov',
    '9', '9',
    '9', 'Stop',
    'Chef Rowe', '10',
    '10', '10',
    '10', 'Stop'
]
);

/* Easter Decoration */

function easterDecoration(input) {
    let averageBillPerClient = 0;

    let customersAtStore = +input.shift();

    for (let i = 1; i <= customersAtStore; i++) {
        let clientBill = 0;
        let itemsCount = 0;

        let itemBought = input.shift();

        while (itemBought !== 'Finish') {
            switch (itemBought) {
                case 'basket': {
                    clientBill += 1.50;
                    itemsCount++;
                }; break;
                case 'wreath': {
                    clientBill += 3.80;
                    itemsCount++;
                }; break;
                case 'chocolate bunny': {
                    clientBill += 7.00;
                    itemsCount++;
                }; break;
            }
            itemBought = input.shift();
        }

        if (itemsCount % 2 === 0) {
            clientBill -= clientBill * .20;
        }

        averageBillPerClient += clientBill;
        console.log(`You purchased ${itemsCount} items for ${clientBill.toFixed(2)} leva.`);
    }
    console.log(`Average bill per client is: ${(averageBillPerClient / customersAtStore).toFixed(2)} leva.`);
}

easterDecoration([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
]
);