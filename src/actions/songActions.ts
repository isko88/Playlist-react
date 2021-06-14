import axios from "axios";
import { ISong } from "../types/songType";
import { SONG_ACTION_TYPES } from "./actionTypes";

export interface IActionSongsGet {
    type:SONG_ACTION_TYPES.GET_SONGS,
    payload:ISong[]
}

export interface IActionSongAdd {
    type:SONG_ACTION_TYPES.ADD_SONG,
    payload:ISong
}

export interface IActionSongDelete {
    type:SONG_ACTION_TYPES.DELETE_SONG,
    payload:String
}

export interface IActionSongEdit {
    type:SONG_ACTION_TYPES.EDIT_SONG,
    payload:String
}


export type IActionSong = IActionSongsGet | IActionSongAdd | IActionSongDelete | IActionSongEdit




export const getSongs = () => {
    return (dispatch: any) => {
        return axios.get('http://localhost:8000/songs').then(
            ({ data }) => dispatch({ type: SONG_ACTION_TYPES.GET_SONGS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addSong = (song:ISong) => {
    return (dispatch: any) => {
        return axios.post('http://localhost:8000/songs',song).then(
            ({ data }) => dispatch({ type: SONG_ACTION_TYPES.ADD_SONG, payload: data }),
            err => console.log(err)
        );
    };
};

export const editSong = (songID : String) => {
    return (dispatch: any) => {
        return axios.patch(`http://localhost:8000/songs/${songID}`).then(
            ({ data }) => dispatch({ type: SONG_ACTION_TYPES.EDIT_SONG, payload: data }),
            err => console.log(err)
        );
    };
};

export const deleteSong = (songID : String) => {
    return (dispatch: any) => {
        return axios.delete(`http://localhost:8000/songs/${songID}`).then(
            ({ data }) => dispatch({ type: SONG_ACTION_TYPES.DELETE_SONG, payload: data }),
            err => console.log(err)
        );
    };
};
