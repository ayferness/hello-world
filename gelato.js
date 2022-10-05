

  let username = prompt('What is your name?');
alert('Hello, ' + username);




let time = prompt('What hour is it? (0-23)');


if(time <= 11){
     alert('Good Morning!');
} 
else if (time <= 18){
   alert('Good Afternoon!');
}  
else if(time < 24){
    alert("Good Evening!");
} 
else {
    alert("That hour does not exist!");
}


 function addTwoNumbers(number1, number2){
  console.log(number1 + number2);
  document.write(number1+number2)
  return number1 + number2;
}

addTwoNumbers("Welcome to our ", "Website");

function getname()
