import Axios from 'axios';
const createService=()=>{
    return Axios.create({
        baseURL:'https://reqres.in/api/login'
    })
};
export default createService()

// {
//     "email": "peter@klaven",
//     "password": "cityslicka"
// }