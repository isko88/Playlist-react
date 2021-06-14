import Playlist from '../models/playlist';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { IPlaylistPayload } from '../interfaces';

export const playlistRouter = express.Router();
playlistRouter.use(cors());

playlistRouter.get("/", async (req: Request, res: Response) => {
    try {
        const playlists = await Playlist.find();
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

playlistRouter.post("/", async (req: Request, res: Response) => {
    const playlistPayload: IPlaylistPayload = {
        ...req.body
    }
    const playlist = new Playlist(playlistPayload);
    try {
        const newPlaylist = await playlist.save();
        res.status(200).json(newPlaylist);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


playlistRouter.patch("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        let playlist = await Playlist.findById(id);
        if (!playlist) {
            res.status(404).json({ message: "Not Found" })
        } else {
            await Playlist.findByIdAndUpdate(id, req.body, {
                useFindAndModify: false
            })
            playlist = await Playlist.findById(id);
            res.json(playlist);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

playlistRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findById(id);
        if (!playlist) {
            res.status(404).json({ message: "Not Found" });
        } else {
            await playlist.remove();
            res.json({ message: "Playlist Deleted." })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})