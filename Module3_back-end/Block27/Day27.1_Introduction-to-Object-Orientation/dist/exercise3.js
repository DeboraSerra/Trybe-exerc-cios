"use strict";
class Client {
    constructor(name) {
        this._name = name;
    }
}
class Order {
    constructor(client, items, payment, discount) {
        this._client = client;
        this._items = items;
        this._payment = payment;
        this._discount = discount;
    }
    get total() {
        const total = this._items.reduce((acc, item) => acc + item.price, 0);
        return total;
    }
    get totalWithDiscount() {
        const total = this.total;
        if (this._discount)
            return +(total - (total * this._discount)).toFixed(2);
        return total;
    }
}
class Item {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get price() { return this._price; }
}
const client = new Client('Jane Doe');
const item1 = new Item('banana', 2);
const item2 = new Item('coxinha', 3.5);
const item3 = new Item('suco', 6.3);
const order1 = new Order(client, [item1, item2, item3], 'money', 0.1);
const order2 = new Order(client, [item1, item2, item3], 'credit', undefined);
console.log({ total: order1.total, withDiscount: order1.totalWithDiscount });
console.log({ total: order2.total, withDiscount: order2.totalWithDiscount });
