import axios from 'axios';

// export function getPayload(){
//     return localStorage.getItem('payload'),
// } 1:57:32 (logout 1:59:48) https://www.youtube.com/watch?v=vhuYtM9rp34&feature=youtu.be

export default function () {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: localStorage.getItem('payload'),
            Accept: "application/json, text/plain, */*",
            ContentType: "application/json;charset=utf-8",
        }
    })
}