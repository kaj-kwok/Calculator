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
let savedValue = ''; //store 1st value
let currentTotal = '';
var Operator = {}; // store selected operator

//update the display text to the current displayValue
function displayUpdate(){
    display.innerHTML = displayValue
}

//click on operator
let operatorBtn = document.querySelectorAll('.operator')
        operatorBtn.forEach((button) => {
            button.addEventListener('click', function(e) {
                if (savedValue == ''){  /// condition to check if savedValue exists, if not, first loop, save value
                        savedValue = displayValue;
                }
                else{
                    operate(Operator, savedValue, displayValue); // condition if, savedValue exist, run function to evaluate display the total
                    savedValue = currentTotal;
                }
                Operator = e.target.id; //capture operator
                displayValue = 0; // reset value
            })
        })


// equal button function
 equalsBtn = document.querySelector('#equals');
 equalsBtn.addEventListener('click', function(){
     if(savedValue == ''){
         display.innerHTML = 'oops'
     }
    operate(Operator, savedValue, displayValue);
    })

//CE button to clear
ceBtn = document.querySelector('#clearSpace');
ceBtn.addEventListener('click', () => {
    savedValue = '';
    currentTotal = '';
    displayValue = '0'
    display.innerHTML = 0
})

//C button to backspace
cBtn = document.querySelector('#backSpace');
cBtn.addEventListener('click', () => {
    modifiedNum = display.innerHTML
    console.log(modifiedNum)
    if(modifiedNum.length === 1 || modifiedNum == ''){
        display.innerHTML = 0
    }
    if(modifiedNum === 0){
        display.innerHTML = 0
    }
    if (modifiedNum.length > 1){
        modifiedNum = modifiedNum.slice(0, -1);
        displayValue = modifiedNum
        displayUpdate();
    }
    
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


//run operation
function operate(Operator, savedValue, displayValue){
    if(Operator == 'add'){
        currentTotal = savedValue + displayValue;
        display.innerHTML = currentTotal;
    }
    if(Operator == 'subtract'){
        currentTotal = savedValue - displayValue;
        display.innerHTML = currentTotal;
    }
    if(Operator == 'multiply'){
        currentTotal = savedValue * displayValue;
        display.innerHTML = currentTotal;
    }
    if(Operator == 'divide'){
        if(displayValue == 0) {
            display.innerHTML = 'To the Moon'
        }
        else{
        currentTotal = savedValue / displayValue;
        display.innerHTML = currentTotal;
        }
    }
}