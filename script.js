const display = document.querySelector('#display');
const numberBtn = document.getElementsByClassName('.number');
const nine = document.querySelector('#key9');
const eight = document.querySelector('#key8');
const seven = document.querySelector('#key7');
const six = document.querySelector('#key6');
const five = document.querySelector('#key5');
const four = document.querySelector('#key4');
const three = document.querySelector('#key3');
const two = document.querySelector('#key2');
const one = document.querySelector('#key1');
const zero = document.querySelector('#key0');
//const operatorsBtn = document.getElementsByClassName('.operations');
let displayValue = '0';
display.innerHTML = 0 // set initial value of 0
let savedValue = '';

//update the display text to the current displayValue
function displayUpdate(){
    display.innerHTML = displayValue
}
//click on operator

let operatorBtn = document.querySelectorAll('.operator')
        operatorBtn.forEach((button) => {
            button.addEventListener('click', function() {
                savedValue = displayValue;
                displayValue = 0;
                displayUpdate();
            })
            
               
})
// created functions to update display for all number buttons, prob could do forEach?
//clicking on no.9
nine.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 9;
    }
    else{
    displayValue += '9';
    }
    return displayUpdate(); // return to update the display text
})
//click on no.8
eight.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 8;
    }
    else{    
    displayValue += '8';
    }
    return displayUpdate();
})
//click on no.7
seven.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 7;
    }
    else{
    displayValue += '7';
    }
    return displayUpdate();
})
//click on no.6
six.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 6;
    }
    else{
        displayValue += '6';
    }
    return displayUpdate();
})
//click on no.5
five.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 5;
    }
    else{
        displayValue += '5';
    }
    return displayUpdate();
})
//click on no.4
four.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 4;
    }
    else{
        displayValue += '4';
    }
    return displayUpdate();
})
//click on no.3
three.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 3;
    }
    else{
        displayValue += '3';
    }
    return displayUpdate();
})
//click on no.2
two.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 2;
    }
    else{
        displayValue += '2';
    }
    return displayUpdate();
})
//click on no.1
one.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 1;
    }
    else{
        displayValue += '1';
    }
    return displayUpdate();
})
//click on no.0
zero.addEventListener('click', function() {
    if(displayValue == 0){
        displayValue = 0;
    }
    else{
        displayValue += '0';
    }
        return displayUpdate();
})


//operation to add
function add(x, y){
    return x + y;
}

//operation to subtract
function subtract(x, y) {
    return x - y;
}

//operation to multiple
function multiply(x, y) {
    return x * y;
}

//operation to divide 
function divide(x, y) {
    return x / y;
}

//run operation
function operate(operator, x, y){
    if(operator == add){
        return add(x, y)
    }
    if(operator == subtract){
        return subtract(x, y)
    }
    if(operator == multiply){
        return multiply(x, y) 
    }
    if(operator == divide){
        return divide(x, y)
    }
}