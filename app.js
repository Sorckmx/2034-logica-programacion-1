//Fisrt practice of the course
//Variables
let maximumNumber = 100;
let secretNumber = Math.floor(Math.random()*maximumNumber)+1;
let userNumber = 0;
let tries = 1;
let timesWord = "time";
let maximumTries = 5;

console.log(secretNumber);

while (userNumber != secretNumber) {
    userNumber = parseInt(prompt(`Enter a number between 1 and ${maximumNumber} pls:`));
    console.log(userNumber);
    //This code realices the comparison of the numbers
    if (userNumber == secretNumber) {
        //The condition is met
        alert(`You got it right, the number is: ${userNumber}. You did it in ${tries} ${tries == 1 ? 'try' : 'tries' }`);
    } else {
        if (userNumber > secretNumber) {
            alert("The secret number is minor");
        } else {
            alert("The secret number is major")
        }
        tries++;
        timesWord = "times";
        if (tries > maximumTries) {
            alert( `You reach the maximun of ${maximumTries} tries.`);
            break;
        }
    }
} 



//Código para: Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
/* let weekDay = prompt ("Enter the day of the week:")
 weekDay = weekDay.toLowerCase();

if (weekDay === "saturday" || weekDay === "sunday") { alert("Good WeekEnd!")
} else if (weekDay === "monday" || weekDay === "tuesday" || weekDay === "wednesday" || weekDay === "thursday" || weekDay === "friday") { alert("Good week!")
} else {alert("Enter a correct day of the week.")
} */



//Código para: Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
/* let userNumber = prompt("Enter a number:");

if (userNumber >= 0) {alert("Your number is positive")
} else { alert("Your number is negative.")
}; */



//Código para: Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
/* let score = prompt("Enter your score:");

if (score >= 100) { alert("Congrats, you won.")
} else { alert("Try again pls.")
}; */


//Código para: Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
/* let userBalance = 900;

alert(`Good day dear client!, your balance is ${userBalance}` ) */



//Código para: Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
/* let userName = prompt("Enter your name pls:");

alert("Welcome to the website " + userName + "!!!"); */



//Código: Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
/* let number = 1;
while (number <= 10) {
    console.log(`The numer is: ${number}`);
    number = number + 1;
} */



//Código: Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
/* let number = 10;
while (number >= 0) {
    console.log(`The number is: ${number}`);
    number = number - 1;
} */



//Código: Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
/* let userNumber;

do {
    userNumber = prompt("Enter a number diferent than 0 please:");
    userNumber = parseInt(userNumber); // Convertir la entrada a un número entero

    if (isNaN(userNumber)) {
        alert("Please, enter a valid number.");
    } else if (userNumber === 0) {
        alert("The number can't be 0, try another number.");
    }
} while (isNaN(userNumber) || userNumber === 0);

let number = 0;

while (number != userNumber) {
    if (userNumber < 0) {
        console.log(`The count of the number is: ${number}`);
        number = number - 1;    
    } else if (userNumber > 0) {
        console.log(`The count of the number is: ${number}`);
            number = number + 1;
        }
}
    console.log(`The count of the number is: ${number}`);
 */




