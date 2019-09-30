"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(_name, _price, _desc, _productType) {
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
        this._productType = _productType;
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
        this._productType = _productType;
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
    Object.defineProperty(Product.prototype, "productType", {
        get: function () {
            return this._productType;
        },
        set: function (productType) {
            this._productType = productType;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
var ProductType;
(function (ProductType) {
    ProductType[ProductType["FASHION"] = 0] = "FASHION";
    ProductType[ProductType["APARREL"] = 1] = "APARREL";
    ProductType[ProductType["ELECTRONICS"] = 2] = "ELECTRONICS";
    ProductType[ProductType["CELLPHONE"] = 3] = "CELLPHONE";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
exports.COMPANY_NAME = "Apple Inc.";
