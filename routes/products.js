const express = require("express");
const app = express();
const router = express.Router();
const productsController = require("../controllers/products");
//const {authTokenVerifyMiddleware} =require('../middleWare/aurhToken')
// const cors = require("cors");

// const whitelist = ["http://127.0.0.1:8020"];

// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// app.use(express.json());
// router.use(cors(corsOptions));



router.post("/", productsController.postProducts);

router.get("/", productsController.getProducts);

 //router.get("/firebase",  productsController.getFirebase);

router.get(
  "/productsdetail/:productsname",
  productsController.getProductsDetail
);

module.exports = router;
