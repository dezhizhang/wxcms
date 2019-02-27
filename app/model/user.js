module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const UserSchema = new Schema({
        mobile:{ type:String },
        code:{ type:String },
    })

    return mongoose.model('User',UserSchema,'user')
}