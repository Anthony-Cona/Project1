import axios from 'axios'
import { environment } from '../envirornment'

export const project0Client = axios.create({

    baseURL:environment.project0BaseUrl,//name network address with no uri
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})