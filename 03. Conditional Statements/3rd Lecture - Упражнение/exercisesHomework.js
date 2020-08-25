/* Сумиране на секунди / Sum Up of Seconds*/

function sumSeconds(input) {
    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());

    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(['3', '3', '3']);

/* Bonus Points */

function bonusPoints(input) {
    let num = Number(input.shift());
    let bonus;

    if (num <= 100) {
        bonus = 5;
        if (num % 2 === 0) {
            bonus += 1;
            console.log(bonus);
            console.log(num + bonus);
        } else if (num % 10 === 5) {
            bonus += 2;
            console.log(bonus);
            console.log(num + bonus);
        } else {
            console.log(bonus);
            console.log(num + bonus);
        }
    } else if (num > 100 && num < 1000) {
        bonus = num * .20;
        if (num % 2 === 0) {
            bonus += 1;
            console.log(bonus);
            console.log(num + bonus);
        } else if (num % 10 === 5) {
            bonus += 2;
            console.log(bonus);
            console.log(num + bonus);
        } else {
            console.log(bonus);
            console.log(num + bonus);
        }
    } else if (num >= 1000) {
        bonus = num * .10;
        if (num % 2 === 0) {
            bonus += 1;
            console.log(bonus);
            console.log(num + bonus);
        } else if (num % 10 === 5) {
            bonus += 2;
            console.log(bonus);
            console.log(num + bonus);
        } else {
            console.log(bonus);
            console.log(num + bonus);
        }
    }
}

bonusPoints(['15875']);

/* Speed Info */

function speedInfo(input) {
    let speed = Number(input.shift());

    if (speed <= 10) {
        console.log('slow');
    } else if (speed > 10 && speed <= 50) {
        console.log('average');
    } else if (speed > 50 && speed <= 150) {
        console.log('fast');
    } else if (speed > 150 && speed <= 1000) {
        console.log('ultra fast');
    } else {
        console.log('extremely fast');
    }
}

speedInfo(['3500']);

/* Metric Converter */

function metricConverter(input) {
    let numb3r = Number(input.shift());
    let firstMetric = input.shift();
    let secondMetric = input.shift();


    if (firstMetric === 'mm') {
        if (secondMetric === 'cm') {
            numb3r /= 10;
            console.log(numb3r.toFixed(3));
        } else if (secondMetric === 'm') {
            numb3r /= 1000;
            console.log(numb3r.toFixed(3));
        } else {
            console.log(numb3r.toFixed(3));
        }
    } else if (firstMetric === 'cm') {
        if (secondMetric === 'mm') {
            numb3r *= 10;
            console.log(numb3r.toFixed(3));
        } else if (secondMetric === 'm') {
            numb3r /= 100;
            console.log(numb3r.toFixed(3));
        } else {
            console.log(numb3r.toFixed(3));
        }
    } else if (firstMetric === 'm') {
        if (secondMetric === 'mm') {
            numb3r *= 1000;
            console.log(numb3r.toFixed(3));
        } else if (secondMetric === 'cm') {
            numb3r *= 100;
            console.log(numb3r.toFixed(3));
        } else {
            console.log(numb3r.toFixed(3));
        }
    } else {
        console.log('invalid metrics');
    }
}

metricConverter(['150', 'm', 'cm']);

/* Time + 15 Minutes */

function timePlusMinutes(input) {
    let hour = Number(input.shift());
    let minutes = Number(input.shift());

    let newMinutes;

    if (hour >= 0 && hour <= 23) {
        if (minutes >= 0 && minutes <= 59) {
            if (minutes + 15 > 59) {
                if (hour + 1 > 23) {
                    hour = 0;
                    newMinutes = (minutes + 14) - 59;
                    if (newMinutes >= 0 && newMinutes < 10) {
                        console.log(`${hour}:0${newMinutes}`);
                    } else {
                        console.log(`${hour}:${newMinutes}`);
                    }
                } else {
                    hour += 1;
                    newMinutes = (minutes + 14) - 59;
                    if (newMinutes >= 0 && newMinutes < 10) {
                        console.log(`${hour}:0${newMinutes}`);
                    } else {
                        console.log(`${hour}:${newMinutes}`);
                    }
                }
            } else if (minutes + 15 >= 0 && minutes + 15 <= 59) {
                newMinutes = minutes + 15;
                console.log(`${hour}:${newMinutes}`);
            }
        }
    }
}

timePlusMinutes(['1', '30']);

/* Godzilla Against Kong */

function godzillaAgainstKong(input) {
    let budget;
    let numberOfStatists;
    let priceOfOutfit;
    let decor;
    let totalPriceOfOutfits;
    let discounted;
    let totalSum;
    let left;

    budget = Number(input.shift());
    if (budget >= 1.00 && budget <= 1000000.00) {
        numberOfStatists = Number(input.shift());
        if (numberOfStatists >= 1 && numberOfStatists <= 500) {
            priceOfOutfit = Number(input.shift());
            if (priceOfOutfit >= 1.00 && priceOfOutfit <= 1000.00) {
                decor = budget * .10;
                if (numberOfStatists > 150) {
                    discounted = ((numberOfStatists * priceOfOutfit) - ((numberOfStatists * priceOfOutfit) * .10));
                    totalSum = decor + discounted;
                    left = Math.abs(budget - totalSum);
                    if (totalSum <= budget) {
                        console.log('Action!');
                        console.log(`Wingard starts filming with ${(left.toFixed(2))} leva left.`);
                    } else {
                        console.log('Not enough money!');
                        console.log(`Wingard needs ${(left.toFixed(2))} leva more.`);
                    }
                } else {
                    totalPriceOfOutfits = numberOfStatists * priceOfOutfit;
                    totalSum = decor + totalPriceOfOutfits;
                    left = Math.abs(budget - totalSum);
                    if (totalSum <= budget) {
                        console.log('Action!');
                        console.log(`Wingard starts filming with ${(left.toFixed(2))} leva left.`);
                    } else {
                        console.log('Not enough money!');
                        console.log(`Wingard needs ${(left.toFixed(2))} leva more.`);
                    }
                }
            } else {
                console.log('Error');
            }
        } else {
            console.log('Error');
        }
    } else {
        console.log('Error');
    }
}

godzillaAgainstKong(['9587.88', '222', '55.68']);

/* World Swimming Record */

function worldSwimmingRecord(input) {
    let currentRecord;
    let distance;
    let timeForOneMeter;
    let resistance;

    let timeForRecord;
    let finalTime;

    let newResistance;

    currentRecord = Number(input.shift());
    if (currentRecord >= 0.00 && currentRecord <= 100000.00) {
        distance = Number(input.shift());
        if (distance >= 0.00 && distance <= 100000.00) {
            timeForOneMeter = Number(input.shift());
            if (timeForOneMeter >= 0.00 && timeForOneMeter <= 1000.00) {
                timeForRecord = distance * timeForOneMeter;
                resistance = Math.floor(distance / 15);
                newResistance = resistance * 12.5;
                finalTime = timeForRecord + newResistance;
                if (finalTime < currentRecord) {
                    console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
                } else if (finalTime >= currentRecord) {
                    console.log(`No, he failed! He was ${(finalTime - currentRecord).toFixed(2)} seconds slower.`);
                }
            }
        }
    }
}

worldSwimmingRecord(['55555.67', '3017', '5.03']);

/* Scholarships */

function scholarships(input) {
    let income;
    let averageScore;
    let minIncome;

    let scholarshipInBGN;

    let variable;

    income = Number(input.shift());
    if (income >= 0.00 && income <= 6000.00) {
        averageScore = Number(input.shift());
        if (averageScore >= 2.00 && averageScore <= 6.00) {
            minIncome = Number(input.shift());
            if (minIncome >= 0.00 && minIncome <= 1000.00) {
                if (income > minIncome) {
                    if (averageScore < 5.50){
                        console.log('You cannot get a scholarship!');
                    } else {
                        scholarshipInBGN = averageScore * 25;
                        /* console.log(scholarshipInBGN); */
                        console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipInBGN)} BGN`);
                    }
                } else if (income <= minIncome) {
                    if (averageScore >= 4.50){
                        scholarshipInBGN = minIncome * 0.35;
                        /* console.log(scholarshipInBGN); */
                        if (averageScore >= 5.50) {
                            variable = averageScore * 25;
                            /* console.log(variable); */
                            if (scholarshipInBGN >= variable){
                                console.log(`You get a Social scholarship ${Math.floor(scholarshipInBGN)} BGN`);
                            } else {
                                console.log(`You get a scholarship for excellent results ${Math.floor(variable)} BGN`);
                            }
                        } else if (averageScore >= 4.50 && averageScore < 5.50){
                            console.log(`You get a Social scholarship ${Math.floor(scholarshipInBGN)} BGN`);
                        }
                    } else {
                        console.log('You cannot get a scholarship!');
                    }
                }
            }
        }
    }
}

/* scholarships([ '480.00', '5.65', '450.00' ]); */
scholarships([ '300.00', '3.65', '300.00' ]);