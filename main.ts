#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
// myBalance += 6000 =16000
// myBalance -= 6000 =4000
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
 [
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
 ]   
);
//  12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

   let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","fast cash" ,"check balance"] // fast cash application
            }
        ]
    );

    console.log(operationAns.operation);

    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                   name: "amount" ,
                   message: "enter your amount",
                   type: "number"
                }
            ]
        );
        if (amountAns.amount > myBalance){
            console.log("Insufficient balance")
        }
        // =, -=, +=
        else{
            myBalance -= amountAns.amount;

            console.log(`your remaining balance is ${myBalance}`) // use of template literals only in all consol.logs
        }
       
    } 
    else if(operationAns.operation === "fast cash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "select the amount which you withdraw",
                    type: "list",
                    choices: [1000,2000,5000,10000]

                }
            ]
        );
        myBalance -= fast.fastcash;
        // we use '\n' to break line
        console.log(`you have successfully withdrawal ${fast.fastcash},\n Your remaining balance is ${myBalance}`)
    }
    
    else if (operationAns.operation === "check balance"){
       // use of template literals
        console.log(`your balance is ${myBalance}`)
    
    
    }


}


else {
    console.log("Incoerrect pin number");
}    

    




    

        
    


    



    

 

