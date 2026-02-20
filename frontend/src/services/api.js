import axios from "axios";

//const API_URL = "http://localhost:5000/bookmarks";
const API_URL = "https://smart-bookmark-backend-4hm0.onrender.com/bookmarks";


export const getBookmarks = () => axios.get(API_URL);

export const addBookmark = (data) => axios.post(API_URL, data);

export const updateBookmark = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteBookmark = (id) =>
  axios.delete(`${API_URL}/${id}`);