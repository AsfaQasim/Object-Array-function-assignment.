"use strict";
// Assignment 01: Building your friend list
Object.defineProperty(exports, "__esModule", { value: true });
let friend1 = {
    firstName: "Asifa",
    lastName: "Qasim",
    id: 133,
};
let friend2 = {
    firstName: "Misbah",
    lastName: "Khan",
    id: 123,
};
let friend3 = {
    firstName: "Jaweria",
    lastName: "Khan",
    id: 356,
};
let people = {
    friends: [friend1, friend2, friend3]
};
console.log(people);
// Assignment 02: Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join(" "));
let product = {
    name: "Nike",
    model: 2024,
    cost: 3000,
    quantity: 5,
};
let product1 = {
    name: "Kashees",
    model: 2024,
    cost: 4000,
    quantity: 6,
};
let product2 = {
    name: "Huda Beauty",
    model: 2023,
    cost: 2000,
    quantity: 8,
};
let inventory = {
    Product: [product, product1, product2]
};
console.log("Quantity of the third product:", inventory.Product[2].quantity);
let product3 = {
    name: "Adidas",
    model: 2022,
    cost: 5000,
    quantity: 4,
};
inventory.Product.push(product3);
console.log("Name of the fourth product:", inventory.Product[3].name);
console.log("Cost of the first product:", inventory.Product[0].cost);
;
const students = [
    {
        name: "Asifa",
        isSenior: true,
        hasCompletedAssignment: true,
    },
    {
        name: "Faria",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Misbah",
        isSenior: true,
        hasCompletedAssignment: false,
    },
    {
        name: "Mutaiba",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Jaweria",
        isSenior: true,
        hasCompletedAssignment: false,
    }
];
console.log(students);
// 3. Senior students with assignment 
const findSenior = (students) => {
    return students.filter(student => student.isSenior && student.hasCompletedAssignment === true);
};
console.log(findSenior(students));
// 4.Class list update
const removeStudent = (students) => {
    return students.filter(student => student.hasCompletedAssignment === false);
};
console.log(removeStudent(students));
