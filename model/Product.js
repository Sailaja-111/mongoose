const mongoose=require("mongoose")
//Schema creation
const productSchema= new mongoose.Schema({
    p_id: Number,
    p_name: String,
    p_cost: Number
})
module.exports=mongoose.model("Product",productSchema)