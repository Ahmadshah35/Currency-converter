
import inquirer from "inquirer";

const currency : any = {
    USD: 1,//base currency
    INR: 74.57,
    PKR:280,
    EUR:0.91
}

let userAnswer = await inquirer.prompt(
    [
    {    
        name: "from",
        message: "enter from currency",
        type:"list",
        choices:["USD","INR","PKR","INR","EUR"]
   
    },
    {    
        name: "to",
        message: "enter to currency",
        type:"list",
        choices:["USD","INR","PKR","INR","EUR"]
   
    },
    {    
        name: "amount",
        message: "enter your amount",
        type:"number",
    },
]
);

let fromamount = currency[userAnswer.from]
let toamount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseamount = amount / fromamount
let convertedamount = baseamount * toamount
console.log(convertedamount);

