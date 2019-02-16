
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const LoginSchema = new Schema({
        userName:{ type:String },
        password:{ type:String },
        email:{ type:String },
        mobile:{type:String },
        type:{type:String },
        confirm:{ type:String },
        captcha:{ type:String },
        prefix:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        }


    })

    return mongoose.model('Login',LoginSchema,'login')
}