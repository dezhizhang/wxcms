
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ThemeSchema = new Schema({
        theme_url:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        }


    })

    return mongoose.model('Theme',ThemeSchema,'theme')
}