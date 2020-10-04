import axios from 'axios';

export default function getData () {
    const apiURL = "http://localhost:5000/query";

    const axiosOptions = {
        url: apiURL,
        method: 'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json'
        },
        data :{
            query:1
        }
    }
    const res =  axios(axiosOptions)
    .then(response => response.data)

    // var result = formatoptions(res);

    return res;
}