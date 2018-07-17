import _ from 'lodash'

class Transformer {
    
    constructor(customTransformFunctionMap) {
        this._transformFunctionMap = _.merge(customTransformFunctionMap, this._defaultTransformFunctionMap)
    }

    _defaultTransformFunctionMap = {
        default: (key, value) => {
            let newObj={};
            newObj[key] = value
            return newObj;
        }
    }
    _transformFunctionMap = {}

    _getTransformFunction = (key) => {
        return (_.isUndefined(this._transformFunctionMap[key]) ? this._transformFunctionMap['default'] : this._transformFunctionMap[key]);
    }

    _transformItem = (item, _index) => {
        let transformed = {};
        _.forEach(item, (value, key) => {
            let transformFunction = this._getTransformFunction(key);
             transformed=_.merge(transformed, transformFunction(key, value)) ;
        });
        return transformed
    }

    _transformItems = (items) => {
        var transformed = []
        _.forEach(items, (value, index) => {
            let transformedItem = this._transformItem(value, index);
            transformed.push(transformedItem);
        });
        return transformed;
    }

    trasnform = (data) => {

        let transformed = _.noop();
        if (_.isArray(data)) {
            transformed = this._transformItems(data);
        } else {
            transformed = this._transformItem(data);
        }
        return transformed

    }
}

export default Transformer;