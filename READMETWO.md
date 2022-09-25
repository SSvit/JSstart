<!-- ТИПИ ДАНИХ -->
<!-- JavaScript є динамічно типозиціонованим.
Тобто тип даних змінної змінюється динамічно
в момент присвоєння чи зміни значення.
А не в момент об'яви -->

let userName; <!-- Обявляємо змінну -->
console.log(typeof userName);

userName = "Фрілансер по життю"<!-- Рядок (String) -->
console.log(typeof userName);

userName = 58; <!-- Число (Namber) -->
console.log(typeof userName);

<!-- ВИДИ ТИПІВ ДАНИХ -->

Underfined
Null
Boolean
Namber
BigInt
String
Symbol
Object/Function

<!-- Underfined -->

let userName; <!-- Обявляємо змінну -->

<!-- отримуємо тип даних -->

console.log(typeof userName);

<!-- отримуємо значення даних -->

console.log(userName);

<!-- Приклад використання -->

if (<!-- typeof -->userName === undefined) {
console.log('Змінна НЕ оприділена');
} else {
console.log('Змінна оприділена');
}

<!-- Null -->
<!-- Null, так як і Underfined, містятьтільки одне значення null -->

<!-- Приклад -->

let userName = null;
console.log(userName);

<!-- Якщо звернутися до обєкта якого немає, то отримаємо null -->
<!-- Якщо звернутися до обєкта через typeof, то отримаємо object. Це офіційно признана помилка -->

<!-- Boolean -->
<!-- Boolean - це Бульовий чи логічний тип. Може приймати тільки два значеня: true (істино) і false (хибно) -->
<!-- Приклад -->

let willYouMarryMe = false;
if (willYouMarryMe) {
console.log(':)');
} else {
console.log(':(');
}

<!-- Також можна використовута з операторами порівняння -->

let trueOrFalse = 58 < 18;
console.log(trueOrFalse); <!-- результатом буде False -->

<!-- Number -->
<!-- Числовий тип представляє значення як у вигляді цілих чисел, так і у вигляді чисел з плавоючою крапкою (дробові)  -->

let userAge = 20;
let userHeight = 1.83;
console.log(userAge); <!-- Рузультат 20 -->
console.log(typeof userAge); <!-- Рузультат number -->
console.log(userHeight); <!-- Рузультат 1.83 -->
console.log(typeof userAge); <!-- Рузультат number -->

<!-- Тип даних Number може повертати Infinity, Nan -->

let getInfinity = 58 / 0; <!-- поверне значення Infinity -->
console.log(getInfinity);
console.log(typeof getInfinity);

let getInfinity = -58 / 0; <!-- поверне відємне значення -Infinity -->
console.log(geetInfinity);
console.log(typeof getInfinity);

<!-- Nan - "выдает вычеслительную ошибку" -->

let getNan = "Фрілансер" / 10;
console.log(getNan); <!-- поверне помилку NaN, тому що ділити рядок на число не можна -->
console.log(typeof getNan); <!-- поверне тип даних number -->

<!-- BigInt -->
<!-- В JavaScript тип даних "number" не може містити числа більші за 9007199254740991 (16 цифр), або менше, ніж -9007199254740991. BigInt- надає цю можливість -->

const bigInteger = 12345678901234567890123456789n; <!-- Числовому літералу додаємо букву n -->
console.log(typeoof bigInteger);

<!-- Symbol -->
<!-- Унікальний індифікатор обєкта з допомогою одноіменної функції (id) -->

let id = Symbol("id");
console.log(typeoof id); <!-- отримаємо symbol -->

<!-- String -->
<!-- Щоб перпемінна повернула цей тип даних потрібно значення помістити в лапки -->
<!-- кавички бувають: двойні("), одинарні('), косі/обернені (`) -->

<!-- отримаємо string -->

let userName = "Фрілансер по життю";
console.log(typeoof userName);

let userName = 'Фрілансер по життю';
console.log(typeoof userName);

let userName = `Фрілансер по життю`;
console.log(typeoof userName);

<!-- отримаємо Вік: 36 -->

let userName = `Фрілансер по життю`;
let userAgeInfo = `Вік: ${userAge}`; <!-- у косих/обернених (`) кавичкиах можна використати шаблон ${} -->
console.log(typeoof userName);

<!-- Object -->
<!-- Більш складний тип даних, можна записати у вигляді блоку з фігурними дужками -->

let userInfo = {
name: "Фрілансер по життю";
age: 36;
}
console.log(userInfo); <!-- отримаємо {name: "Фрілансер по життю"; age: 36} -->
console.log(typeof userInfo); <!-- отримаємо object -->

<!-- Function -->
<!-- По суті - це той же Object, але для більш простого визначення для function -->

let funcVariable = function name(params) {

<!-- код функції -->

}
console.log(typeof funcVariableo);

<!-- ТИПІВ ДАНИХ можна переобразовувати -->
<!-- Приклад: РЯДКОВЕ преобразування -->

let userAge = 58;
console.log(userAge); <!-- отримаємо 58, значення в console синього кольору -->
console.log(typeof userAge); <!-- отримаємо number -->

userAge = String(userAge);

console.log(userAge); <!-- отримаємо 58, значення в console білого кольору -->
console.log(typeof userAge); <!-- отримаємо string -->

<!-- бульове в рядкове -->

let userTrue = true;
console.log(userTrue); <!-- отримаємо true, значення в console синього кольору -->
console.log(typeof userTrue); <!-- отримаємо boolean -->

userAge = String(userTrue);

console.log(userTrue); <!-- отримаємо true, значення в console білого кольору -->
console.log(typeof userTrue); <!-- отримаємо string -->

<!-- Приклад: ЧИСЛОВЕ преобразування -->

let userAge = "58";
console.log(userAge); <!-- отримаємо рядкове 58, значення в console білого кольору -->
console.log(typeof userAge); <!-- отримаємо string -->

userAge = Number(userAge);

console.log(userAge); <!-- отримаємо числове 58, значення в console синього кольору -->
console.log(typeof userAge); <!-- отримаємо number -->

<!-- Якщо преобразувати рядок в якому немає числа, в числовий, то отримаємо NaN -->

let userAge = "Фрілансер";

userAge = Number(userAge);

console.log(userAge); <!-- NaN  -->
console.log(typeof userAge); <!-- отримаємо number -->

<!-- Приклад: БУЛЬОВЕ преобразування -->

let userAge = 58;
console.log(userAge); <!-- отримаємо 58, значення в console синього кольору -->
console.log(typeof userAge); <!-- отримаємо number -->

userAge = Boolean(userAge);

console.log(userAge); <!-- отримаємо true, значення в console синього кольору -->
console.log(typeof userAge); <!-- отримаємо boolean -->

<!-- УВАГА: число 0 або пустий рядок поверне false/ рядок "0" або " "(з пробілом) поверне true-->
