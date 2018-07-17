import Loader from './Loader'
import Renderer from './Formatter'
import Transformer from './Transformer'

class DataLoader {


    constructor(config){
        this._loaderInstance = new Loader(config.loader);
        this._rendererInstance =new Renderer(config.renderer);
        this._transformerInstance = new Transformer(config.transformer);
    }
    _loaderInstance=null;
    _rendererInstance=null;
    _transformerInstance=null;

    load = async(path) =>{
        try{
            let response = await this._loaderInstance.loadData(path);
            console.log(response)
            let data=this._transformerInstance.trasnform(response.data);
            data= this._rendererInstance.render(data);
            return data;
        }
        catch(err){
            throw err
        }
    }
};

export default DataLoader;