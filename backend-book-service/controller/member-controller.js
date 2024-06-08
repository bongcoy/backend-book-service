// controllers/memberController.js
import BorrowingService from "../domains/services/borrowing-service.js";
import {Member, BorrowedBooks} from "../models";

class MemberController {
  static async borrowBook(req, res) {
    try {
      await BorrowingService.borrowBook(
        req.params.memberCode,
        req.params.bookCode,
      );
      res.status(200).send("Book borrowed successfully");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async returnBook(req, res) {
    try {
      await BorrowingService.returnBook(
        req.params.memberCode,
        req.params.bookCode,
      );
      res.status(200).send("Book returned successfully");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async listMembers(req, res) {
    const members = await Member.findAll({
      include: [
        {model: BorrowedBooks, where: {returnDate: null}, required: false},
      ],
    });
    res.status(200).json(members);
  }
}

export default MemberController;
