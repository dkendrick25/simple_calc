/*
Logic:

* when a number is clicked, add a digit to the display.
* when an operator is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. store the result (but don't display it)
  4. clear the display for the user to input the next number
* when "=" is clicked
  1. parse the displayed number (new number)
  2. if there is an existing operator and existing number, evaluate the operator upon the existing number and the new number
  3. update the display to show the result
* when "C" is clicked
  1. unset the operator
  2. unset the current number
  3. clear the display

*/

//when number is clicked
var currentNumber;
var operator;
$(function () {
 $('.number').click(function() {
   var number = $(this).text();
   var currentDisplay = $('#display').val();
   var newDisplay = currentDisplay + number
  $('#display').val(newDisplay);
 })
 //when operator is click parse new number
 $('.operator').click(function() {
   var newNumber = Number($('#display').val());
   var result;
   if (operator && currentNumber) {
     //evalute what the operator is
     if (operator === "+" ) {
       result = currentNumber + newNumber;
     } else if (operator === "-") {
       result = currentNumber - newNumber;
     } else if (operator === "*") {
       result = currentNumber * newNumber;
     } else if (operator === "/") {
       result = currentNumber / newNumber;
     }
      currentNumber = result;
     } else {
      currentNumber = newNumber;
   }
   operator = $(this).text();
  // currentNumber = Number($('#display').val());
   $('#display').val('');
 })
 //when = is clicked
 $('.evaluate').click(function() {
   var newNumber = Number($('#display').val());
   var result;
   if (operator && currentNumber) {
     //evalute what the operator is
     if (operator === "+" ) {
       result = currentNumber + newNumber;
     } else if (operator === "-") {
       result = currentNumber - newNumber;
     } else if (operator === "*") {
       result = currentNumber * newNumber;
     } else if (operator === "/") {
       result = currentNumber / newNumber;
     }
     currentNumber = result;
     operator = null;
     $('#display').val(result);
   }
 });
 //when C unset the num and operator
 $('.clear').click(function () {
   $('#display').val('');
   operator = null;
   currentNumber = null;
 });
});
