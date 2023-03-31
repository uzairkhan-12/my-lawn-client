import { SET_ERROR, REMOVE_ERROR } from "../actions/types";


const initialState = {
    alertMessage:'',
    alertType:''
}

function alertReducer(state=initialState,action:any){
const {type,payload} = action
switch(type){
    case SET_ERROR:
    return{
        ...payload
    }
    case REMOVE_ERROR:
        return{
            ...initialState
        }
    default:
    return state
}
}

export default alertReducer