const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/auth/user", require("./routes/userRoutes"));
app.use("/api/auth/staff", require("./routes/staffRoutes"));
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/order", require("./routes/orderRoutes"));

// error handler
app.use(require("./middlewares/errorHandlerMiddleware").errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
