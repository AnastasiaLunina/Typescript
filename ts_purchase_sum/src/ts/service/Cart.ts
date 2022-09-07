import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.onlySingle && this._items.includes(item)) {
            throw new Error('Only one per customer')
        } else {
            this._items.push(item);
        }
    }

    decrease(id: number): void {
        this._items.splice(this._items.findIndex(item => {
            return item.id === id;
        }), 1);
    }

    sumWithoutDiscount(): number {
        return this._items.reduce((a, b) => a + b.price, 0)

    }

    sumWithDiscount(discount: number): number {
        return this.sumWithoutDiscount() - ((this.sumWithoutDiscount() * discount) / 100)
    }

    delete(id: number): void {
        let index = this._items.map(function(item) {
            return item.id
        }).indexOf(id);
        this._items.splice(index, 1)
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}