export class User {
    constructor(private _id:number, private _name:string, private  _balance:number = 10000){
        this._id = _id;
        this._name = _name;
        this._balance = _balance;
    }
    
    get balance():number{
        return this._balance;
    }
    set balance(amount){
        this._balance += amount;
    }

    get name():string {
        return this._name;
    }

}