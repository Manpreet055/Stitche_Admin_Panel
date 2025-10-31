import axios from "axios"
import handleApiError from "./handleApiError"
const uri = import.meta.env.VITE_BASE_URI


export const fetchOrders = async () =>{
    try{
        const response = await axios.get(`${uri}/orders`);
        const data = response.data.orders;
        return data;
    }catch(err){
        handleApiError(err)
    }
}
