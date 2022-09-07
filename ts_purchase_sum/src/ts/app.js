Object.defineProperty(exports, '__esModule', { value: true });
const Cart_1 = require('./service/Cart');
const Book_1 = require('./domain/Book');
const MusicAlbum_1 = require('./domain/MusicAlbum');

const cart = new Cart_1.default();
console.log(cart.items);
cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
console.log(cart.items);
