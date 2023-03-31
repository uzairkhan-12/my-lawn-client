import { SET_ERROR,REMOVE_ERROR } from "./types"

export const setAlert = (alertMessage:any,alertType:any,timeout = 2000) => (dispatch:any) => {
    dispatch({
        type:SET_ERROR,
        payload:{alertMessage,alertType}
    })
    setTimeout(() => 
    dispatch({
        type:REMOVE_ERROR,
    }),timeout)
}