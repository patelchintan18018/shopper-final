const Products = require("../models/Products");


exports.allproducts = async(req,res)=>{
  try {
    let all_products = await Products.find({});
    console.log("products fetched");
    res.status(200).json(all_products);
  } catch (error) {
    res.status(400).json(error);
  }
}

exports.addproduct = async (req,res) => {
    try {
        const singleProduct = new Products({
            id : req.body.id,
            name :req.body.name,
            category:req.body.category,
            sub_category:req.body.sub_category,
            colour :req.body.colour,
            image :req.body.image,
            old_price : req.body.old_price,
            new_price : req.body.new_price,
          });
          console.log(singleProduct);
          await singleProduct.save();
          console.log("product added");
          res.status(200).json({
            success:true,
            name : req.body.name,
          })
    } catch (error) {
        res.status(400).json(error)
    }
}


