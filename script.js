const display = document.querySelector('#currentEq');
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
const decBtn = document.querySelector('#decimal');
const currentEq = document.querySelector('#currentEq');
const pastEq = document.querySelector('#pastEq');

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

//update the history display
function historyUpdateEq(){
    pastEq.innerHTML = `${savedValue} ${convertOp(Operator)} ${displayValue} =`;
}

//update the history display
function historyUpdate(){
    pastEq.innerHTML = `${savedValue} ${convertOp(Operator)}`;
}

//function to convert operator to sign
function convertOp(Operator) {
    if (Operator == 'multiply')
    return 'x';
    if (Operator == 'divide')
    return '/';
    if (Operator == 'add')
    return '+';
    if (Operator == 'subtract')
    return '-';
    
}

//click on operator

window.addEventListener('keydown', function(e){
    if(e.key == '*'){
        document.getElementById("multiply").click()
    }
    if(e.key == '/'){
        document.getElementById("divide").click()
    }
    if(e.key == '-'){
        document.getElementById("subtract").click()
    }
    if(e.key == '+'){
        document.getElementById("add").click()
    }
})


let operatorBtn = document.querySelectorAll('.operator')
        operatorBtn.forEach((button) => {
            button.addEventListener('click', function(e) {
                runOperation(e)
            })
                })
           function runOperation(e) {
                if (savedValue == ''){  /// condition to check if savedValue exists, if not, first loop, save value
                        savedValue = parseFloat(display.innerHTML);
                        // historyUpdate()
                }
                else{              
                    operate(Operator, savedValue, displayValue); // condition if, savedValue exist, run function to evaluate display the total
                    savedValue = currentTotal;
                    
                }
                Operator = e.target.id; //capture operator   
                historyUpdate()
                displayValue = 0; // reset value

            }



// equal button function
 equalsBtn = document.querySelector('#equals');
 equalsBtn.addEventListener('click', function(){
    updateEq()
 })

function updateEq() {
    historyUpdateEq();
     if(savedValue == ''){
         display.innerHTML = displayValue
     }
     else{
    operate(Operator, savedValue, displayValue);
     }
    
}

//CE button to clear
ceBtn = document.querySelector('#clearSpace');
ceBtn.addEventListener('click', () => {
    savedValue = '';
    currentTotal = '';
    displayValue = '0'
    display.innerHTML = 0;
    pastEq.innerHTML = '';

})

//C button to backspace
cBtn = document.querySelector('#backSpace');
cBtn.addEventListener('click', () => {
    modifiedNum = display.innerHTML
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


window.addEventListener('keydown', function(e){
    if(e.key == '9') {
        updateKey9()
    }
    if(e.key == '8') {
        updateKey8()
    }
    if(e.key == '7'){
        updateKey7()
    }
    if(e.key == '6'){
        updateKey6()
    }
    if(e.key == '5') {
        updateKey5()
    }
    if(e.key == '4'){
        updateKey4()
    }
    if(e.key == '3'){
        updateKey3()
    }
    if(e.key == '2') {
        updateKey2()
    }
    if(e.key == '1'){
        updateKey1()
    }
    if(e.key == '0'){
        updateKey0()
    }
    if(e.key == '.'){
        updateKeyDec()
    }
    if(e.key == '='|| e.key =='Enter'){
        document.getElementById("equals").click()
    }
})


// created functions to update display for all number buttons, prob could do forEach?
//clicking on no.9
nine.addEventListener('click', function(){
    updateKey9()
})

function updateKey9() {
    if(displayValue == '0'){
        displayValue = 9;
    }

    else{
    displayValue += '9';
    }
    return displayUpdate(); // return to update the display text
}
//click on no.8
eight.addEventListener('click', function() {
    updateKey8()
})

function updateKey8(){
    if(displayValue == '0'){
        displayValue = 8;
    }
    else{    
    displayValue += '8';
    }
    return displayUpdate();
}
//click on no.7
seven.addEventListener('click', function() {
    updateKey7()
})
    
function updateKey7() {
    if(displayValue == '0'){
        displayValue = 7;
    }
    else{
    displayValue += '7';
    }
    return displayUpdate();
    }
//click on no.6
six.addEventListener('click', function() {
    updateKey6()
})
 
function updateKey6() {
    if(displayValue == '0'){
        displayValue = 6;
    }
    else{
        displayValue += '6';
    }
    return displayUpdate();
}
//click on no.5
five.addEventListener('click', function() {
    updateKey5()
})

function updateKey5() {
    if(displayValue == '0'){
        displayValue = 5;
    }
    else{
        displayValue += '5';
    }
    return displayUpdate();
}
//click on no.4
four.addEventListener('click', function() {
    updateKey4()
})

function updateKey4() {
    if(displayValue == '0'){
        displayValue = 4;
    }
    else{
        displayValue += '4';
    }
    return displayUpdate();
}

//click on no.3
three.addEventListener('click', function() {
    updateKey3()
})

function updateKey3() {
    if(displayValue == '0'){
        displayValue = 3;
    }
    else{
        displayValue += '3';
    }
    return displayUpdate();
}

//click on no.2
two.addEventListener('click', function() {
    updateKey2()
})

function updateKey2() {
    if(displayValue == '0'){
        displayValue = 2;
    }
    else{
        displayValue += '2';
    }
    return displayUpdate();
}

//click on no.1
one.addEventListener('click', function() {
    updateKey1()
})

function updateKey1() {
    if(displayValue == '0'){
        displayValue = 1;
    }
    else{
        displayValue += '1';
    }
    return displayUpdate();
}

//click on no.0
zero.addEventListener('click', function() {
    updateKey0()
})

function updateKey0() {
    if(displayValue === 0){
        displayValue = 0;
    }
    if(displayValue == '.'){
        displayValue += '0'
    }
    else{
        displayValue += '0';
    }
        return displayUpdate();
}

//floating number button
decBtn.addEventListener('click', () => {
    updateKeyDec()
})

function updateKeyDec() {    
    if(displayValue % 1 != 0) {

        return
    }
    else {
    displayValue += '.';
    return displayUpdate();
    }
}

//run operation
function operate(Operator, savedValue, displayValue){
    displayValue = parseFloat(display.innerHTML)
    if(Operator == 'add'){
        currentTotal = savedValue + displayValue;
    }
    if(Operator == 'subtract'){
        currentTotal = savedValue - displayValue;
       
    }
    if(Operator == 'multiply'){
        currentTotal = savedValue * displayValue;
        
    }
    if(Operator == 'divide'){
        if(displayValue == 0) {
            display.innerHTML = 'To the Moon'
        }
        else{
            currentTotal = savedValue / displayValue;
    
        }
    }display.innerHTML = currentTotal;
}