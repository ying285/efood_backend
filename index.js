const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");


app.use(cors());
app.use(express.json());

const productsRoutes = require("./routes/products");
app.use("/products", productsRoutes);

db.sequelize.sync().then(() => {
  app.listen(8009, () => {
    console.log("Server running on port 8009");
  })
  
});
