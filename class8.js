

function yourName() {
    let name;
        name = prompt('What is your name?');
        console.log(name);
    return document.write(name);
}

let response = prompt("Which Counrty Faumos With Gelato?");
while (response !== 'Italy'){
    response = prompt("Wrong! Guess again.");
    if (response!=='Italy'){
       
    }
} alert ('Yes Thats right')


function Scoop(){

    let scoop = prompt("How many scoops would you like?");
    for(let i = 0; i<scoop;i++){
      document.write("<img class='star' src='scoop.jpeg'/>");
    }
}