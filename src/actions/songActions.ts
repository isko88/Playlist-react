import axios from "axios";
import { IClass } from "../types/ClassType";
import { Class_ACTION_TYPES } from "./actionTypes";

export interface IActionClasssGet {
    type:Class_ACTION_TYPES.GET_ClassS,
    payload:IClass[]
}

export interface IActionClassAdd {
    type:Class_ACTION_TYPES.ADD_Class,
    payload:IClass
}

export interface IActionClassDelete {
    type:Class_ACTION_TYPES.DELETE_Class,
    payload:String
}

export interface IActionClassEdit {
    type:Class_ACTION_TYPES.EDIT_Class,
    payload:String
}


export type IActionClass = IActionClasssGet | IActionClassAdd | IActionClassDelete | IActionClassEdit




export const getClasss = () => {
    return (dispatch: any) => {
        return axios.get('http://localhost:8000/Classs').then(
            ({ data }) => dispatch({ type: Class_ACTION_TYPES.GET_ClassS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addClass = (Class:IClass) => {
    return (dispatch: any) => {
        return axios.post('http://localhost:8000/Classs',Class).then(
            ({ data }) => dispatch({ type: Class_ACTION_TYPES.ADD_Class, payload: data }),
            err => console.log(err)
        );
    };
};

export const editClass = (ClassID : String) => {
    return (dispatch: any) => {
        return axios.patch(`http://localhost:8000/Classs/${ClassID}`).then(
            ({ data }) => dispatch({ type: Class_ACTION_TYPES.EDIT_Class, payload: data }),
            err => console.log(err)
        );
    };
};

export const deleteClass = (ClassID : String) => {
    return (dispatch: any) => {
        return axios.delete(`http://localhost:8000/Classs/${ClassID}`).then(
            ({ data }) => dispatch({ type: Class_ACTION_TYPES.DELETE_Class, payload: data }),
            err => console.log(err)
        );
    };
};
