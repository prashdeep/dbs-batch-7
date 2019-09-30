import { User } from "./User";

export interface Transaction{
    transferMoney (sender:User, reciever:User, amount:number );
}

