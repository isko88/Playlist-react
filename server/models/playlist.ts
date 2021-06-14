import moment from "moment";
import mongoose, { Schema } from "mongoose";


const playlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        required: true,
        default:moment().format("DD-MM-yyyy")
    },
    author: {
        type: String,
        required: true
    },
    songs: [
        {
            type: String,
            required: true
        }
    ]
})

export default mongoose.model("Playlist", playlistSchema);