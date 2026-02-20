import { useEffect, useState } from "react";
import {
  getBookmarks,
  addBookmark,
  updateBookmark,
  deleteBookmark,
} from "./services/api";

import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";

import "./styles/App.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [editingBookmark, setEditingBookmark] = useState(null);

  const fetchBookmarks = async () => {
    const res = await getBookmarks();
    setBookmarks(res.data);
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const handleSubmit = async (data) => {
    if (editingBookmark) {
      await updateBookmark(editingBookmark.id, data);
      setEditingBookmark(null);
    } else {
      await addBookmark(data);
    }

    fetchBookmarks();
  };

  const handleDelete = async (id) => {
    await deleteBookmark(id);
    fetchBookmarks();
  };

  const handleEdit = (bookmark) => {
    setEditingBookmark(bookmark);
  };

  return (
    <div className="container">
      <h1 className="heading">Smart Bookmark Manager</h1>

      <BookmarkForm
        onSubmit={handleSubmit}
        editingBookmark={editingBookmark}
      />

      <BookmarkList
        bookmarks={bookmarks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;