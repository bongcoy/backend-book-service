import {Book} from "../models";

class BookController {
  static async listBooks(req, res) {
    const books = await Book.findAll();
    res.status(200).json(books);
  }
}

export default BookController;
