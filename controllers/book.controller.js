const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

// Create and Save a new Book
exports.create = (req, res) => {
    console.log(req.body);
    if (!req.body.title) {
        res.status(400).json({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Book
    const book = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Book in the database
    Book.create(book)
        .then(data => {
            res.json(data);
        }
        )
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the Book."
            });
        });
}