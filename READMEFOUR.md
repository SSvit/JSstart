<!-- Синтаксис -->
<!-- ELSE, ELSE IF -->

let message = 'Привіт, фрілансер!'

if (2 > 1) {

<!-- Код виконується тільки якщо вираз в дужках поверне true -->

console.log(message);
}

<!-- Якщо присвоїти перемінну -->

let message = 'Привіт, фрілансер!'

let first = 5;
let second = 5;

if (first === second) {

<!-- Код виконується тільки якщо вираз в дужках поверне true -->

console.log(message);
}

<!-- Більш складна умова -->

if (2 + 1 === 3 && "1" || 10 > 5 && 10 ===1){

<!-- Код виконується тільки якщо вираз в дужках поверне true -->

console.log(message);
}

<!-- Більш короткий запис -->

if (2 > 1) console.log(message);

<!-- ELSE, ELSE IF -->

let message = 'Привіт, фрілансер!'
let number = 5;

if (number > 1) {
console.log(message); <!-- отримаємо Привіт, фрілансер! -->
} else {
console.log('Умова не виконана :(');
}

<!-- ще варіант -->

let message = 'Привіт, фрілансер!'
let number = 5;

if (number > 10) {
console.log(message);  
} else {
console.log('Умова не виконана :('); <!-- отримаємо Умова не виконана :( -->
}

<!-- Якщо умова повертає false, то застосовуємо else if-->

let message = 'Привіт, фрілансер!'
let number = 5;

if (number > 50) {
console.log('5 більше 50');  
} else if (number > 30) {
console.log('5 більше 30');
} else if (number > 10) {
console.log('5 більше 10');
} else if (number > 1) {
console.log('5 більше 1');
} else {
console.log('Умова не виконана :(');
}

<!-- Умовний оператор "?" -->

let message = "Привіт!";
let messageEnd;

if (5 > 1) {
messageEnd = ", Вася!');  
} else {
messageEnd = ", Оля!');
}

message += messageEnd;
console.log(message);

<!-- Заміняю вищу зазначений код -->

let messageEnd = 5 > 10 ? ", Вася!" : ", Оля!";

message += messageEnd;
console.log(message);

<!-- "?" - є торнарним, єдиний оператор у якого цілих три орепанда -->
<!-- Більш складний приклад -->

messageEnd = 5 > 10 ? ", Вася!" :
5 > 30 ? ", Оля!" :
5 > 10 ? ", Міша!" :
5 > 15 ? ", Інокентій!" :

    message += messageEnd;

console.log(message);

<!-- Класичний приклад -->

if (5 > 50) {
messageEnd = ", Вася!";
} elso if (5 > 30) {
messageEnd = ", Оля!";
} elso if (5 > 1) {
messageEnd = ", Міша!";
} elso {
messageEnd = ", Інокентій!";
}

if (5 > 10) {
console.log("Привіт, Вася!")
} elso {
console.log("Привіт, Оля!")
}

<!-- Якщо потрібно повернути якесь значення -->

let message = 5 > 10 ? "Привіт, Вася!" : "Привіт, Оля!";
console.log(message);
