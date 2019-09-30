export class Product {

    constructor(private _name:string, private _price:number, private _desc?:string, private _productType?:ProductType ){
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
        this._productType = _productType;
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

    get productType():ProductType {
        return this._productType;
    }

    set productType(productType:ProductType){
        this._productType = productType;
    }

    set desc(desc:string){
        this._desc = desc;
    }

    set price(price:number){
        this._price = price;
    }
}

export enum ProductType{
    FASHION,
    APARREL,
    ELECTRONICS,
    CELLPHONE
}

export const COMPANY_NAME="Apple Inc."