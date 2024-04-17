#! /usr/bin/env node
import inquirer from "inquirer"

const answers:{
    Sentence:string 
}=await inquirer.prompt([

    {
        name: "Sentence",
        type: "input",
        message: "Please Enter your sentence to count the word:"

    }
]);

const words = answers.Sentence.trim().split(" ")

console.warn(words);

console.warn(`Your sentence word count is ${words.length}`);