import axios from "axios";
import { IPlaylist } from "../types/playlistType";
import { PLAYLIST_ACTION_TYPES } from "./actionTypes";



export interface IActionPlaylistsGet {
    type:PLAYLIST_ACTION_TYPES.GET_PLAYLISTS,
    payload:IPlaylist
}

export interface IActionPlaylistAdd {
    type:PLAYLIST_ACTION_TYPES.ADD_PLAYLIST,
    payload:IPlaylist
}

export interface IActionPlaylistDelete {
    type:PLAYLIST_ACTION_TYPES.DELETE_PLAYLIST,
    payload:String
}

export interface IActionPlaylistUpdate {
    type:PLAYLIST_ACTION_TYPES.UPDATE_PLAYLIST,
    payload:String
}


export type IActionPlaylist = IActionPlaylistsGet | IActionPlaylistAdd | IActionPlaylistDelete | IActionPlaylistUpdate



export const getPlaylists = () => {
    return async (dispatch: any) => {
        return await axios.get('http://localhost:8000/playlists').then(
            ({ data }) => dispatch({ type: PLAYLIST_ACTION_TYPES.GET_PLAYLISTS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addPlaylist = (playlist:IPlaylist) => {
    return (dispatch: any) => {
        return axios.post('http://localhost:8000/playlists',playlist).then(
            ({ data }) => dispatch({ type: PLAYLIST_ACTION_TYPES.ADD_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    };
};

export const UpdatePlaylist = (playlistID : String) => {
    return (dispatch: any) => {
        return axios.patch(`http://localhost:8000/playlists/${playlistID}`).then(
            ({ data }) => dispatch({ type: PLAYLIST_ACTION_TYPES.UPDATE_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    };
};

export const DeletePlaylist = (playlistID : String) => {
    return (dispatch: any) => {
        return axios.delete(`http://localhost:8000/playlists/${playlistID}`).then(
            ({ data }) => dispatch({ type: PLAYLIST_ACTION_TYPES.DELETE_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    };
};


