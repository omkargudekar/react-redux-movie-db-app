import _ from 'lodash';

class Loader{

    constructor(loaderConfig){

        this._axiosInstance = loaderConfig.axiosInstance;
    }

    _axiosInstance=null;

    _fetch = (path)=>{
        return this._axiosInstance.get(path);
    }

    loadData = async (path) => {
        try {
            let response = await this._fetch(path);
            return response;
            
        } catch (err) {
            throw err
        }
    }
    

}

export default Loader;