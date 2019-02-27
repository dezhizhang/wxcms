
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ListSchema = new Schema({
        avatar:{ type:String },
        user_name:{ type:String },
        new_message:{ type:String },
        message_number:{type:Number },
        add_time:{
            type:Number,
            default:d.getTime()
        }


    })

    return mongoose.model('List',ListSchema,'list')
}