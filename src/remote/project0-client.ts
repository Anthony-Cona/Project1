import axios from 'axios'
import { environment } from '../envirornment'

//set up our base environment for our webflicks connection
export const project0Client = axios.create({
    baseURL:environment.project0BaseUrl, //the base network address with no URI's on 
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})