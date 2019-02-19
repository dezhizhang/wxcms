
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const CategoryProductScheam = new Schema({
        category_product_id:{ type:String },
        category_product_url:{ type:String },
        description:{ type:String },
        updatedTime:{
            type:Number,
            default:d.getTime()
        },
        


    })

    return mongoose.model('CategoryProduct',CategoryProductScheam,'categoryProduct')
}