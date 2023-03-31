
import axios from 'axios';


export default async function sendRequest(method:any, url:any, data?:any) {
//   const token = `Bearer ${store.getState().user.token}`;
  const baseUrl = 'http://localhost:5000';

  try {
    return await axios({
      method,
      url: `${baseUrl}${url}`,
      data,
    //   headers: {
    //     Authorization: token,
    //   },
    });
  } catch (err:any) {
    const errRes = err.response;
    

    return errRes;
  }
}