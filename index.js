// simple javascript

var phonePrice = 52000;
var lapTop = 100000; 

var totalPrice = phonePrice + lapTop;

// if 10% discount the price


var subTotal = totalPrice * 10/100;

totalPrice = totalPrice - subTotal;

console.log(totalPrice);

// Even ODD number finder

function number(num1) {

    if(num1 % 2 == 0){
        console.log(num1 + " " + "Even Number");
    }

    else{
        if(num1 % 2 !== 0){

            console.log(num1 + " " + "is ODD Number");

        }
    }

}

var practiseOne = number(40);

console.log(practiseOne);


// PH Assignment Number gor


var firstAssign = 53;
let secondAssign = 60;
const thirdAssign = 60;

let gor = (firstAssign + secondAssign + thirdAssign)/3;

let accurateNumber = parseInt(gor);

console.log(accurateNumber);
