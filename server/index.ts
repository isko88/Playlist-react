import mongoose from 'mongoose'
import express from 'express';
import cors from 'cors';
import { ROUTES } from './routes';

const uri = "mongodb+srv://isko88:isko88@cluster0.y9wmk.mongodb.net/playlist?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});


const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Database Connected....."))


export const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;

ROUTES.forEach(({ path, router }) => {
    app.use(path, router)
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});