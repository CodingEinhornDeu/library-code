const router = require("express").Router();
const Book = require("../models/Book.model")
// create route
router.get("/books", (req, res, next) => {

  Book
    .find()
    .then(booksFromDB => {
      const data = {
        booksArr: booksFromDB // stored in a obj with name data that we have from DB
      }
      res.render("books/books-list", data) // we are passing booklist from DB to our view
    })
    .catch((error) => {
      console.log("Error getting list of books from DB", error);
      next(error);
    });

});

module.exports = router;