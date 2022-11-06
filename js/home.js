"use strict";

//Используя конструкцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

//Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// HOME
//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caclculateAverage(...args) {
//   let sum = 0;
  
//   for ()
// }
// console.log();





//Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of


// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

// console.log(user);
// console.log(keys);


//Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//    for (const stone of stones) {

//     if (stone.name === stonesName)
//     {
//       return stone.price * stones.quantity
      
//     };
//    }

// }

// console.log(calcTotalPrice(stones, "Изумруд"));
// console.log(calcTotalPrice(stones, "Сапфир"))

// let username = 12;
// console.log(username); // undefined

// const quantity = 17;
// console.log(typeof quantity);

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const message = "JavaScript is awesome!";
// alert(message);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value);

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y);
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// // Подивимось на різний порядок операндів.

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }


// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']


// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20


// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);



// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;



// console.log(makePizza());

// result = makePizza();
// pointer(pointer.makePizza);



// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);



// function deliverPizza(pizzaName) {
//   console.log (`Delivering ${pizzaName} pizza.`);
// }

// function makePizza(pizzaName) {
//   console.log (`Pizza ${pizzaName} is being prepared, please wait...`);
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
  
//   console.log();
//   callback(pizzaName);
// }
// makeMessage("Ultracheese", deliverPizza);
// makeMessage("Royal Grand", makePizza);




// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });


// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);



const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]




// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAlphabeticalOrder);



// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);



// const getSortedFriends = users => [...users]
// .flatMat(user => user.friends)
// .filter((friends, index, users) => users.indexOf(friends) === index)
// .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends);



// const test = {
//   prop: 42,
//   func: function() {
//     return this.prop;
//   },
// };

// console.log(test.func());



// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]



// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}



// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }



// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

// getItems() {
//     return this.items;
//   }

// addItem(newItem) {
//   this.items.push(newItem);
// }

// removeItem(itemToRemove) {
//   let itemIndex = this.items.indexOf(itemToRemove);
//   this.items.splice(itemIndex, 1);
// }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]





// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

// getValue() {
//   return this.value;
// }
  
// padEnd(str) {
//   this.value += str;
// }

// padStart(str) {
//   this.value = str += this.value; 
// }

//   padBoth(str) {
//     this.value = str += this.value += str; 
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="




//Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой


// function letMeSeeYourName(back) {
//     const answer = prompt("Введідь ім'я")

//     if (!answer) {
//       console.log(true)
//       return 
//     } 
//  back(answer)
//     // callback(answer)
// }

// function greet(name) {
//     console.log(`Привет ${name}`) //`${}`- інтерполяція;
// }

// letMeSeeYourName(greet)




//У застосунку потрібен адміністратор
// з можливістю додавати пошти користувачів у чорний список.

//Оголоси клас Admin, який наслідує від класу User
//- додай класу Admin публічну статичну властивість
// AccessLevel (рівень доступу), 
//значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}


// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}



// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com



const article = document.querySelector(".article");
// console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);