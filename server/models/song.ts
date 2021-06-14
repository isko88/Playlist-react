import mongoose, { Schema } from "mongoose";

const songSchema = new Schema({
    name: {
        type: String,
        requried: true
    },
    artists: {
        type: String,
        required: true
    },
    uploadDate: {
        type: String,
        requried: true
    },
    mediaUrl: {
        type: String,
        required: true
    }
})


export default mongoose.model("Song", songSchema);