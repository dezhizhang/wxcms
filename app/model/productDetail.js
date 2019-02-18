module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ProductDetailSchema = new Schema({
        detail_url:{ type:String },
        product_id:{  type:Schema.Types.Mixed },
        name:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        }

    })
    return mongoose.model('ProductDetail',ProductDetailSchema,'productDetail');
}