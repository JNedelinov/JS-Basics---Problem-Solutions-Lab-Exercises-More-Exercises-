/* USD to BGN */

function valueConverter(input){
    let usd = Number(input.shift());
    let converted = (usd * 1.79549).toFixed(2);

    console.log(converted);
}

valueConverter([ '100' ]);

/* Radians to Degrees */

function radiansToDegrees(input){
    let radians = Number(input.shift());
    let degrees = ((radians * 180)/Math.PI).toFixed(0);

    console.log(degrees);
}

radiansToDegrees([ '3.1416' ]);

/* 2D Rectangle Area */

function twoDRectangleArea(input){
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let length2D = Math.abs(x1 - x2);
    let height2D = Math.abs(y1 - y2);
    let area2D = (length2D * height2D).toFixed(2);
    let perimeter2D = (2*(length2D + height2D)).toFixed(2);

    console.log(area2D);
    console.log(perimeter2D);
}

twoDRectangleArea([ '60', '20', '10', '50' ])

/* Tailoring Workshop */

function tailoringWorkshop(input){
    let numberOfTables = Number(input.shift());
    let lengthOfTables = Number(input.shift());
    let widthOfTables = Number(input.shift());
    let areaOfTableCovers = numberOfTables * (lengthOfTables + 0.60) * (widthOfTables + 0.60);
    let areaOfQuads = numberOfTables * (lengthOfTables / 2) * (lengthOfTables / 2);

    let priceInUSD = (areaOfTableCovers * 7) + (areaOfQuads * 9);
    let priceInBGN = priceInUSD * 1.85; 

    console.log(`${(priceInUSD).toFixed(2)} USD`);
    console.log(`${(priceInBGN).toFixed(2)} BGN`);
}

/*     console.log(areaOfTableCovers);
    console.log(areaOfQuads); */

tailoringWorkshop([ '10', '1.20', '0.65' ])

/* Dance Hall */

function danceHall(input){
    let lenghtOfHall = Number(input.shift());
    let widthOfHall = Number(input.shift());
    let sideOfWardrobe = Number(input.shift());

    let sizeOfHallCM2 = ((lenghtOfHall * 100) * (widthOfHall * 100));
    let sizeOfWardrobe = ((sideOfWardrobe * 100) * (sideOfWardrobe * 100));
    let sizeOfBench = sizeOfHallCM2 / 10;
    let freeSpace = sizeOfHallCM2 - sizeOfWardrobe - sizeOfBench;
    
    let numberOfDancers = freeSpace / (40 + 7000);

    console.log(Math.floor(numberOfDancers));
}

danceHall([ '70', '20', '4' ]);

/* Charity Campaign */

function charityCampaign(input){
    let daysOfCampaign = Number(input.shift());
    let numberOfChefs = Number(input.shift());
    let numberOfCakes = Number(input.shift());
    let numberOfWaffles = Number(input.shift());
    let numberOfPancakes = Number(input.shift());

    let sumFromCakes = numberOfCakes * 45;
    let sumFromWaffles = numberOfWaffles * 5.80;
    let sumFromPancakes = numberOfPancakes * 3.20;

    let sumFromOneDay = (sumFromCakes + sumFromWaffles + sumFromPancakes) * numberOfChefs;
    let sumFromWholeCampaign = sumFromOneDay * daysOfCampaign;

    let sumAfterExpenses = sumFromWholeCampaign - ((sumFromWholeCampaign * 1) / 8);

    console.log(sumAfterExpenses.toFixed(2));
}

charityCampaign([ '20', '8', '14', '30', '16' ])

/* Liquor Store */

function liquorStore(input){
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakiaLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());

    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice - (0.4 * rakiaPrice);
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);

    let totalForRakia = rakiaLiters * rakiaPrice;
    let totalForWine = wineLiters * winePrice;
    let totalForBeer = beerLiters * beerPrice;
    let totalForWhiskey = whiskeyLiters * whiskeyPrice;

    let totalMoneyNeeded = totalForRakia + totalForWine + totalForBeer + totalForWhiskey;

    console.log(totalMoneyNeeded.toFixed(2));
}

liquorStore([ '50', '10', '3.5', '6.5', '1' ])