module.exports = app => {
    const mongoose =app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ProductSchema = new Schema({
        product_url:{ type:String },
        product_id:{ type:Schema.Types.Mixed },
        name:{ type:String },
        count:{ type:Number },
        price:{ type:Number },
        add_time:{
            type:Number,
            default:d.getTime()
        }
    })

    return mongoose.model('Product',ProductSchema,'product');
}