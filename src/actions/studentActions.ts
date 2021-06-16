import axios from "axios";
import { IStudent } from "../types/StudentType";
import { Student_ACTION_TYPES } from "./actionTypes";



export interface IActionStudentsGet {
    type:STUDENT_ACTION_TYPES.GET_STUDENTS,
    payload:IStudent
}

export interface IActionStudentAdd {
    type:STUDENT_ACTION_TYPES.ADD_STUDENT,
    payload:IStudent
}

export interface IActionStudentDelete {
    type:STUDENT_ACTION_TYPES.DELETE_STUDENT,
    payload:String
}

export interface IActionStudentUpdate {
    type:STUDENT_ACTION_TYPES.UPDATE_STUDENT,
    payload:String
}


export type IActionStudent = IActionStudentsGet | IActionStudentAdd | IActionStudentDelete | IActionStudentUpdate



export const getStudents = () => {
    return async (dispatch: any) => {
        return await axios.get('http://localhost:8000/students').then(
            ({ data }) => dispatch({ type: Student_ACTION_TYPES.GET_StudentS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addStudent = (Student:IStudent) => {
    return (dispatch: any) => {
        return axios.post('http://localhost:8000/Students',Student).then(
            ({ data }) => dispatch({ type: Student_ACTION_TYPES.ADD_Student, payload: data }),
            err => console.log(err)
        );
    };
};

export const UpdateStudent = (StudentID : String) => {
    return (dispatch: any) => {
        return axios.patch(`http://localhost:8000/Students/${StudentID}`).then(
            ({ data }) => dispatch({ type: Student_ACTION_TYPES.UPDATE_Student, payload: data }),
            err => console.log(err)
        );
    };
};

export const DeleteStudent = (StudentID : String) => {
    return (dispatch: any) => {
        return axios.delete(`http://localhost:8000/Students/${StudentID}`).then(
            ({ data }) => dispatch({ type: Student_ACTION_TYPES.DELETE_Student, payload: data }),
            err => console.log(err)
        );
    };
};


