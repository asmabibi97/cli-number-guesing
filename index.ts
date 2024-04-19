#! /usr/bin/env node 
import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()*10+1);
const answers = await inquirer.prompt([
  {
    name: "guessanumber",
    type: "number",
    message: "please enter a number",
  },
]);
if (answers.guessanumber == randomnumber) {
  console.log("congratulations you guessed a right number");
} else {
  console.log("wrong guess");
}
