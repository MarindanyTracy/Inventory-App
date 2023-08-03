import axios from 'axios';
import { toast } from 'react-toastify';

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/users/register`,userData, {withCredentials: true});

    if(response.statusText === "OK") {
      toast.success("User Registered Successfully")
    }
  } catch (error) {
    
  }
}