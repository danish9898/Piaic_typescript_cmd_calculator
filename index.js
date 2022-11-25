#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.log(chalk.greenBright(figlet.textSync("Calculator", { horizontalLayout: "full" })));
function calculate(firstNum, operator, secondNum) {
    switch (operator // Alternative of switch is if else condition
    ) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        case "$":
            return 0;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        case "$":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
function repeatCall() {
    inquirer
        .prompt([
        {
            name: "firstNumber",
            message: "Enter the first number?",
        },
        {
            name: "secondNumber",
            message: "Enter secondnumber?",
        },
        {
            name: "operation",
            message: "Allow Operation are '+', '-','/','*', and stop calculation press '$' sign .",
        },
    ])
        .then((answers) => {
        function main() {
            const validInput = isNumber(answers.firstNumber) &&
                isOperator(answers.operation) &&
                isNumber(answers.secondNumber);
            if (validInput) {
                const firstNum = parseInt(answers.firstNumber);
                const secondNum = parseInt(answers.secondNumber);
                const result = calculate(firstNum, answers.operation, secondNum);
                if (result != 0) {
                    console.log(chalk.bold.green("Result = " + result));
                    repeatCall();
                }
                if (result === 0) {
                    console.log(chalk.bold.magentaBright("Calculator stop"));
                }
            }
            else {
                console.log(chalk.bold.redBright("\ninvalid input\n"));
                repeatCall();
            }
        }
        main();
    });
}
inquirer
    .prompt([
    {
        name: "firstNumber",
        message: "Enter the first number?",
    },
    {
        name: "secondNumber",
        message: "Enter secondnumber?",
    },
    {
        name: "operation",
        message: "Allow Operation are '+', '-','/','*', and stop calculation press '$' sign .",
    },
])
    .then((answers) => {
    function main() {
        const validInput = isNumber(answers.firstNumber) &&
            isOperator(answers.operation) &&
            isNumber(answers.secondNumber);
        if (validInput) {
            const firstNum = parseInt(answers.firstNumber);
            const secondNum = parseInt(answers.secondNumber);
            const result = calculate(firstNum, answers.operation, secondNum);
            if (result != 0) {
                console.log(chalk.bold.green("Result = " + result));
                repeatCall();
            }
            if (result === 0) {
                console.log(chalk.bold.magentaBright("Calculator stop"));
            }
        }
        else {
            console.log(chalk.bold.redBright("\ninvalid input\n"));
            repeatCall();
        }
    }
    main();
});
