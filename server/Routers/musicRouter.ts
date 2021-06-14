
import Song from '../models/song';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { ISongPayload } from '../interfaces';

export const musicRouter = express.Router();
musicRouter.use(cors());

musicRouter.get("/", async (req: Request, res: Response) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

musicRouter.post("/", async (req: Request, res: Response) => {
    const songPayload: ISongPayload = {
        ...req.body
    }
    const song = new Song(songPayload);
    try {
        const newSong = await song.save();
        res.status(200).json(newSong);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


musicRouter.patch("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        let song = await Song.findById(id);
        if (!song) {
            res.status(404).json({ message: "Not Found" })
        } else {
            await Song.findByIdAndUpdate(id, req.body, {
                useFindAndModify: true
            })
            song = await Song.findById(id);
            res.json(song);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

musicRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id);
        if (!song) {
            res.status(404).json({ message: "Not Found" });
        } else {
            await song.remove();
            res.json({ message: "Song Deleted." })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})