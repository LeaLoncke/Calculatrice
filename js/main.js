
// target class 'numbers', 'operators' etc
var numbers = document.getElementsByClassName('numbers');
var operators = document.getElementsByClassName('operators');
var dot = document.getElementById('dot');
var display = document.getElementById('display');
var back = document.getElementById('back');
var clearButton = document.getElementById('clear');
var equal = document.getElementById('equal');
var result = "";


// assign an 'onclick' function to all numbers
for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function() {
    getValue(this);
  };
}

// assign an 'onclick' function to all operators
for (var i = 0; i < operators.length; i++) {
  operators[i].onclick = function() {
    getValue(this);
  };
}

// assign an 'onclick' function to dot
dot.onclick = function() {
  getValue(this);
};

// store the value of the item that we click in a variable
function getValue(element) {
  result += element.innerHTML;
  display.innerHTML = result;
}


// calculate the value of 'result' and return the result in 'display'
equal.onclick = function() {
  result = eval(result);
  display.innerHTML = result;
}


// remove the last element added in 'result' when we click on 'back' ( < )
back.onclick = function() {
  var lastCaract = result.length - 1;
  result = result.substring(0, lastCaract);
  if (result.length === 0) {
    result = "0";
  }
  display.innerHTML = result;
}


// reset at 0 'display'
clearButton.onclick = function() {
  display.innerHTML = "0";
  result = "";
}


















//BOUH
