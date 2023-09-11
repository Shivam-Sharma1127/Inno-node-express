const express =require("express");
const productController=require("../controller/product");
const router=express.Router();
// C R U D APIs
router
    .post("/",productController.createProducts)
    .get("/",productController.getAllProducts)
    .get("/:id",productController.getProduct)
    .put("/:id",productController.replaceProducts)
    .patch("/:id",productController.updateProducts)
    .delete("/:id",productController.deleteProducts)
exports.routes=router;