const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/auth/user", require("./routes/userRoutes"));
app.use("/api/auth/staff", require("./routes/staffRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// error handler
app.use(require("./middlewares/errorHandlerMiddleware").errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
