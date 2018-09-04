
// target class 'numbers', 'operators' etc
var numbers = document.getElementsByClassName('numbers');
var operators = document.getElementsByClassName('operators');
var dot = document.getElementById('dot');
var display = document.getElementById('display');
var back = document.getElementById('back');
var clearButton = document.getElementById('clear');
var equal = document.getElementById('equal');
var negative = document.getElementById('negative');
var pourcent = document.getElementById('pourcent');
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
// but if 'element' is 0 and display too -> it does not add to 'display'
function getValue(element) {
  if (element.innerHTML === "0" && display.innerHTML === "0") {
    display.innerHTML = "0";
  } else {
    result += element.innerHTML;
    display.innerHTML = result;
  }
} // end of function getValue(element)


// calculate the value of 'result' and return the result in 'display'
equal.onclick = function() {
  result = eval(result);
  display.innerHTML = result;
  result = "";
}


// remove the last element added in 'result' when we click on 'back' ( < )
back.onclick = function() {
  var lastCaract = result.length - 1;
  result = result.substring(0, lastCaract);
  display.innerHTML = result;
  if (result.length === 0) {
    result = "0";
    display.innerHTML = result;
    result = "";
  }
}


// reset at 0 'display'
clearButton.onclick = function() {
  result = "0";
  display.innerHTML = result;
  result = "";
}

// 'negative' : 5 -> -5 / -5 -> 5
var negativeClick = 0;

negative.onclick = function() {

  negativeClick++;

  if ((negativeClick % 2) !== 0) {
    result = '-' + result;
    display.innerHTML = result;
  } else if ((negativeClick % 2) === 0) {
    result = result.substring(1, result.length);
    display.innerHTML = result;
  }

} // end of negative.onclick function


// 'pourcent' : 25 * 10 / 100 -> 25 * 10 %   (= 2.5)
pourcent.onclick = function() {
  result = eval(result += '/100');
  display.innerHTML = result;
  result = "";
}





























//
