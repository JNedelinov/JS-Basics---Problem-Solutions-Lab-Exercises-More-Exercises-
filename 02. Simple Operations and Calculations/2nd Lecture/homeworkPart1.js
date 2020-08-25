/* Greeting by Name */

function greeting(input){
    let name = input.shift();

    console.log(`Hello, ${name}!`)
}

greeting ( [ 'JJ' ] );

/* Concatenate Data */

function concatenate(input){
    let firstName = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let town = input.shift();

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concatenate([ 'George', 'Richardson', '23', 'New York' ]);

/* Square Area */

function squareArea(input){
    let a = Number(input.shift());
    let sArea = a * a;

    console.log(sArea);
}

squareArea([ '5' ]);

/* From inches to cantimeters */

function conversion(input){
    let variable = Number(input.shift());
    let convert = variable * 2.54;

    console.log(convert.toFixed(2));
}

conversion([ '5' ]);

/* Project Creation */

function projectCreator(input){
    let archName = input.shift();
    let archProjects = Number(input.shift());
    let neededHours = archProjects * 3;

    console.log(`The architect ${archName} will need ${neededHours} hours to complete ${archProjects} project/s.`);
}

projectCreator([ 'Sanya', '9' ]);

/* Circle Area and Perimeter */

function circleAreaAndPerimeter(input){
    let r = Number(input.shift());
    let pi = Math.PI;
    let cArea = pi * r * r;
    let cPerimeter = 2 * pi * r;

    console.log (cArea.toFixed(2));
    console.log(cPerimeter.toFixed(2));
}

circleAreaAndPerimeter([ '3' ]);

/* Pet Store */

function petShop(input){
    let numberDogs = Number(input.shift());
    let numberOtherAnimals = Number(input.shift());
    
    console.log(((2.50 * numberDogs) + (numberOtherAnimals * 4)).toFixed(2) + ' lv.');
}

petShop([ '13', '9' ]);

function petShop2(input){
    let numberDogs2 = Number(input.shift());
    let numberOtherAnimals2 = Number(input.shift());
    let sum = (numberDogs2 * 2.50) + (numberOtherAnimals2 * 4);

    console.log(sum.toFixed(2) + ' lv.');
}

petShop2([ '13', '9' ]);

/* Yard Gardening */

function yardGardening(input){
    let squareMeters = Number(input.shift());
    let finalPriceWithDDS = squareMeters * 7.61;
    let discountPrice = (finalPriceWithDDS * .18).toFixed(2);
    let finalPrice = (finalPriceWithDDS - discountPrice).toFixed(2);

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}

yardGardening([ '540' ]);

/* Aquarium */

function aquarium(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percentage = (Number(input.shift()) * 0.01);

    /* 1L of water = 1 cubic decimeter */

    let V = length * width * height;
    let totalLiters = V * 0.001;
    let realLiters = totalLiters * (1 - percentage);

    console.log(realLiters.toFixed(3));
}

aquarium([ '85', '75', '47', '17' ]);