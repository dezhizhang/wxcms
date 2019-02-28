
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let d = new Date();

    const ListSchema = new Schema({
        bizNo:{ type:String },
        productLogo:{type:String },
        productName:{ type:String },
        status:{ type:String },
        applyAmt:{ type:String }
    })

    return mongoose.model('List',ListSchema,'list')
}