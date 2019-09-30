var Product = /** @class */ (function () {
    function Product(_name, _price, _desc) {
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (desc) {
            this._desc = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var iPhone = new Product("IPhone", 85000);
var samsung = new Product("Samsumg", 65000, "Galaxy Note 10");
iPhone.price = 45000;
console.log(iPhone.price);
