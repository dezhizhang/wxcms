
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const BannerSchema = new Schema({
        banner_url:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        }


    })

    return mongoose.model('Banner',BannerSchema,'banner')
}