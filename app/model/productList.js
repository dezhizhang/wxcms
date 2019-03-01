module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ProductListSchema = new Schema({

        productNo:{ type:String },
        productLogo:{type:String },
        productName:{ type:String },
        limit:{ type:String },
        term:{ type:Number },
        rate:{ type:String },
        productFeatures:{ type:String }
    })

    return mongoose.model('ProductList',ProductListSchema,'productList')

    //融资平台
}