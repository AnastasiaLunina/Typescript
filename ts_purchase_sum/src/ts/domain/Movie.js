Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @module user
 */
/**
 * Load user info by id
 *
 * @param {number} id user id
 * @returns {Object} user info
 */
const Movie = /** @class */ (function () {
  function Movie(id, name, nameEng, year, country, slogan, genre, duration, price) {
    this.id = id;
    this.name = name;
    this.nameEng = nameEng;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.duration = duration;
    this.price = price;
  }
  return Movie;
}());
exports.default = Movie;
