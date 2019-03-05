
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const CardSchema = new Schema({
        name:{ type:String },
        idNo:{ type:String },
        idCardImage:{ type:String },
        idCardImageBack:{ type:String },
     
    })

    return mongoose.model('Card',CardSchema,'card')
}