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
    console.log(message);     <!-- отримаємо Привіт, фрілансер! -->
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