const express = require("express");
const router = express.Router();

const {
  getBookmarks,
  getBookmarkById,
  addBookmark,
  updateBookmark,
  deleteBookmark,
} = require("../controllers/bookmarkController");

router.get("/", getBookmarks);
router.get("/:id", getBookmarkById);
router.post("/", addBookmark);
router.put("/:id", updateBookmark);
router.delete("/:id", deleteBookmark);

module.exports = router;