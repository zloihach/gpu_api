const sequelize = require('../db_con')

const {DataTypes}=require('sequelize')

const Product = sequelize.define('product',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    brand:{type: DataTypes.STRING},
    model:{type: DataTypes.STRING},
    price:{type: DataTypes.INTEGER}
})

module.exports ={
    Product
}