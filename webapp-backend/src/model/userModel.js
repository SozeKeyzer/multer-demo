import mongoose ,{ Schema } from "mongoose";

const userSchema = new Schema({
    email : {
        type: String
    },
    password: {
        type : String
    }
});

export default mongoose.model('User',userSchema);