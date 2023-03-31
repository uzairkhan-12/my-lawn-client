import services from "@/pages/services";
import { ADD_PACKAGE, ADD_SERVICE, GET_PACKAGES, GET_SERVICES } from "../actions/types";

const initialState = {
    packages: [],
};

function servicesReducer(state= initialState,action:any){
    const {type,payload} = action
    switch(type) {
        case GET_PACKAGES:
        return {
            ...state,
            packages:payload.data
        }
        case ADD_PACKAGE:
            return{
                ...state,
                packages: [...state.packages,payload]
            }
        default:
            return state
        
    }
}

export default servicesReducer