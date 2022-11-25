#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.log(
  chalk.greenBright(
    figlet.textSync("Calculator", { horizontalLayout: "full" })
  )
);
type Operator = "+" | "-" | "*" | "/"; // we also use for pre define operation for more reeadable and use as calculator function parameter (operator : Operator) and calculator function calculate(firstNum, operator as Operator, secondNum)

function calculate(firstNum: number, operator: string, secondNum: number) {
  switch (
    operator // Alternative of switch is if else condition
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

function isOperator(operator: string): boolean {
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
function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
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
        message:
          "Allow Operation are '+', '-','/','*', and stop calculation press '$' sign .",
      },
    ])
    .then((answers) => {
      function main(): void {
        const validInput: boolean =
          isNumber(answers.firstNumber) &&
          isOperator(answers.operation) &&
          isNumber(answers.secondNumber);
        if (validInput) {
          const firstNum: number = parseInt(answers.firstNumber);
          const secondNum: number = parseInt(answers.secondNumber);
          const result = calculate(firstNum, answers.operation, secondNum);
          if (result != 0) {
            console.log(chalk.bold.green("Result = " + result));
            repeatCall();
          }
          if (result === 0) {
            console.log(chalk.bold.magentaBright("Calculator stop"));
          }
        } else {
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
      message:
        "Allow Operation are '+', '-','/','*', and stop calculation press '$' sign .",
    },
  ])
  .then((answers) => {
    function main(): void {
      const validInput: boolean =
        isNumber(answers.firstNumber) &&
        isOperator(answers.operation) &&
        isNumber(answers.secondNumber);
      if (validInput) {
        const firstNum: number = parseInt(answers.firstNumber);
        const secondNum: number = parseInt(answers.secondNumber);
        const result = calculate(firstNum, answers.operation, secondNum);
        if (result != 0) {
          console.log(chalk.bold.green("Result = " + result));
          repeatCall();
        }
        if (result === 0) {
          console.log(chalk.bold.magentaBright("Calculator stop"));
        }
      } else {
        console.log(chalk.bold.redBright("\ninvalid input\n"));
        repeatCall();
      }
    }
    main();
  });
