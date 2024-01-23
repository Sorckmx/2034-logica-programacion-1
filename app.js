/* //Variables
let secretNumber = 6;
let userNumber = prompt("Enter a number between 1 and 10 pls:");

console.log(userNumber);

//This code realices the comparison of the numbers
if (userNumber == secretNumber) {
    //The condition is met
    alert(`You got it right, the number is: ${secretNumber}`);
} else {
    //The condition is not met
    alert("Sorry, you didn't get the number right.")
}  */

javascript
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto + "el número que ingresaste fue" + intento);
}


