module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const CategoryScheam = new Schema({
        name:{ type:String },
        category_id:{ type:String },
        updatedTime:{
            type:Number,
            default:d.getTime()
        },
        


    })

    return mongoose.model('Category',CategoryScheam,'category')
}