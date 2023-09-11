const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

exports.createProducts=(req,res)=>{
    console.log(req.body)
    products.push(req.body)
    res.json(req.body)
}
exports.getAllProducts=(req,res)=>{
    res.json(products);
}
exports.getProduct=(req,res)=>{
    const id= +req.params.id;
    const product=products.find((p)=>p.id===id)
    res.json(product);
}
exports.replaceProducts=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id)
    console.log(productIndex)
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({json:"Updated"});
}
exports.updateProducts=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json({json:"UpdatedOnly"});
}
exports.deleteProducts=(req,res)=>{
    const id= +req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id)
    const product=products[productIndex]
    products.splice(productIndex,1)
    res.json({...product,json:"Deleted id ="+id});
}
