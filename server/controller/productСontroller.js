const {Product} = require('../model/model')

class Product_Controller{
    async create(req,res){
        let{brand,model,price} = req.body
        const product = await Product.create({brand,model,price})
        return res.json(product)
    }
    async getall(req,res){
        const {brand,model} = req.query
        let products;
        if(!brand && !model){
            products = await Product.findAll()
        }
        if(brand && !model){
            products = await Product.findAll({where:{brand}})
        }
        if(!brand && model){
            products = await Product.findAll({where:{model}})
        }
        if(brand && model){
            products = await Product.findAll({where:{brand,model}})
        }
        return res.json(products)
    }
    async getOne(req,res){
        const{id}=req.params
        const product = await Product.findOne(
            {where:{id}},
        )
        return res.json(product)
    }
    async deleteOne(req,res){
        const{id} = req.params
        const product = await Product.destroy(
            {where:{id}}
        )
        return res.json({message:"Product delete succesful id="+product})
    }
    async editOne(req,res){
        
    }
}
module.exports= new Product_Controller