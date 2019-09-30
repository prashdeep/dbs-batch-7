import { Transaction } from "./Pay";

export class NetBanking {
    transferMoney (sender:string, reciever:string ){
        console.log(`Transfering the money from ${sender} to ${reciever} using NetBanking`)
    }

}

export class CreditCard implements Transaction {
    transferMoney (sender:string, reciever:string ){
        console.log(`Crediting the money from ${sender} to ${reciever} using Credit Card`)
    }

}

export class CashDelivery {
    transferMoney (sender:string, reciever:string ){
        console.log(`handing over the money from ${sender} to ${reciever} using Cash transaction`)
    }

}