function Gethavesome() {
    let usersAnswer = prompt("Do you like Gelato ?")
    if (usersAnswer == "Yes") {
        document.write("Gelato is the best, right!?");
    } else if (usersAnswer == "No") {
        let userNewAnswer = prompt("Do you like icecream more?");
        if (userNewAnswer == "Yes") {
            document.write("That's okay! Icecream can make you happy too!");
        } else if (userNewAnswer == "No") {
            document.write("Seems like you like gelato more!");
        } else {
            document.write("That's not the answer I was looking for...");
        }
    } else {
        document.write("That's not the answer I was looking for...");
    }

}