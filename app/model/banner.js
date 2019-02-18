
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const BannerSchema = new Schema({
        product_url:{ type:String },
        banner_id:{ type:Schema.Types.Mixed },
        count:{ type:Number },
        name:{ type:String },
        price:{ type:Number },
        add_time:{
            type:Number,
            default:d.getTime()
        }


    })

    return mongoose.model('Banner',BannerSchema,'banner')
}