const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/data.json");

// Helper to read data
const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

// Helper to write data
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET all bookmarks
exports.getBookmarks = (req, res) => {
  const bookmarks = readData();
  res.json(bookmarks);
};

// ADD bookmark
exports.addBookmark = (req, res) => {
  const { title, url } = req.body;

  if (!title || !url) {
    return res.status(400).json({ message: "Title and URL are required" });
  }

  const bookmarks = readData();

  const newId =
    bookmarks.length > 0
      ? bookmarks[bookmarks.length - 1].id + 1
      : 1;

  const newBookmark = {
    id: newId,   // use newId here
    title,
    url,
  };

  bookmarks.push(newBookmark);
  writeData(bookmarks);

  res.status(201).json(newBookmark);
};

// GET single bookmark by ID
exports.getBookmarkById = (req, res) => {
    const id = parseInt(req.params.id);
    const bookmarks = readData();
  
    const bookmark = bookmarks.find((b) => b.id === id);
  
    if (!bookmark) {
      return res.status(404).json({ message: "Bookmark not found" });
    }
  
    res.json(bookmark);
  };

// UPDATE bookmark
exports.updateBookmark = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, url } = req.body;

  const bookmarks = readData();

  const index = bookmarks.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Bookmark not found" });
  }

  bookmarks[index] = { id, title, url };
  writeData(bookmarks);

  res.json(bookmarks[index]);
};

// DELETE bookmark
exports.deleteBookmark = (req, res) => {
  const id = parseInt(req.params.id);

  const bookmarks = readData();
  const filtered = bookmarks.filter((b) => b.id !== id);

  if (filtered.length === bookmarks.length) {
    return res.status(404).json({ message: "Bookmark not found" });
  }

  writeData(filtered);

  res.json({ message: "Bookmark deleted successfully" });
};