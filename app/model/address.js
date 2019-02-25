
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const AddressSchema = new Schema({
        user_id:{ type:String },
        name:{ type:String },
        mobile:{ type:String },
        total_detail:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        }

    });

    return mongoose.model('Address',AddressSchema,'address');


}