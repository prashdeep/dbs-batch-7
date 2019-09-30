class Product {

    constructor(private _name:string, private _price:number, private _desc?:string ){
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
    }

    get name():string {
        return this._name;
    }

    get desc():string {
        return this._desc;
    }

    get price():number {
        return this._price;
    }

    set name(name:string){
        this._name = name;
    }

    set desc(desc:string){
        this._desc = desc;
    }

    set price(price:number){
        this._price = price;
    }
}

const iPhone = new Product("IPhone", 85000);
const samsung = new Product("Samsumg", 65000, "Galaxy Note 10");

iPhone.price = 45000;
console.log(iPhone.price)