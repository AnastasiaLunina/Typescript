exports.__esModule = true;
/**
 * @module user
 */
/**
 * Load user info by id
 *
 * @param {number} id user id
 * @returns {Object} user info
 */
const Book = /** @class */ (function () {
  function Book(id, name, author, price, pages, onlySingle) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.pages = pages;
    this.onlySingle = onlySingle;
  }
  return Book;
}());
exports.default = Book;
