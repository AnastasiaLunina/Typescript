const __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) {
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
const Cart = /** @class */ (function () {
  function Cart() {
    this._items = [];
  }
  Cart.prototype.add = function (item) {
    if (item.onlySingle && this._items.includes(item)) {
      throw new Error('Only one per customer');
    } else {
      this._items.push(item);
    }
  };
  Cart.prototype.decrease = function (id) {
    this._items.splice(this._items.findIndex((item) => item.id === id), 1);
  };
  Cart.prototype.sumWithoutDiscount = function () {
    return this._items.reduce((a, b) => a + b.price, 0);
  };
  Cart.prototype.sumWithDiscount = function (discount) {
    return this.sumWithoutDiscount() - ((this.sumWithoutDiscount() * discount) / 100);
  };
  Cart.prototype.delete = function (id) {
    // let index = this._items.map(function(item) {
    //     return item.id
    // }).indexOf(id);
    // this._items.splice(index, 1)
    this._items = this._items.filter((item) => item.id !== id);
  };
  Object.defineProperty(Cart.prototype, 'items', {
    get() {
      return __spreadArray([], this._items, true);
    },
    enumerable: false,
    configurable: true,
  });
  return Cart;
}());
exports.default = Cart;
