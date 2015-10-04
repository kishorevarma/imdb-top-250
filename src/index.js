var imdbTopFilms = require("./imdb-top-250.json");
var uniqueRandomArr = require("unique-random-array");
module.exports = {
	all: imdbTopFilms,
	random: uniqueRandomArr(imdbTopFilms)
};