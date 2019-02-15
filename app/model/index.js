
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const IndexScheam = new Schema({
        index:{ type:String },
        name:{ type:String },
        updatedTime:{
            type:Number,
            default:d.getTime()
        },
        


    })

    return mongoose.model('Index',IndexScheam,'index')
}