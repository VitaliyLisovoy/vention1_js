try {
    console.log(unknownVariable); // ReferenceError: unknownVariable is not defined
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error("🚨 Error: Reference to undefined variable!", error.message);
    } else {
      console.error("Another error occurred:", error);
    }
  }







 
  console.log(`${i} * ${g} = ${i * g}`)


  let num = 7;
  for (let i = 1; i <=10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
  }



  // What is closure and how does it work? Where might you apply it?

  function outerFunction(outerValue){
    return function innerFunction (innerValue){
        console.log(`Outer: ${outerValue}, Inner: ${innerValue}`)
    };
  }

  const closureEx = outerFunction("Hello");
  closureEx("World");

  // What array methods do you use most often and why?

const number = [1, 2, 3, 4];
const double = number.map(num => num * 2)

console.log(doubled);


const age = [18, 23, 33, 43];
const adults = age.filter(age => age >= 18);


// How does "this" work in different contexts? What happens if you use this in an arrow function?
const person = {
    name: "Alice",
    greet () {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.greet();


const person = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.greet();


// Why is it important to understand hoisting and how does it affect how your code works?

sayHallo();

const sayHallo = function(){
    console.log("Hello!");
}



// Please give an example of using "Try Catch" and throwing errors

try {
    console.log(unknownVariable); // ReferenceError: unknownVariable is not defined
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error("🚨 Error: Reference to undefined variable!", error.message);
    } else {
      console.error("Another error occurred:", error);
    }
  }



const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://example.com');
    const element = await page.$('#non-existent'); // This selector does not exist
    if (!element) {
      throw new Error("❌ Element not found! Test failed.");
    }
    await element.click();
  } catch (error) {
    console.error("Error occurred:", error.message);
  } finally {
    await browser.close(); // Always close the browser
  }
})();



// How to fill in nested arrays

[
    [],
    [],
    [],

]

const testData = Array.from({length: 3}, (_, i) => 
 Array.from({length: 3}, (_, j) => `Test-${i}-${j}`));
console.log(testData);

// "Is this the easiest way to copy object ""deeply""?
let copy = JSON.parse(JSON.stringify(user));

structuredClone(object);


// How often prototypes are used in autotests development?