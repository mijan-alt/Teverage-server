import { Product } from "../models/product.js";

export const createProduct = async (req, res) => {
  try {

    const {
       title,
      description,
      price,
    discountPercentage,
    rating,
   stock,
brand,
category,
thumbnail,
images,
color,
warranty,
weight
    } =
        req.body;

    // Construct an object with the extracted data
    const productData = {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
      color,
      warranty,
      weight,
    };


    // Save the product to the database
    await Product.create(productData);

    res
      .status(200)
      .json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error" });
  }
};





export const searchProduct = async (req, res) => {

    console.log('hit the searrching route')
    console.log("my query", req.query)
  try {
      const { query } = req.query;
       const page = req.query.page ? parseInt(req.query.page) : 1;
       const perPage = req.query.perPage ? parseInt(req.query.perPage) : 2;

       // Calculate the number of documents to skip
       const skip = (page - 1) * perPage;
   
    const products = await Product.find({
      $or: [
        { title: { $regex: query, $options: "i" } }, // Case-insensitive search by title
        { description: { $regex: query, $options: "i" } }, // Case-insensitive search by description
      ],
    })
      .skip(skip)
      .limit(perPage);

       

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Internal Server Error' });
  }
};