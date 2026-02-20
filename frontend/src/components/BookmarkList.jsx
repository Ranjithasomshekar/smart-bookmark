import BookmarkCard from "./BookmarkCard";

function BookmarkList({ bookmarks, onEdit, onDelete }) {
  return (
    <div className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmark={bookmark}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookmarkList;