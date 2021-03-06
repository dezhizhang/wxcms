
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ThemeProductSchema = new Schema({
        product_id:{ type:Schema.Types.Mixed },
        name:{ type:String },
        product_url:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        }


    })

    return mongoose.model('ThemeProduct',ThemeProductSchema,'themeProduct')
}