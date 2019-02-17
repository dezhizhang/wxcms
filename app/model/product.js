module.exports = app => {
    const mongoose =app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ProductScheam = new Schema({
        product_url:{ type:String },
        name:{ type:String },
        price:{ type:Number },
        add_time:{
            type:Number,
            default:d.getTime()
        }
    })

    return mongoose.model('Product',ProductScheam,'product');
}