import * as React from 'react';

export enum ERequestStatus {
    IDLE = 'IDLE',
    PENDING = "PENDING",
    SUCCESS = 'SUCCESS',
    ERROR = "ERROR"
}

interface IAsyncData<T> {
    status: ERequestStatus;
    error: any;
    data: T | null;
}

export function useAsyncData<T = any>(){
    const [ state, setState ] = React.useState<IAsyncData<T>>({
        status: ERequestStatus.IDLE,
        data: null,
        error: null,
    });

    function call(serviceCall:()=>Promise<T>){
        setState({
            status: ERequestStatus.PENDING,
            data: null,
            error: null
        })

        serviceCall()
        .then((data)=>{
            setState({
                status: ERequestStatus.SUCCESS,
                data,
                error: null
            })
        })
        .catch((err)=>{
            setState({
                status: ERequestStatus.ERROR,
                data:null,
                error: err
            })
        })
    }
    
    return {state, call};
}

