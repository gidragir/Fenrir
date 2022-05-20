/*eslint-disable */
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/"

class Functions {

  sendReq(method) {
    let result = axios.get(API_URL + method); 
    return result;
  }

};

export default new Functions();