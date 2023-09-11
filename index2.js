const express =require("express");
const server =express();
const productRouter=require("./routes/product"); 
//bodyParser
server.use(express.json()); 
server.use("/api/products",productRouter.routes);

const auth=(req,res,next)=>{
    // console.log(req.method, req.ip, req.hostname, req.get("User-Agent"));
    console.log("-------start----------");
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    console.log("-------end---------");
    // if(req.query.password=="123")//queryParameters
    // if(req.body.password=="123")//bodyParameters
    if(req.params.password=="123")//paramsParameters
    next();
    else
    res.sendStatus(401);
};

// server.use(auth);//application level middleware

//API -EndPoint - Route
// server.get("/:password",auth,(req,res)=>{
//     res.json({type:"GET"})
// })


// // Create Post /products
// server.post("/products",productController.createProducts)

// //Read GET Products
// server.get("/products",productController.getAllProducts)

// //Read GET Product/:id
// server.get("/products/:id",productController.getProduct)

// //Update PUT Products/:id
// server.put("/products/:id",productController.replaceProducts)

// //Update PATCH Products/:id
// server.patch("/products/:id",productController.updateProducts)

// //Delete DELETE Products/:id
// server.delete("/products/:id",productController.deleteProducts)


server.listen(8080,()=>{
    console.log("Server Started!!");
});  