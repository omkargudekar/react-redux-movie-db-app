import Axios from 'axios';
const createService = () => {
    return Axios.create({
        baseURL: 'http://www.omdbapi.com/',
        params:{
            apikey:35448854
        }
    })
};
export default createService()