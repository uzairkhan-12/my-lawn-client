import sendRequest from "@/utils/useAxios";
import { ADD_PACKAGE, GET_PACKAGES } from "./types";

export const getPackages = () => async (dispatch:any) => {
  
    try {
        const res = await sendRequest('GET', '/packages/get-all-pkgs');
      console.log({res})
      dispatch({
        type: GET_PACKAGES,
        payload: res,
      });
    } catch (err) {
        console.log(err)
    }
  };
  export const dispatchPackage = (packages:any, router:any) =>async (dispatch:any) => {
    try{
        const res = await sendRequest('POST','/packages/create-package',packages)
      dispatch({
        type:ADD_PACKAGE,
        payload:res.data
      })
      if(res.statusText === "Created"){
        router.push('/packages')
      }
    }
    catch(err){
        console.log(err)
    }
  }