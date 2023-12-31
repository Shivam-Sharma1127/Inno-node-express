const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express =require("express");
const server =express();
//bodyParser
server.use(express.json()); 
// server.use(express.urlencoded()); 

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


// C R U D APIs

// Create Post /products
server.post("/products",(req,res)=>{
    console.log(req.body)
    products.push(req.body)
    res.json(req.body)
})

//Read GET Products
server.get("/products",(req,res)=>{
    res.json(products);
})

//Read GET Product/:id
server.get("/products/:id",(req,res)=>{
    const id= +req.params.id;
    const product=products.find((p)=>p.id===id)
    res.json(product);
})

//Update PUT Products/:id
server.put("/products/:id",(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id)
    console.log(productIndex)
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({json:"Updated"});
})


//Update PATCH Products/:id
server.patch("/products/:id",(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json({json:"UpdatedOnly"});
})

//Delete DELETE Products/:id

server.delete("/products/:id",(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1)
    res.json({...product,json:"Deleted id ="+id});
})


server.listen(8080,()=>{
    console.log("Server Started!!");
});  