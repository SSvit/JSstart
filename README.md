# JSstart

<!-- ЗМІННІ -->

<!-- Об'ява без значення -->

let myLieStyle;

<!-- Присвоєння значення -->
<!-- в даному випадку = це оператор присвоєння -->

myLieStyle = `freelance`;

<!-- Об'ява змінної і присвоєння значення -->

let myLieStyle = `freelance`;

<!-- Визов змінної -->

console.log(myLifeStyle);

<!-- Способи запису змінних, якщо їх багато -->
<!-- В рядок через кому -->

let myName = 'Фрілансер по життю', myAge = 36, myMessage = 'Живи, а працюй у вільний час!';

<!-- Через кому з нрового рядка -->

let myName = 'Фрілансер по життю',
myAge = 36,
myMessage = 'Живи, а працюй у вільний час!';

<!-- Окремо -->
<!-- РЕКОМЕНДУЄТЬСЯ СТВОРЮВАТИ ОКРЕМІ ЗМУННІ -->

let myName = 'Фрілансер по життю',
let myAge = 36,
let myMessage = 'Живи, а працюй у вільний час!';

<!-- Зміна значення змінної -->

let myAge = 36;
myAge = 18,
console.log(myAge);

<!-- Якщо ввімкнений строгий режим  "use strict", буз let записувати змінну не можна-->

let myAge = 36;
console.log(myAge);

<!-- Видимість змінної тільки в середині блоку інструкцій -->

function testBlock() {
let myAge = 36;
console.log(myAge);
}
testBlock();

<!-- Змінна не видна за межами блока -->

console.log(myAge);

<!-- Помилка, ми не можемо використовувати змінну перез об'явою -->

console.log(myAge);
let myAge = 18;

<!-- Те що й let, тільки const не можна зміники -->

const myAge = 36;
myAge = 36;

<!-- Імена констант з раніше відомими значеннями -->

const BLOCK_SITE = 25;
const COLOR_RED = "#F00";

<!-- Імя константи зі значення присвоєним у процесі виконання програми -->

const summSizes = 25 + 30;

<!-- Зміна значення в константі -->
<!-- Обєкт з даними -->

const userProfile = {
name: 'Фрілансер';
age: 36;
message: 'Живи, а працюй у вільний час!'
}
console.log(userProfile);

<!-- Далі я змінюю значення одного з полів обєкта -->

userProfile.age = 18;

<!-- Помилки немає, дані змінилися -->

console.log(userProfile);

<!-- Використання змінної var до її обяви і не важливщ чи це строгий режим "use strict", чи ні -->

age = 35;
console.log(age);
var age;

<!-- Область видимості var-->

if (true) {
let sizeLet = 50;
}

<!-- Змінну НЕ видно за межами блока -->

console.log(sizeLet);

if (true) {
var sizeLet = 50;
}

<!-- Змінну ВИДНО за межами блока -->

console.log(sizeLet);
