

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