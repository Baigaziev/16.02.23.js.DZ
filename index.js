//!Напишите функцию, которая выводит ваше имя и фамилию.
function printName() {
  console.log("Baigaziev Erzhan");
}
printName();

//*Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).

// function getVolume(height, radius) {
//   let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
//   console.log(`Объем конуса равен. ${volume}`);
//   return volume;
// }

// getVolume(10, 5);

//?Напишите функцию, которая принимает строку и возвращает ее длину.

function getStringLength(str) {
  return str.length;
}
let Mystring = `АссаламуАлейкум`;
let length = getStringLength(Mystring);
console.log(`Длинна строки: "${Mystring}" равна ${length}`);

//!Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.

function isEven(number) {
  if (number % 2 === 0) {
    return true; // Число четное
  } else {
    return false; // Число нечетное
  }
}
console.log(isEven(10)); //? true
console.log(isEven(7)); //? false

//!Напишите функцию, которая возвращает квадрат числа.
function square(num) {
  return num * num;
}
console.log(square(5));
console.log(square(10));

//!Напишите функцию, которая возвращает корень числа.
function squareRoot(num) {
  return Math.sqrt(num);
}
console.log(squareRoot(25));
console.log(squareRoot(100));

//!Напишите функцию, которая возвращает периметр пятиугольника.functionName(a, b, c, d, e)

function pentagonPerimeter(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(pentagonPerimeter(2, 4, 6, 8, 10)); // выведет 30

//!Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
for (let i = 0; i <= 33; i += 3) {
  console.log(i);
}

//!Напишите цикл, вычисляющий факториал числа 8. (8!)

let factorial = 1;
for (let i = 1; i <= 8; i++) {
  factorial *= i;
}
console.log(factorial); // 40 320

//!Напишите цикл, который выводит квадраты чисел от 1 до 10.

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

//!Напишите цикл, который вычисляет сумму чисел от 1 до 25.
let sum = 0;
for (let i = 1; i <= 25; i++) {
  sum += i;
}
console.log(sum);

//?Напишите цикл, который печатает четные числа от 0 до 20.

for (let i = 0; i <= 21; i += 2) {
  console.log(i);
}

//! Напишите цикл, который печатает нечетные числа от 1 до 15.

let result = "";
for (let i = 1; i <= 15; i += 2) {
  result += i + " ";
}
console.log(result);

//!Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.
// создаем массив из строк
let myArray = ["один", "два", "три"];

// добавляем два новых элемента в начало массива
myArray.unshift("ноль");
myArray.unshift("один");

// добавляем три элемента в конец массива
myArray.push("четыре", "пять", "шесть");

console.log(myArray);

//!Создайте массив чисел и вычислите сумму всех четных чисел в массиве.
// создаем массив чисел
let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// создаем переменную для хранения суммы четных чисел
let suma = 0;
// проходим по массиву и проверяем каждое число на четность
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    // если число четное, добавляем его к сумме
    sum += myArray[i];
  }
}
console.log(sum);

//!Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]

// создаем массив строк
let myArrayy = ["I", "like", "to", "eat!"];

// объединяем строки с помощью метода join()
let myString = myArrayy.join(" ");

console.log(myString); // выведет "I like to eat!"

//!! Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]

let myText = ["one", "two", "three"];

// используем метод reverse() для переворота массива
myText.reverse();

console.log(myText);

//!Создайте массив из имен (минимум 3) и выведите каждое имя.

let name = ["Erzhan", "Ermek", "Samira"];

for (let i = 0; i < name.length; i++) {
  console.log("Hello " + name[i]);
}


//!Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
let numbers = [2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  let squared = numbers[i] ** 2; 
  console.log(squared);
}

//!21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 


let animals = ["cat", "dog", "snake"];

if (animals.includes("dog")) {
  console.log("Элемент найден"); 
} else {
  console.log("Элемент не найден"); 
}