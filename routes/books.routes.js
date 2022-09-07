module.exports = app =>{
    const books = require("../controllers/book.controller.js");
    const router = require("express").Router();
    // Create a new Book 
    router.post("/add", books.create);
    app.use('/api/books', router);
    
}