//Fisrt practice of the course
//Variables
let secretNumber = 6;
let userNumber = prompt("Enter a number between 1 and 10 pls:");
console.log(userNumber);
//This code realices the comparison of the numbers
if (userNumber == secretNumber) {
    //The condition is met
    alert(`You got it right, the number is: ${secretNumber}`);
} else {
    if (userNumber > secretNumber) {
        alert("The secret number is minor");
    } else {
        alert("The secret number is major")
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