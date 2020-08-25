/* Point on Rectangle Border */

function pointOnRectangleBorder(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    if (x1 <= x2 && y1 <= y2) {
        if ((x === x1 || x === x2) && (y >= y1 && y <= y2)) {
            console.log('Border');
        } else if ((y === y1 || y === y2) && (x >= x1 && x <= x2)) {
            console.log('Border');
        } else {
            console.log('Inside / Outside');
        }
    } else {
        console.log('error');
    }

    let firstCondition = (x === x1 || x === x2) && (y >= y1 && y <= y2);
    console.log(firstCondition);
    let secondCondition = (y === y1 || y === y2) && (x >= x2 && x <= x2);
    console.log(secondCondition);

    if (firstCondition || secondCondition) {
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}

pointOnRectangleBorder(['2', '-3', '12', '3', '12', '-1']);

/* Cinema */

function cinema(input) {
    let projection = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let income;

    switch (projection) {
        case 'Premiere': {
            income = (rows * columns) * 12.00;
            console.log(`${income.toFixed(2)} leva`);
        } break;
        case 'Normal': {
            income = (rows * columns) * 7.50;
            console.log(`${income.toFixed(2)} leva`);
        } break;
        case 'Discount': {
            income = (rows * columns) * 5.00;
            console.log(`${income.toFixed(2)} leva`);
        } break;
        default: console.log('Invalid Projection'); break;
    }
}

cinema(['Discount', '12', '30']);

/* Summer Outfit */

function summerOutfit(input) {
    let degrees = Number(input.shift());
    let timeOfDay = input.shift();

    if (degrees >= 10 && degrees <= 42) {
        switch (timeOfDay) {
            case 'Morning': {
                if (degrees >= 10 && degrees <= 18) {
                    console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
                } else if (degrees > 18 && degrees <= 24) {
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                } else if (degrees >= 25) {
                    console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
                } else {
                    console.log('error');
                }
            } break;
            case 'Afternoon': {
                if (degrees >= 10 && degrees <= 18) {
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                } else if (degrees > 18 && degrees <= 24) {
                    console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
                } else if (degrees >= 25) {
                    console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
                } else {
                    console.log('error');
                }
            } break;
            case 'Evening': {
                if (degrees >= 10 && degrees <= 18) {
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                } else if (degrees > 18 && degrees <= 24) {
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                } else if (degrees >= 25) {
                    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
                } else {
                    console.log('error');
                }
            } break;
            default: console.log('Invalid Time of the Day');
        }
    }
}

summerOutfit(['16', 'Morning']);

/* New House */

function newHouse(input) {
    let typeOfFlower = input.shift();
    let quantityOfFlowers = Number(input.shift());
    let budget = Number(input.shift());

    let neededMoney;

    if (budget >= 50 && budget <= 2500) {
        if (quantityOfFlowers >= 10 && quantityOfFlowers <= 1000) {
            switch (typeOfFlower) {
                case 'Roses': {
                    if (quantityOfFlowers > 80) {
                        neededMoney = (quantityOfFlowers * 5.00) * .9;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    } else {
                        neededMoney = quantityOfFlowers * 5.00;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    }
                } break;
                case 'Dahlias': {
                    if (quantityOfFlowers > 90) {
                        neededMoney = (quantityOfFlowers * 3.80) * .85;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    } else {
                        neededMoney = quantityOfFlowers * 3.80;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    }
                } break;
                case 'Tulips': {
                    if (quantityOfFlowers > 80) {
                        neededMoney = (quantityOfFlowers * 2.80) * .85;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    } else {
                        neededMoney = quantityOfFlowers * 2.80;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    }
                } break;
                case 'Narcissus': {
                    if (quantityOfFlowers < 120) {
                        neededMoney = (quantityOfFlowers * 3) * 1.15;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    } else {
                        neededMoney = quantityOfFlowers * 3;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    }
                } break;
                case 'Gladiolus': {
                    if (quantityOfFlowers < 80) {
                        neededMoney = (quantityOfFlowers * 2.50) * 1.20;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    } else {
                        neededMoney = quantityOfFlowers * 2.50;
                        if (neededMoney > budget) {
                            console.log(`Not enough money, you need ${(neededMoney - budget).toFixed(2)} leva more.`)
                        } else {
                            console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlower} and ${(budget - neededMoney).toFixed(2)} leva left.`);
                        }
                    }
                } break;
                default: console.log('Invalid Type of Flower'); break;
            }
        } else {
            console.log('Quantity of flowers out of set range!');
        }
    } else {
        console.log('Budget out of set range!');
    }
}

newHouse(['Tulips', '88', '260']);

/* Fishing Boat */

function fishingBoat(input) {
    let budgetOfGroup = Number(input.shift());
    let season = input.shift();
    let numberOfFishermen = Number(input.shift());

    let neededBudget;

    let rent = 0;

    if (budgetOfGroup >= 1 && budgetOfGroup <= 8000) {
        if (numberOfFishermen >= 4 && numberOfFishermen <= 18) {
            if (season === 'Spring') {
                if (numberOfFishermen <= 6) {
                    neededBudget = 3000 * .9;
                    if (numberOfFishermen % 2 === 0) {
                        neededBudget *= .95;
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                } else if (numberOfFishermen > 6 && numberOfFishermen <= 11) {
                    neededBudget = 3000 * .85;
                    if (numberOfFishermen % 2 === 0) {
                        neededBudget *= .95;
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                } else if (numberOfFishermen > 11) {
                    neededBudget = 3000 * .75;
                    if (numberOfFishermen % 2 === 0) {
                        neededBudget *= .95;
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                }
            } else if (season === 'Summer' || season === 'Autumn') {
                if (numberOfFishermen <= 6) {
                    neededBudget = 4200 * .9;
                    if (numberOfFishermen % 2 === 0) {
                        if (season !== 'Autumn') {
                            neededBudget *= .95;
                            if (neededBudget > budgetOfGroup) {
                                console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                            } else if (neededBudget <= budgetOfGroup) {
                                console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                            }
                        } else {
                            if (neededBudget > budgetOfGroup) {
                                console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                            } else if (neededBudget <= budgetOfGroup) {
                                console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                            }
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                } else if (numberOfFishermen > 6 && numberOfFishermen <= 11) {
                    neededBudget = 4200 * .85;
                    if (numberOfFishermen % 2 === 0) {
                        if (season !== 'Autumn') {
                            neededBudget *= .95;
                            if (neededBudget > budgetOfGroup) {
                                console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                            } else if (neededBudget <= budgetOfGroup) {
                                console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                            }
                        } else {
                            if (neededBudget > budgetOfGroup) {
                                console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                            } else if (neededBudget <= budgetOfGroup) {
                                console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                            }
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                } else if (numberOfFishermen > 11) {
                    neededBudget = 4200 * .75;
                    if (numberOfFishermen % 2 === 0) {
                        if (season !== 'Autumn') {
                            neededBudget *= .95;
                            if (neededBudget > budgetOfGroup) {
                                console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                            } else if (neededBudget <= budgetOfGroup) {
                                console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                            }
                        } else {
                            if (neededBudget > budgetOfGroup) {
                                console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                            } else if (neededBudget <= budgetOfGroup) {
                                console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                            }
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                }
            } else if (season === 'Winter') {
                if (numberOfFishermen <= 6) {
                    neededBudget = 2600 * .9;
                    if (numberOfFishermen % 2 === 0) {
                        neededBudget *= .95;
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                } else if (numberOfFishermen > 6 && numberOfFishermen <= 11) {
                    neededBudget = 2600 * .85;
                    if (numberOfFishermen % 2 === 0) {
                        neededBudget *= .95;
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                } else if (numberOfFishermen > 11) {
                    neededBudget = 2600 * .75;
                    if (numberOfFishermen % 2 === 0) {
                        neededBudget *= .95;
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    } else {
                        if (neededBudget > budgetOfGroup) {
                            console.log(`Not enough money! You need ${Math.abs(neededBudget - budgetOfGroup).toFixed(2)} leva.`);
                        } else if (neededBudget <= budgetOfGroup) {
                            console.log(`Yes! You have ${Math.abs(budgetOfGroup - neededBudget).toFixed(2)} leva left.`);
                        }
                    }
                }
            } else {
                console.log('Invalid Season');
            }
        } else {
            console.log('Number of Fishermen is Out of Set Range');
        }
    } else {
        console.log('Budget is Out of Set Range');
    }


    /* SOFTUNI EXAMPLE */


    switch (season) {
        case 'Spring': {
            rent = 3000;
        }; break;
        case 'Summer':
        case 'Autumn': {
            rent = 4200;
        }; break;
        case 'Winter': {
            rent = 2600;
        }; break;
    }

    if (numberOfFishermen <= 6) {
        rent *= .90;
    } else if (numberOfFishermen > 6 && numberOfFishermen <= 11) {
        rent *= .85;
    } else {
        rent *= .75;
    }

    if (numberOfFishermen % 2 === 0 && season !== 'Autumn') {
        rent *= .95;
    }

    if (budgetOfGroup >= rent) {
        console.log(`Yes! You have ${Math.abs(budgetOfGroup - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(budgetOfGroup - rent).toFixed(2)} leva.`)
    }
}

fishingBoat(['3000', 'Summer', '11']);

/* Journey */

function journey(input) {
    let hisBudget = Number(input.shift());
    let vacaySeason = input.shift();

    let spentMoney = 0;

    let destination;
    let typeOfVacay;

    if (hisBudget >= 10.00 && hisBudget <= 5000.00) {
        if (hisBudget <= 100) {
            destination = 'Bulgaria';
            if (vacaySeason === 'summer') {
                typeOfVacay = 'Camp';
                spentMoney = hisBudget * .30;
            } else if (vacaySeason === 'winter') {
                typeOfVacay = 'Hotel';
                spentMoney = hisBudget * .70;
            }
        } else if (hisBudget > 100 && hisBudget <= 1000) {
            destination = 'Balkans';
            if (vacaySeason === 'summer') {
                typeOfVacay = 'Camp';
                spentMoney = hisBudget * .40;
            } else if (vacaySeason === 'winter') {
                typeOfVacay = 'Hotel';
                spentMoney = hisBudget * .80;
            }
        } else if (hisBudget > 1000) {
            typeOfVacay = 'Hotel';
            destination = 'Europe'
            spentMoney = hisBudget * .90;
        }
    } else {
        console.log('Invalid Budget Range!');
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacay} - ${spentMoney.toFixed(2)}`);
}

journey(['1500', 'summer']);

/* Operations Between Numbers */

function operationsBetweenNumbers(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();

    let evenOdd;

    if ((num1 >= 0 && num1 <= 40000) && (num2 >= 0 && num2 <= 40000)) {
        switch (operator) {
            case '+': {
                if ((num1 + num2) % 2 === 0) {
                    evenOdd = 'even';
                } else {
                    evenOdd = 'odd';
                }
                console.log(`${num1} ${operator} ${num2} = ${num1 + num2} - ${evenOdd}`);
            }; break;
            case '-': {
                if ((num1 - num2) % 2 === 0) {
                    evenOdd = 'even';
                } else {
                    evenOdd = 'odd';
                }
                console.log(`${num1} ${operator} ${num2} = ${num1 - num2} - ${evenOdd}`);
            }; break;
            case '*': {
                if ((num1 * num2) % 2 === 0) {
                    evenOdd = 'even';
                } else {
                    evenOdd = 'odd';
                }
                console.log(`${num1} ${operator} ${num2} = ${num1 * num2} - ${evenOdd}`);
            }; break;
            case '/': {
                if (num2 !== 0) {
                    console.log(`${num1} ${operator} ${num2} = ${(num1 / num2).toFixed(2)}`);
                } else {
                    console.log(`Cannot divide ${num1} by zero`);
                }
            }; break;
            case '%': {
                if (num2 !== 0) {
                    console.log(`${num1} ${operator} ${num2} = ${num1 % num2}`);
                } else {
                    console.log(`Cannot divide ${num1} by zero`);
                }
            }; break;
            default: {
                console.log('Invalid Operator');
            }; break;
        }
    } else {
        console.log('Invalid Range of Numbers');
    }
}


operationsBetweenNumbers(['-1', '3', '*']);

/* Hotel Room */

function hotelRoom(input) {
    let month = input.shift();
    let nights = Number(input.shift());

    let studio;
    let apartment;

    if (nights >= 0 && nights <= 200) {
        switch (month) {
            case 'May':
            case 'October': {
                studio = 50;
                apartment = 65;
            }; break;
            case 'June':
            case 'September': {
                studio = 75.20;
                apartment = 68.70;
            }; break;
            case 'July':
            case 'August': {
                studio = 76;
                apartment = 77;
            }; break;
            default: console.log('Invalid Months'); break;
        }

        if (nights > 7 && nights <= 14 && (month === 'May' || month === 'October')) {
            studio *= .95;
        } else if (nights > 14 && (month === 'May' || month === 'October')) {
            studio *= .70;
            apartment *= .90;
        } else if (nights > 14 && (month === 'June' || month === 'September')) {
            studio *= .80;
            apartment *= .90;
        } else if (nights > 14) {
            apartment *= .90;
        }
        console.log(`Apartment: ${(apartment * nights).toFixed(2)} lv.`);
        console.log(`Studio: ${(studio * nights).toFixed(2)} lv.`);
    }
}

hotelRoom(['August', '20']);

/* On Time for the Exam */

function onTime(input) {
    let examHour = Number(input.shift());
    let examMinutes = Number(input.shift());
    let hourOfComing = Number(input.shift());
    let minutesOfComing = Number(input.shift());

    let examTime = examHour * 60 + examMinutes;
    let studentTime = hourOfComing * 60 + minutesOfComing;

    let diff = examTime - studentTime;

    let h = Math.floor(Math.abs(diff / 60));
    let min = Math.abs(diff % 60);
    if (min < 10) {
        min = '0' + min;
    }

    if (examHour >= 0 && examHour <= 23 && examMinutes >= 0 && examMinutes <= 59) {
        if (diff < 0) {
            /* late */
            console.log('Late');
            diff = Math.abs(diff);
            if (diff < 60) {
                /* only minutes (00) */
                console.log(`${diff % 60} minutes after the start`);
            } else {
                /* hours and minutes (:00) */
                console.log(`${h}:${min} hours after the start`);
            }
        } else if (diff === 0 || diff > 0 && diff <= 30) {
            /* on time */
            console.log('On time');
            diff = Math.abs(diff);
            if (diff % 60 !== 0) {
                console.log(`${diff % 60} minutes before the start`);
            }
        } else {
            /* early */
            console.log('Early');
            diff = Math.abs(diff);
            if (diff < 60) {
                console.log(`${min} minutes before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        }
    }
}

onTime(['0', '30', '0', '31']);

/* Volleyball */

function volleyball(input) {
    let typeOfYear = input.shift();
    let holidays = Number(input.shift());
    let hometown = Number(input.shift());

    let weekeneds = 48;

    let sofiaWeekends = (weekeneds - hometown) * 3 / 4;

    console.log(hometown);
    console.log(sofiaWeekends);

    let holidayGames = (holidays * 2) / 3;

    console.log(holidayGames);

    let totalGames = sofiaWeekends + hometown + holidayGames;

    console.log(totalGames);

    let leapGames;

    if (typeOfYear === 'leap') {
        leapGames = totalGames * .15;
        console.log(leapGames);
        console.log(Math.floor(leapGames + totalGames));
    } else {
        console.log(Math.floor(totalGames));
    }
}

volleyball(['normal', '6', '13']);