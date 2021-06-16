import { PLAYLIST_ACTION_TYPES, SONG_ACTION_TYPES } from "../actions/actionTypes";
import { IActionSong } from "../actions/songActions";
import { ISong } from "../types/songType";
import { IPlaylist } from "../types/playlistType";
import { IActionPlaylist } from "../actions/studentActions";

const SONG_INITIAL_STATE : ISong[] = [
    {
        _id:"",
        name:"",
        artists:"",
        uploadDate:"",
        mediaUrl:""
    }
]



export const songReducer = (state = SONG_INITIAL_STATE, action: IActionSong) => {
    switch (action.type) {
        case SONG_ACTION_TYPES.GET_SONGS:
            return action.payload;
        case SONG_ACTION_TYPES.ADD_SONG:
            return [
                ...state,
                action.payload
            ]
        case SONG_ACTION_TYPES.EDIT_SONG:

            return {

            }
        case SONG_ACTION_TYPES.DELETE_SONG:

            break;
        default:
            return state;
    }
}

const PLAYLIST_INITIAL_STATE :IPlaylist[] = [
    {
        _id:"",
        name:"",
        creationDate:"",
        author:"",
        songs:[]
    }
]


export const playlistReducer = (state = PLAYLIST_INITIAL_STATE, action: IActionPlaylist) => {
    switch (action.type) {
        case PLAYLIST_ACTION_TYPES.GET_PLAYLISTS:
                return action.payload;
        case PLAYLIST_ACTION_TYPES.ADD_PLAYLIST:

            break;
        case PLAYLIST_ACTION_TYPES.UPDATE_PLAYLIST:

            break;
        case PLAYLIST_ACTION_TYPES.DELETE_PLAYLIST:

            break;
        default:
            return state;
    }
}