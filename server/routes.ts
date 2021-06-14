import { musicRouter } from "./Routers/musicRouter";
import { playlistRouter } from "./Routers/playlistRouter";

export const ROUTES = [
    {
        path:'/songs',
        router: musicRouter
    },
    {
        path:"/playlists",
        router:playlistRouter
    }
];