import axios from 'axios';

// export function getPayload(){
//     return localStorage.getItem('payload'),
// } 1:57:32

export default function () {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: localStorage.getItem('payload'),
        }
    })
}