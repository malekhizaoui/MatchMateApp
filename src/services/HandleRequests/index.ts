
import axios from 'axios';
import BaseUrl from '../BaseUrl';
// interface handleRequestsProps {
//   method: string;
//   end_point: string;
// }

export const handleRequests = async (
  method: string,
  end_point: string,
  requestBody?: object,
) => {
  let response = null;

  if (method === 'get') {    
    
    response = await axios
      .get(`${BaseUrl}/${end_point}`)
      .then(res => res.data)
      .catch(erreur => console.log(erreur));
  } else if (method === 'post') { 
   
    response = await axios
      .post(`${BaseUrl}/${end_point}`, requestBody)
      .then(res => res)
      .catch(erreur => console.log("Post Error",erreur));
  } else if (method === 'put') {
    console.log("dsdsdsdsds");
    
    response = await axios
      .put(`${BaseUrl}/${end_point}`, requestBody)
      .then(res => res)
      .catch(erreur => console.log("put error",erreur));
  } else if (method === 'delete') {
    response = await axios.delete(`${BaseUrl}/${end_point}`);
  }  
  return response;
};
