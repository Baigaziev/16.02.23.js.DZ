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
