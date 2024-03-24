import express from "express";
import { Router } from "express";
import { createProduct } from "../controllers/productContoller.js";
import { searchProduct } from "../controllers/productContoller.js";

const productRouter = Router();

productRouter.post("/createProduct", createProduct);
productRouter.get("/searchProduct", searchProduct);

export default productRouter;
