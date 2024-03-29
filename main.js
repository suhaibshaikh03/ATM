import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > 10000) {
            console.log("insufficient balance");
        }
        else if (amountAns.amount < 10000) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
            //console.log(`Your remaining balance is: ${mybalance}`)
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
        //console.log(`Your balance is ${mybalance}`)
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "Cash",
                message: "Please select option",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        if (fastCash.Cash === "1000") {
            myBalance -= 1000;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
        else if (fastCash.Cash === "2000") {
            myBalance -= 2000;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
        else if (fastCash.Cash === "5000") {
            myBalance -= 5000;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
        else if (fastCash.Cash === "10000") {
            myBalance -= 10000;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code!!");
}
