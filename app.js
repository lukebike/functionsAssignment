// 1.
function greet() {
  console.log("Hello, World!");
}
greet();
// 2.
/*
function favoriteNumber() {
  let favoriteNum = prompt("What's your favorite number?");
  console.log(`Your favorite number is ${favoriteNum}`);
}
favoriteNumber();
*/
// 3.
function magicEightBall() {
  const responses = ["Yes", "No", "Maybe", "Ask again later"];
  const random = Math.floor(Math.random() * responses.length);
  console.log(`The magic eight ball says ${responses[random]}`);
}
magicEightBall();
// 4.
function getCurrentYear() {
  const currentDate = new Date();
  console.log(`The current year is ${currentDate.getFullYear()}`);
}
getCurrentYear();
// 5.
function tellJoke() {
  const jokes = ["HAHA", "HOHOHOOH", "YEHAHAHAH"];
  const random = Math.floor(Math.random() * jokes.length);
  console.log(`Today's random joke is ${jokes[random]}`);
}
tellJoke();
// 6.
function personalGreeting(name) {
  console.log(`Hello there, ${name}`);
}
personalGreeting("Luke");
// 7.
function add(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
add(2, 5);
// 8.
function ageInMonths(age) {
  console.log(`Your age in months is ${age * 12}`);
}
ageInMonths(25);
// 9.
function celsiusToFahrenheit(temp) {
  let fahrenheit = parseInt(temp);
  fahrenheit *= 1.8;
  fahrenheit += 32;
  console.log(
    `The celsius temperature (${temp} converts to ${fahrenheit} in Fahrenheit.)`
  );
}
celsiusToFahrenheit(30);
// 10.
function getFullName(firstName, lastName) {
  console.log(`Your full name is ${firstName} ${lastName}`);
}
getFullName("Luke", "Salem");
// 11.
function calculateArea(length, width) {
  console.log(
    `The area of the rectangle is ${parseInt(length) * parseInt(width)} cm²`
  );
}
calculateArea(30, 50);
// 12.
function findMaximum(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
  } else {
    console.log(`${num2} is bigger than ${num1}`);
  }
}
findMaximum(50, 500);
findMaximum(530, 50);
// 13.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  let count = 0;
  for (let vowel of str) {
    if (vowels.includes(vowel)) {
      count++;
    }
  }
  console.log(`The string ${str} has ${count} vowels.`);
}
countVowels("hello");
// 14.
function calculateDiscount(price, discount) {
  let discountedPercentage = price * (discount / 100);
  let discountedPrice = price - discountedPercentage;
  console.log(
    `The price is $${price} but becomes $${discountedPrice} after the ${discount}% discount.`
  );
}
calculateDiscount(150, 30);
// 15.
function reverseString(str) {
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  console.log(`The string in reverse is ${reverseString.join("")}`);
}
reverseString("Hello world");
