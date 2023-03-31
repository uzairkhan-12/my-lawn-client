import sendRequest from "@/utils/useAxios";
import { ADD_SERVICE, GET_SERVICES } from "./types";
import { useRouter } from "next/router";


export const getServices = () => async (dispatch:any) => {
  
    try {
        const res = await sendRequest('GET', '/services/get-all-services');
      console.log({res})
      dispatch({
        type: GET_SERVICES,
        payload: res,
      });
    } catch (err) {
        console.log(err)
    }
  };

  export const addService = (service:any,router:any) =>async (dispatch:any) => {
    try{
      const res = await sendRequest('POST','/services/add-service',service)
      dispatch({
        type:ADD_SERVICE,
        payload:res.data
      })
      if(res.statusText === "Created"){
        router.push('/services')
      }
    }
    catch(err){
      console.log(err)
    }
  }