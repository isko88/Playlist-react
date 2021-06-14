import { IPlaylist } from "./playlistType";
import { ISong } from "./songType";

 interface IState {
    playlist:IPlaylist[],
    song:ISong[]
}


export default IState;