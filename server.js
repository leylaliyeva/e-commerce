const express = require("express");
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorMiddleware")

const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("URL:", req.url);
  console.log("BODY:", req.body);
  next();
});
app.get("/", (req, res) => {
  res.send("E-commerce API is running");
});

app.use("/categories", categoryRoutes);
app.use("/", authRoutes);
app.use("/products", productRoutes);

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});