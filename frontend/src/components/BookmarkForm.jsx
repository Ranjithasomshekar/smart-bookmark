import { useState, useEffect } from "react";

function BookmarkForm({ onSubmit, editingBookmark }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (editingBookmark) {
      setTitle(editingBookmark.title);
      setUrl(editingBookmark.url);
    }
  }, [editingBookmark]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !url) {
      alert("Both fields are required");
      return;
    }

    onSubmit({ title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button type="submit">
        {editingBookmark ? "Update Bookmark" : "Add Bookmark"}
      </button>
    </form>
  );
}

export default BookmarkForm;