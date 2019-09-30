import { Transaction } from "./Pay";
import { User } from "./User";

export class NetBanking {
    transferMoney (sender:User, reciever:User, amount:number ){
        if(sender.balance >= amount){
            sender.balance -= amount;
            reciever.balance += amount;
        }
   
        console.log(`Transfering the money from ${sender.name} to ${reciever.name} using NetBanking`)
    }

}

export class CreditCard implements Transaction {
    transferMoney (sender:User, reciever:User,amount:number ){
        if(sender.balance >= amount){
            sender.balance -= amount;
            reciever.balance += amount;
        }
   
        console.log(`Crediting the money from ${sender.name} to ${reciever.name} using Credit Card`)
    }

}

export class CashDelivery {
    transferMoney (sender:User, reciever:User, amount:number ){
        if(sender.balance >= amount){
            sender.balance -= amount;
            reciever.balance += amount;
        }else {
            console.log(`Not enough money to transfer`)
        }
        console.log(`handing over the money from ${sender.balance} to ${reciever.balance} using Cash transaction`)
    }

}