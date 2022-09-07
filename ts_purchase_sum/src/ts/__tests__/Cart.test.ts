import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('new card should be one item is a cart', () => {
  const movie = new Movie(1000, 'Мстители', 'Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'action', 'adventures'], 137, 500, true);
  const cart = new Cart();
  cart.add(movie)
  expect(cart.items.length).toBe(1);
});

test('new card should be one item is a cart', () => {
  const book = new Book(1, 'War and Peace', 'Leo', 2000, 5000, true)
  const cart = new Cart();
  cart.add(book)
  expect(cart.items.length).toBe(1);
});

test('new card should be sum 4000', () => {
  const book = new Book(1, 'War and Peace', 'Leo', 2000, 5000, true)
  const book2 = new Book(2, 'Master and Margarita', 'Mike', 2000, 5000, true)
  const cart = new Cart();
  cart.add(book)
  cart.add(book2)
  expect(cart.sumWithoutDiscount()).toBe(4000);
});

test('new card should be sum  with discount 2000', () => {
  const book = new Book(1, 'War and Peace', 'Leo', 2000, 5000, true)
  const book2 = new Book(2, 'Master and Margarita', 'Mike', 2000, 5000, true)
  const cart = new Cart();
  cart.add(book)
  cart.add(book2)
  expect(cart.sumWithDiscount(50)).toBe(2000);
});

test('new card should be empty', () => {
  const book = new Book(1, 'War and Peace', 'Leo', 2000, 5000, false)
  const cart = new Cart();
  cart.add(book)
  cart.add(book)
  cart.delete(1)
  expect(cart.items.length).toBe(0);
});

test('throws error if item with onlySingle === true added several times', () => {
  const book = new Book(1, 'War and Peace', 'Leo', 2000, 5000, true)
  const cart = new Cart();
  cart.add(book)
  expect(() => cart.add(book)).toThrow();
});

test('do not throw error if item with onlySingle === false added several times', () => {
  const book = new Book(1, 'War and Peace', 'Leo', 2000, 5000, false)
  const cart = new Cart();
  cart.add(book)
  expect(() => cart.add(book)).not.toThrow();
});

test('should decrease an amount in a cart', () => {
  const book = new Book(1, 'War and Peace', 'Leo', 2000, 5000, false)
  const cart = new Cart();
  cart.add(book)
  cart.add(book)
  cart.decrease(1)
  expect(cart.items.length).toBe(1);
});