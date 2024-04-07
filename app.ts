let car: string= "civic";
let age: number= 18;
let cities: string[]= ["karachi", "lahore", "Islamabad"];

//  Tests for equality with strings:
console.log("Tests for equality: ",car== "civic"); //True condition
console.log("Tests for equality: ",car== "carolla"); //False condition

// Tests for inequality with strings
console.log("Tests for inequality: ", car != "carolla"); //True condition
console.log("Tests for inequality: ", car != "civic"); //False condition

// • Tests using the lower case function
console.log("Testing using the lower case function: ", car.toLocaleLowerCase()== "civic"); //True condition
console.log("Testing using the lower case function: ", car.toLocaleLowerCase()== "CIVIC"); //False condition

// • Numerical tests involving equality 
console.log("Numerical tests for equality: ", age == 18); //true condition
console.log("Numerical tests for equality: ", age == 17); //False condition

//  • Numerical tests involving inequality
console.log("Numerical tests for inequality: ", age != 17); //true condition
console.log("Numerical tests for inequality: ", age !== 18); //False condition

//  • Numerical tests involving greater 
console.log(" Numerical tests for greater than: ", age > 15); //True conditon
console.log(" Numerical tests for greater than: ", age > 20); //False condition

// • Numerical tests involving Less
console.log(" Numerical tests for less than: ", age < 20); //True condition
console.log(" Numerical tests for less than: ", age  < 15); //False condition

// • Numerical tests involving greater than or equal to
console.log("Number test for greater than or equal to: ", age >= 15); // True condition
console.log("Number test for greater than or equal to: ", age >= 20); //False condition

// • Numerical tests involving less than or equal to

console.log("Number test for less than or equal to: ", age <= 20); // True condition
console.log("Number test for less than or equal to: ", age <= 17); // false condition

// • Tests using "and" and operators
console.log("Test using And operator: ", age == 18 && 10>5); //True condition
console.log("Test using And operator: ", age== 18 && 10<5); //False condition

// • Tests using "OR" and operators
console.log("Test using OR operator: ", age == 18 || 20 <5); //True condition
console.log("Test using OR operator: ", age == 15 || false); //False condition

// • Test whether an item is in a array
console.log("Test whether an item is in a array: ", cities.includes("karachi"));//True condition
console.log("Test whether an item is in a array: ", cities.includes("multan"));//False condition

// • Test whether an item is not in a array
console.log("Test whether an item is not in a array: ", !cities.includes("multan"));//True condition
console.log("Test whether an item is not in a array: ", cities.includes("multan"));//false condition



