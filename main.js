#!/usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to code with anila");
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "enter your guess number",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congradulation! you  guess a correct number");
}
else {
    console.log("sorry ! you guess a wrong number");
}
