"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetBanking = /** @class */ (function () {
    function NetBanking() {
    }
    NetBanking.prototype.transferMoney = function (sender, reciever) {
        console.log("Transfering the money from " + sender + " to " + reciever + " using NetBanking");
    };
    return NetBanking;
}());
exports.NetBanking = NetBanking;
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.transferMoney = function (sender) {
        console.log("Crediting the money from " + sender + " to using Credit Card");
    };
    return CreditCard;
}());
exports.CreditCard = CreditCard;
var CashDelivery = /** @class */ (function () {
    function CashDelivery() {
    }
    CashDelivery.prototype.transferMoney = function (sender, reciever) {
        console.log("handing over the money from " + sender + " to " + reciever + " using Cash transaction");
    };
    return CashDelivery;
}());
exports.CashDelivery = CashDelivery;
