function solve(input) {
    switch ("dog") {
        case "cat": console.log("cat"); break;
        case "bird": console.log("bird"); break;
        default: console.log("not found");
    }
}

solve([]);

/* Day of the Week */

function dayOfTheWeek(input) {
    let day = Number(input.shift());

    switch (day) {
        case 1: console.log('Monday'); break;
        case 2: console.log('Tuesday'); break;
        case 3: console.log('Wednesday'); break;
        case 4: console.log('Thursday'); break;
        case 5: console.log('Friday'); break;
        case 6: console.log('Saturday'); break;
        case 7: console.log('Sunday'); break;
        default: console.log('Error'); break;
    }
}

dayOfTheWeek(['2']);

/*  */

/* Personal Titles */

function personalTitles(input) {
    let age = Number(input.shift());
    let gender = input.shift();

    if (age < 16 && gender === 'f') {
        console.log('Miss');
    } else if (age < 16 && gender === 'm') {
        console.log('Master');
    } else if (age >= 16 && gender === 'f') {
        console.log('Ms.');
    } else if (age >= 16 && gender === 'm') {
        console.log('Mr.');
    } else {
        console.log('Error');
    }

    if (age >= 0 && age < 16) {
        if (gender === 'f') {
            console.log('Miss');
        } else if (gender === 'm') {
            console.log('Master');
        } else {
            console.log('Error');
        }
    } else if (age >= 16) {
        if (gender === 'f') {
            console.log('Ms.');
        } else if (gender === 'm') {
            console.log('Mr.');
        } else {
            console.log('Error');
        }
    } else {
        console.log('Error');
    }
}

personalTitles(['12', 'm']);

/* Neighborhood Stores */

function neighborhoodStore(input) {
    let product = input.shift();
    let city = input.shift();
    let amount = Number(input.shift());

    let totalSum;

    if (product === 'coffee') {
        if (city === 'Sofia') {
            totalSum = amount * .50;
            console.log(totalSum);
        } else if (city === 'Plovdiv') {
            totalSum = amount * .40;
            console.log(totalSum);
        } else if (city === 'Varna') {
            totalSum = amount * .45;
            console.log(totalSum);
        } else {
            console.log('Invalid City');
        }
    } else if (product === 'water') {
        if (city === 'Sofia') {
            totalSum = amount * .80;
            console.log(totalSum);
        } else if (city === 'Plovdiv') {
            totalSum = amount * .70;
            console.log(totalSum);
        } else if (city === 'Varna') {
            totalSum = amount * .70;
            console.log(totalSum);
        } else {
            console.log('Invalid City');
        }
    } else if (product === 'beer') {
        if (city === 'Sofia') {
            totalSum = amount * 1.20;
            console.log(totalSum);
        } else if (city === 'Plovdiv') {
            totalSum = amount * 1.15;
            console.log(totalSum);
        } else if (city === 'Varna') {
            totalSum = amount * 1.10;
            console.log(totalSum);
        } else {
            console.log('Invalid City');
        }
    } else if (product === 'sweets') {
        if (city === 'Sofia') {
            totalSum = amount * 1.45;
            console.log(totalSum);
        } else if (city === 'Plovdiv') {
            totalSum = amount * 1.30;
            console.log(totalSum);
        } else if (city === 'Varna') {
            totalSum = amount * 1.35;
            console.log(totalSum);
        } else {
            console.log('Invalid City');
        }
    } else if (product === 'peanuts') {
        if (city === 'Sofia') {
            totalSum = amount * 1.60;
            console.log(totalSum);
        } else if (city === 'Plovdiv') {
            totalSum = amount * 1.50;
            console.log(totalSum);
        } else if (city === 'Varna') {
            totalSum = amount * 1.55;
            console.log(totalSum);
        } else {
            console.log('Invalid City');
        }
    } else {
        console.log('Invalid product');
    }

    /* SWITCH CASE */

    switch (city) {
        case 'Sofia': {
            if (product === 'coffee') {
                totalSum = amount * .50;
            } else if (product === 'water') {
                totalSum = amount * .80;
            } else if (product === 'beer') {
                totalSum = amount * 1.20;
            } else if (product === 'sweets') {
                totalSum = amount * 1.45;
            } else if (product === 'peanuts') {
                totalSum = amount * 1.60;
            } else {
                console.log('Invalid product');
            }
        } break;
        case 'Plovdiv': {
            if (product === 'coffee') {
                totalSum = amount * .40;
            } else if (product === 'water') {
                totalSum = amount * .70;
            } else if (product === 'beer') {
                totalSum = amount * 1.15;
            } else if (product === 'sweets') {
                totalSum = amount * 1.30;
            } else if (product === 'peanuts') {
                totalSum = amount * 1.50;
            } else {
                console.log('Invalid product');
            }
        } break;
        case 'Varna': {
            if (product === 'coffee') {
                totalSum = amount * .45;
            } else if (product === 'water') {
                totalSum = amount * .70;
            } else if (product === 'beer') {
                totalSum = amount * 1.10;
            } else if (product === 'sweets') {
                totalSum = amount * 1.35;
            } else if (product === 'peanuts') {
                totalSum = amount * 1.55;
            } else {
                console.log('Invalid product');
            }
        } break;
    }

    console.log(totalSum);

}

neighborhoodStore(['peanuts', 'Plovdiv', '1']);

/* По-сложни проверки. Булеви оператори */

function solve1(input) {
    if (1 < 2 && 3 < 4) {
        console.log('isTrue');
    }
}

solve1([]);

/* Number in a Given Interval */

function numInInterval(input) {
    let num = Number(input.shift());
    if ((num >= -100 && num <= 100) && num != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

numInInterval(['0']);

/* Fruit or Veggie */

function fruitOrVeggie(input) {
    let fOrV = input.shift();
    if (fOrV === 'banana' || fOrV === 'apple' || fOrV === 'kiwi' || fOrV === 'cherry' || fOrV === 'lemon' || fOrV === 'grapes') {
        console.log('fruit');
    } else if (fOrV === 'tomato' || fOrV === 'cucumber' || fOrV === 'pepper' || fOrV === 'carrot') {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

fruitOrVeggie(['java']);

/* Type of Animal */

function typeOfAnimal(input) {
    let animal = input.shift();

    switch (animal) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        default:
            console.log('unknown');
            break;
    }
}

typeOfAnimal(['bird']);

/* Invalid Number */

function invalidNumber(input) {
    let number = Number(input.shift());

    if (number >= 100 && number <= 200 || number === 0) {

    } else {
        console.log('invalid');
    }
}

invalidNumber(['100']);

/* Fruit Store */

function fruitStore(input) {
    let fruitty = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    let total;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': {
            switch (fruitty) {
                case 'banana': {
                    total = quantity * 2.50;
                    console.log(total.toFixed(2));
                } break;
                case 'apple': {
                    total = quantity * 1.20;
                    console.log(total.toFixed(2));
                } break;
                case 'orange': {
                    total = quantity * .85;
                    console.log(total.toFixed(2));
                } break;
                case 'grapefruit': {
                    total = quantity * 1.45;
                    console.log(total.toFixed(2));
                } break;
                case 'kiwi': {
                    total = quantity * 2.70;
                    console.log(total.toFixed(2));
                } break;
                case 'pineapple': {
                    total = quantity * 5.50;
                    console.log(total.toFixed(2));
                } break;
                case 'grapes': {
                    total = quantity * 3.85;
                    console.log(total.toFixed(2));
                } break;
                default: console.log('error');
            }
        } break;
        case 'Saturday':
        case 'Sunday': {
            switch (fruitty) {
                case 'banana': {
                    total = quantity * 2.70;
                    console.log(total.toFixed(2));
                } break;
                case 'apple': {
                    total = quantity * 1.25;
                    console.log(total.toFixed(2));
                } break;
                case 'orange': {
                    total = quantity * .90;
                    console.log(total.toFixed(2));
                } break;
                case 'grapefruit': {
                    total = quantity * 1.60;
                    console.log(total.toFixed(2));
                } break;
                case 'kiwi': {
                    total = quantity * 3.00;
                    console.log(total.toFixed(2));
                } break;
                case 'pineapple': {
                    total = quantity * 5.60;
                    console.log(total.toFixed(2));
                } break;
                case 'grapes': {
                    total = quantity * 4.20;
                    console.log(total.toFixed(2));
                } break;
                default: console.log('error');
            } break;
        } default: console.log('error');
    }


    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        if (fruitty === 'banana') {
            total = quantity * 2.50;
            console.log(total.toFixed(2));
        } else if (fruitty === 'apple') {
            total = quantity * 1.20;
            console.log(total.toFixed(2));
        } else if (fruitty === 'orange') {
            total = quantity * .85;
            console.log(total.toFixed(2));
        } else if (fruitty === 'grapefruit') {
            total = quantity * 1.45;
            console.log(total.toFixed(2));
        } else if (fruitty === 'kiwi') {
            total = quantity * 2.70;
            console.log(total.toFixed(2));
        } else if (fruitty === 'pineapple') {
            total = quantity * 5.50;
            console.log(total.toFixed(2));
        } else if (fruitty === 'grapes') {
            total = quantity * 3.85;
            console.log(total.toFixed(2));
        } else {
            console.log('error');
        }
    } else if (day === 'Saturday' || day === 'Sunday') {
        if (fruitty === 'banana') {
            total = quantity * 2.70;
            console.log(total.toFixed(2));
        } else if (fruitty === 'apple') {
            total = quantity * 1.25;
            console.log(total.toFixed(2));
        } else if (fruitty === 'orange') {
            total = quantity * .90;
            console.log(total.toFixed(2));
        } else if (fruitty === 'grapefruit') {
            total = quantity * 1.60;
            console.log(total.toFixed(2));
        } else if (fruitty === 'kiwi') {
            total = quantity * 3.00;
            console.log(total.toFixed(2));
        } else if (fruitty === 'pineapple') {
            total = quantity * 5.60;
            console.log(total.toFixed(2));
        } else if (fruitty === 'grapes') {
            total = quantity * 4.20;
            console.log(total.toFixed(2));
        } else {
            console.log('error');
        }
    } else {
        console.log('error');
    }
}

fruitStore(['apple', 'Tuesday', '2']);

/* Trade Commissions */

function tradeCommissions(input) {
    let town = input.shift();
    let salary = Number(input.shift());

    let commission;

    switch (town) {
        case 'Sofia': {
            if (salary >= 0 && salary <= 500) {
                commission = salary * .05;
                console.log(commission.toFixed(2));
            } else if (salary > 500 && salary <= 1000) {
                commission = salary * .07;
                console.log(commission.toFixed(2));
            } else if (salary > 1000 && salary <= 10000) {
                commission = salary * .08;
                console.log(commission.toFixed(2));
            } else if (salary > 10000) {
                commission = salary * .12;
                console.log(commission.toFixed(2));
            } else {
                console.log('error');
            }
        } break;
        case 'Varna': {
            if (salary >= 0 && salary <= 500) {
                commission = salary * .045;
                console.log(commission.toFixed(2));
            } else if (salary > 500 && salary <= 1000) {
                commission = salary * .075;
                console.log(commission.toFixed(2));
            } else if (salary > 1000 && salary <= 10000) {
                commission = salary * .1;
                console.log(commission.toFixed(2));
            } else if (salary > 10000) {
                commission = salary * .13;
                console.log(commission.toFixed(2));
            } else {
                console.log('error');
            }
        } break;
        case 'Plovdiv': {
            if (salary >= 0 && salary <= 500) {
                commission = salary * .055;
                console.log(commission.toFixed(2));
            } else if (salary > 500 && salary <= 1000) {
                commission = salary * .08;
                console.log(commission.toFixed(2));
            } else if (salary > 1000 && salary <= 10000) {
                commission = salary * .12;
                console.log(commission.toFixed(2));
            } else if (salary > 10000) {
                commission = salary * .145;
                console.log(commission.toFixed(2));
            } else {
                console.log('error');
            }
        } break;
        default: {
            console.log('error');
        } break;
    }
}

tradeCommissions(['Burgas', '100']);

/* Ski Trip */

function skiTrip(input) {
    let days = Number(input.shift());
    let typeOfRoom = input.shift();
    let valuation = input.shift();

    let actualStay = days - 1;

    let grade;
    let priceBeforeValuation;
    let discount;
    let priceAfterDiscount;
    let priceAfterValuation;


    if (days >= 0 && days <= 365) {
        if (typeOfRoom === 'room for one person') {
            if (days > 0 && days < 10) {
                priceBeforeValuation = actualStay * 18.00;
                if (valuation === 'positive') {
                    grade = priceBeforeValuation * .25;
                    priceAfterValuation = grade + priceBeforeValuation;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceBeforeValuation * .10;
                    priceAfterValuation = priceBeforeValuation - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation')
                }
            } else if (days >= 10 && days <= 15) {
                priceBeforeValuation = actualStay * 18.00;
                if (valuation === 'positive') {
                    grade = priceBeforeValuation * .25;
                    priceAfterValuation = grade + priceBeforeValuation;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceBeforeValuation * .10;
                    priceAfterValuation = priceBeforeValuation - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation')
                }
            } else if (days > 15) {
                priceBeforeValuation = actualStay * 18.00;
                if (valuation === 'positive') {
                    grade = priceBeforeValuation * .25;
                    priceAfterValuation = grade + priceBeforeValuation;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceBeforeValuation * .10;
                    priceAfterValuation = priceBeforeValuation - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation')
                }
            } else {
                console.log('Invalid Stay');
            }
        } else if (typeOfRoom === 'apartment') {
            if (days > 0 && days < 10) {
                priceBeforeValuation = actualStay * 25.00;
                discount = priceBeforeValuation * .30;
                priceAfterDiscount = priceBeforeValuation - discount;
                if (valuation === 'positive') {
                    grade = priceAfterDiscount * .25;
                    priceAfterValuation = grade + priceAfterDiscount;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceAfterDiscount * .10;
                    priceAfterValuation = priceAfterDiscount - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation');
                }
            } else if (days >= 10 && days <= 15) {
                priceBeforeValuation = actualStay * 25.00;
                discount = priceBeforeValuation * .35;
                priceAfterDiscount = priceBeforeValuation - discount;
                if (valuation === 'positive') {
                    grade = priceAfterDiscount * .25;
                    priceAfterValuation = grade + priceAfterDiscount;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceAfterDiscount * .10;
                    priceAfterValuation = priceAfterDiscount - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation');
                }
            } else if (days > 15) {
                priceBeforeValuation = actualStay * 25.00;
                discount = priceBeforeValuation * .50;
                priceAfterDiscount = priceBeforeValuation - discount;
                if (valuation === 'positive') {
                    grade = priceAfterDiscount * .25;
                    priceAfterValuation = grade + priceAfterDiscount;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceAfterDiscount * .10;
                    priceAfterValuation = priceAfterDiscount - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation');
                }
            } else {
                console.log('Invalid Stay');
            }
        } else if (typeOfRoom === 'president apartment') {
            if (days > 0 && days < 10) {
                priceBeforeValuation = actualStay * 35.00;
                discount = priceBeforeValuation * .10;
                priceAfterDiscount = priceBeforeValuation - discount;
                if (valuation === 'positive') {
                    grade = priceAfterDiscount * .25;
                    priceAfterValuation = grade + priceAfterDiscount;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceAfterDiscount * .10;
                    priceAfterValuation = priceAfterDiscount - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation');
                }
            } else if (days >= 10 && days <= 15) {
                priceBeforeValuation = actualStay * 35.00;
                discount = priceBeforeValuation * .15;
                priceAfterDiscount = priceBeforeValuation - discount;
                if (valuation === 'positive') {
                    grade = priceAfterDiscount * .25;
                    priceAfterValuation = grade + priceAfterDiscount;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceAfterDiscount * .10;
                    priceAfterValuation = priceAfterDiscount - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation');
                }
            } else if (days > 15) {
                priceBeforeValuation = actualStay * 35.00;
                discount = priceBeforeValuation * .20;
                priceAfterDiscount = priceBeforeValuation - discount;
                if (valuation === 'positive') {
                    grade = priceAfterDiscount * .25;
                    priceAfterValuation = grade + priceAfterDiscount;
                    console.log(priceAfterValuation.toFixed(2));
                } else if (valuation === 'negative') {
                    grade = priceAfterDiscount * .10;
                    priceAfterValuation = priceAfterDiscount - grade;
                    console.log(priceAfterValuation.toFixed(2));
                } else {
                    console.log('Invalid Valuation');
                }
            } else {
                console.log('Invalid Stay');
            }
        }
    } else {
        console.log('Invalid Days');
    }

    switch (typeOfRoom) {
        case 'room for one person': {
            if (day > 0 && day < 10) {
                
            } else if (day >= 10 && day <= 15) {

            } else if (day > 15) {

            } else {
                console.log('invalid day');
            }
        } break;
        case 'apartment': {

        } break;
        case 'president apartment': {

        } break;
        default: console.log('invalid type of room'); break;
    }
}

skiTrip(['30', 'president apartment', 'negative']);

/* 216 */ /* 3 - 6 - 9 = 9 - 3 - 6 = 369 */