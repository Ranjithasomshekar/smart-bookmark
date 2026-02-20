function BookmarkCard({ bookmark, onEdit, onDelete }) {
    return (
      <div className="card">
        <h3>{bookmark.title}</h3>
  
        <a href={bookmark.url} target="_blank" rel="noreferrer">
          {bookmark.url}
        </a>
  
        <div className="btn-group">
          <button
            className="edit-btn"
            onClick={() => onEdit(bookmark)}
          >
            Edit
          </button>
  
          <button
            className="delete-btn"
            onClick={() => onDelete(bookmark.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default BookmarkCard;