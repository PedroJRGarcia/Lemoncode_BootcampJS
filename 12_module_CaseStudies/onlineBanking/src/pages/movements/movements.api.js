import * as Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsList = id => {
    return Axios.get(`${url}/${id}`).then(({ data }) => data);
}

// export const getMovementsList = () => {
//     return fetch(url).then(({ data }) => data);
// }

// export const getMovementsList = () => {
//     return Axios.get(url).then((res)=>{
//     return res.data
//     }).catch(err=>console.log(err))
// }