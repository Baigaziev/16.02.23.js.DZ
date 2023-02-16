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
let Mystring = `Ассаламу Алейкум`;
let length = getStringLength(Mystring);
console.log(`Длинна строки: "${Mystring}" равна ${length}`)
