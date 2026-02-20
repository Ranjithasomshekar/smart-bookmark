const express = require("express");
const cors = require("cors");

const bookmarkRoutes = require("./routes/bookmarkRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/bookmarks", bookmarkRoutes);

// Error middleware
app.use(errorHandler);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});