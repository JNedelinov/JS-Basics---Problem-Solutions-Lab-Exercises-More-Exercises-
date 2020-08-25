/*  
function solve(input) {
    let name = input.shift();
    let number = Number(input.shift());

    console.log(name);
    console.log(number);
}

solve ( [ 'George', '4' ] )

 */

 /* 
 function getName(input) {
    let name = input.shift();
    
    console.log('Hello, ' + name + '!');
 }

 getName ( [ 'JJ' ] );
 
 */

/* 

function getName(input) {
   let name = input.shift();
   let greeting = 'Hello, ' + name;
   
   console.log(greeting);
}

getName ( [ 'JJ' ] ); 

*/

/* 
function getName(input) {
    let name = input.shift();

    console.log(`Hello, ${name}!`);
}

getName ( [ 'JJ' ] );
 */

/*  
 function getArea(input){
    let a = Number(input.shift());
    let area = a * a;

    console.log(area);
 }

 getArea( [ '5' ] );

 */

 /* 
 function solve(input) {
     let day = Number(input.shift());
     let operand = Number(input.shift());

     console.log(day % operand);
 }

 solve ( [ '24', '4' ] )
  */

  function solve(input) {
      let numberCeil = 24.5;
      let numberFloor = 24.5;
      let numberTrunc = 24.5;
      let rounded1 = Math.ceil(numberCeil);
      let rounded2 = Math.floor(numberFloor);
      let rounded3 = Math.trunc(numberTrunc);
      console.log(rounded1);
      console.log(rounded2);
      console.log(rounded3);
  }

  solve();


  function getAreaAndPerimeter(input){
    let r = Number(input.shift());
    let area = r * r * Math.PI;
    let perimeter = 2 * Math.PI * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

getAreaAndPerimeter ( [ '5' ] );