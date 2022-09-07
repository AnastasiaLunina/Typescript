import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';


const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, true));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, true));
cart.add(new Movie(1000, 'Мстители', 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'action', 'adventures'], 137, 500, true));


console.log(cart.items);
