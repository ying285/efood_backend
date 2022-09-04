const { Products } = require("../models");

exports.postProducts = async (req, res) => {
  const products = req.body;
  try {
    await Products.create(products);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const listOfProducts = await Products.findAll();
    res.json(listOfProducts);
  } catch (err) {
    console.log(err);
  }
};

// exports.getFirebase=async(req,res)=>{
//    res.send('Ying, I am here')
// }

exports.getProductsDetail = async (req, res) => {
  const title = req.params.productsname;
  try {
    const productname = await Products.findOne({
      where: { title: title },
    });
    return res.json(productname);
  } catch (err) {
    console.log(err.toJSON());
  }
}
