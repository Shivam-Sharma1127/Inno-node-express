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
    console.log("-------start----------")
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    console.log("-------end---------")
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

server.get("/products",(req,res)=>{
    res.json(products);
})

server.post("/",(req,res)=>{
    res.json({type:"POST"})
})

server.put("/",(req,res)=>{
    res.json({type:"PUT"})
})

server.patch("/",(req,res)=>{
    res.json({type:"PATCH"})
})

server.delete("/",(req,res)=>{
    res.json({type:"DELETE"})
})


server.listen(8080,()=>{
    console.log("Server Started!!");
});  