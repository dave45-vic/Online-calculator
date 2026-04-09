const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('second');
const operatorSelectInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');



function calculate() {
  const firstNumber = parseFloat(firstNumberInput.value);
const secondNumber = parseFloat(secondNumberInput.value);
const operator = operatorSelectInput.value;

console.log (isNaN(firstNumber), isNaN(secondNumber));

  let result;
if (isNaN(firstNumber) ){
  resultParagraph.textContent = 'Please Enter Valid Number Bro';
  return;
}

if (isNaN(secondNumber)) {
  resultParagraph.textContent = 'Please Enter Valid Number Bro';
  return;
} 

switch(operator){
  case "+": 
   result = firstNumber + secondNumber;
   break;
   
   case "-":
     result = firstNumber - secondNumber;
     break;

     case "*":
       result = firstNumber * secondNumber;
       break;

       case "/":
         if (secondNumber === 0){
     resultParagraph.textContent = 'Division by Zero is not valid';
    return;
    }
     
         result = firstNumber / secondNumber;
         break;
         default:
         result = 'Invalid Operator';
}



 resultParagraph.textContent = '=' + result;
} 




calculateButton.addEventListener('click', calculate)


 

const cities = ["New York", "London", "Parris", "Tokyo"]
console.log(cities)