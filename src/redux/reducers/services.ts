import services from "@/pages/services";
import { ADD_SERVICE, GET_SERVICES } from "../actions/types";

const initialState = {
    services: [],
};
function servicesReducer(state= initialState,action:any){
    const {type,payload} = action
    switch(type) {
        case GET_SERVICES:
        return {
            ...state,
            services:payload.data
        }
        case ADD_SERVICE:
            return{
                ...state,
                services: [...state.services,payload]
            }
        default:
            return state
        
    }
}

export default servicesReducer