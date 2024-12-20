// ============
// 1-masala:
//Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.

const user = { name: "Ali", age: 25, location: "Toshkent" };

let { name, age, location } = user;

console.log(name);
console.log(age);
console.log(location);

// ============
// 2-masala:
//Massivdan destructuring yordamida birinchi va ikkinchi elementlarni ajratib oling va qolgan barcha elementlarni others nomli yangi massivga joylashtiring.

const numbers = [10, 20, 30, 40, 50];

let [firstNumber, secondNumber, ...others] = numbers;

// ============
// 3-masala:
//Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring.

const product = { title: "Telefon", price: 300, brand: "Samsung" };

function displayProduct({ title, price }) {
  // Bu yerda kod yozing
  console.log(title);
  console.log(price);
}

displayProduct(product);

// ============
// 4-masala:
//Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.

let x = 10;

function testScope() {
  let x = 20; // Local scope
  if (true) {
    let x = 30; // Block scope
    console.log("Block scope:", x);
  }
  console.log("Local scope:", x);
}

testScope();
console.log("Global scope:", x);
//birinchi holat

// let x = 10;
// console.log("Global scope:", x); Global scope: 10

// ikkinchi holat

//  let x = 10;
// function testScope() {
//   console.log("Local scope:", x);
// }
// testScope();
// console.log("Global scope:", x); Local scope: 10, Global scope: 10

//uchunchi holat

//let x = 10;
//function testScope() {
//  let x = 20; // Local scope
//  console.log("Local scope:", x); Locale scope: 20

//testScope();
//console.log("Global scope:", x); Global scope: 10

// ============
// 5-masala:
//Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating.

function calculate() {
  let result = 0;
  if (true) {
    result = 10;
  }
  console.log(result);
}

calculate();

// bu codda ozgaruvchi block scope ichida ochilgaligi sabablik locale scopeda korinmayapti buni tuzatish uchun locale scope ichida bu ozgaruvchini yaratib kiyin block scope ichida ozgartirib chaqirib olishimz mumkun

// ============
// 6-masala:
//Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.

let count = 5;

function increment() {
  count++;
  console.log("Function scope:", count);
}

increment();
if (true) {
  count += 2;
  console.log("Block scope:", count);
}

console.log("Global scope:", count);

// bu kodda count degan ozgaruvchi uchun 5 qiymatini kirityapmizda kiyin increment funksiyasini ichida uni qiymatiga 1 qoshib funksiyani chaqirib olyapmiz va if(true) block scope ichida uni qiymatiga 2 qoshyapmiz va chaqirib oyapmiz, ohirida chaqirib olyapmiz global qiymatini keltirib olyampmiz

// ============
// 7-masala:
//Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ============
// 8-masala:
//Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.

function squareNumbers(...numbers) {
  const [...a] = numbers;
  a.forEach((number) => {
    number = number ** 2;
  });
  return a;
}

console.log(squareNumbers(2, 3, 4)); // [4, 9, 16]

// ============
// 9-masala:
//Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.

const user1 = { name: "Ali", age: 25 };
const updatedUser = {
  ...user1,
  phone: +998911234567,
};

console.log(updatedUser);

// ============
// 10-masala:
//Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.

var a = 10;
console.log(a); // ?
// bu yerda var yordamida ozgaruvchi anoqlanib va  undan oldin chaqirilyapti
// bu yerda konsolda undefiened dgan narsa chqadi
let b = 20;
console.log(b); // ?
// bu yerdaham huddi shu hato ketyapti
// buni yechimi ozgaruvchilarni konsolga chaqirishdan oldin ularni belgilashimiz kerak
test();
function test() {
  console.log("Test function called");
}
// Regular functioni shohi borligi uchun uni birinchi chaqirib kiyin qiymatlar briktirsak boladi

// ============
// 11-masala:
//TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.
let x1 = 5;
console.log(x1); // Xato
// bu kodda biz ozgaruvchini elon qilishdan oldin qiymatini consolega chiqarmqchi bolyapmiz buni yechimi ozgaruvchini birinchi elon qilish kerak boladi
// ============
// 11.1-masala:
// Quyidagi kodning ishlash tartibini tushuntiring.

var X = 10;

function example() {
  console.log(X); // 10
  var x = 20; // bu ozgaruvchini qiymatini chaqirib bolmaydi chunki uni nomlanishi x biz chaqirmoqchi bolgan ozgaruvchi X bolgani sabab
  console.log(X); // 10
}
// agarda biz funksiyani ichidagi ozgaruvchi nomini Xga ozgartisak birinchi marta chaqirganimzda undefined ikinchi marta esa bizga keraklik qiymat chiqadi chunki function scope ichida hoisting hodisasi bajarilyapti bunda var a ni ozi tepaga chiqyaptida uni qiymati korinmayapti toki uni qiymati belgilangan joyga kelmaguncha
example();

// ============
// 12-masala:
//Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.

// main.js
import { sum, multiply } from "./module.js";
console.log(sum(1, 2));
console.log(multiply(1, 2));
// ============
// 13-masala:
//Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.

// main.js

import greet from "./great.js";

console.log(greet("Man"));

// ============
// 14-masala:
//Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.

// main.js

import { divide as myDivide } from "./math.js";

console.log(myDivide(4, 2));

// ============
// 15-masala:
// Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.
const users = [
  { Name: "John", isActive: true, age: 18 },
  { Name: "Nikola", isActive: true, age: 20 },
  { Name: "Natali", isActive: false, age: 12 },
  { Name: "Anderson", isActive: true, age: 15 },
  { Name: "Andrey", isActive: false, age: 27 },
];

const checkIsActive = () => {
  const res = users.filter((user) => {
    if (user.isActive) {
      return user;
    }
  });
  return res;
};

console.log(checkIsActive());
// ============
// 16-masala:
// Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.
const checkAge = () => {
  return users.sort((a, b) => b.age - a.age);
};

console.log(checkAge());
// ============
// 17-masala:
// Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.
const findUserWithName = (userName) => {
  const res = users.map((user) => {
    if (user.Name === userName) {
      return user;
    }
  });
  return res;
};
// ============
// 18-masala:
//Funksiya foydalanuvchilarning yoshlarining o‘rtacha qiymatini qaytarishi kerak.
const sredneyeZnacheniyeAge = () => {
  let sum = 0;
  let count = 0;
  users.forEach((user) => {
    count++;
    sum += user.age;
  });
  let res = sum / count;
  return res;
};
// ============
// 19-masala:
// Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.
const outputUser = (maxAge, minAge) => {
  const res = users.filter(user => {
    if(user.age < maxAge && user.age > minAge){
      return user
    }
  })
  return res
}
// ============
// 20-masala:
// Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak.
const inputCatrgoryName = (categoryName) => {
  users.forEach(user => {
    if(user.categoryName !== undefined){
      console.log(user.categoryName)
    }
  })
}
// ============
// 21-masala:
// Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak.

// ============
// 22-masala:
// Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.

// ============
// 23-masala:
// Funksiya mahsulotlarning narxini 10% ga kamaytirib, yangi massivni qaytarishi kerak.

// ============
// 24-masala:
// Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak.

// ============
// 25-masala:
// Foydalanuvchilar va mahsulotlarni ulovchi funksiya yozing: har bir foydalanuvchiga tasodifiy mahsulot biriktiriladi va natija qaytariladi.

// ============
// 26-masala:
// Funksiya mahsulotlar ichida qaysi kategoriya eng ko‘p ishlatilganligini aniqlashi kerak.

// ============
// 27-masala:
// Faqat isActive: true qiymatiga ega foydalanuvchilarning yoshlarini o‘rtachasini qaytaradigan funksiya yozing.

// ============
// 28-masala:
// Funksiya mahsulot nomining ichida ma’lum bir so‘z qatnashgan mahsulotlarni qaytarishi kerak.

// ============
// 29-masala:
// Foydalanuvchilarning sonini va mahsulotlarning umumiy narxini qaytaradigan funksiya yozing.

// ============
// 30-masala:
//

// ============
// 31-masala:
//

// ============
// 32-masala:
//

// ============
// 33-masala:
//

// ============
// 34-masala:
//

// ============
// 35-masala:
//

// ============
// 36-masala:
//

// ============
// 37-masala:
//

// ============
// 38-masala:
//

// ============
// 39-masala:
//

// ============
// 40-masala:
//

// ============
// 41-masala:
//

// ============
// 42-masala:
//

// ============
// 43-masala:
//

// ============
// 44-masala:
//

// ============
// 45-masala:
//

// ============
// 46-masala:
//

// ============
// 47-masala:
//

// ============
// 48-masala:
//

// ============
// 49-masala:
//

// ============
// 50-masala:
//

// ============
// 51-masala:
//

// ============
// 52-masala:
//

// ============
// 53-masala:
//

// ============
// 54-masala:
//

// ============
// 55-masala:
//

// ============
// 56-masala:
//

// ============
// 57-masala:
//

// ============
// 58-masala:
//

// ============
// 59-masala:
//

// ============
// 60-masala:
//
