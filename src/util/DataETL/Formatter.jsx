import React from 'react';
import _ from 'lodash'

class Renderer {

    constructor(customRenderFunctionMap){
        this._renderFunctionMap = _.merge(customRenderFunctionMap, this._defaultRenderFunctionMap  )
    }

    _defaultRenderFunctionMap = {
        default: (key, value, index) => {
            return (
                <p key={'p_' + index + '_' + key} >
                    <span style={{ fontWeight: 'bold' }}>
                        {key}
                    </span>
                    <span style={{ paddingRight: '5px' }}></span>
                    <span style={{ textOverflow: 'ellipsis' }}>
                        {value}
                    </span>
                </p>
            )
        }
    }
    _renderFunctionMap = {}

    _getRendererFunction = (key) => {
        return (_.isUndefined(this._renderFunctionMap[key]) ? this._renderFunctionMap['default'] : this._renderFunctionMap[key]);
    }

    _renderItem = (item, index) => {
        let rendered = {};
        _.forEach(item, (value, key) => {
                let renderFunction = this._getRendererFunction(key);
                rendered[key]=renderFunction(key, value, index);
        });
        return rendered
    }
    _renderItems = (items) => {
        var rendered=[]
        _.forEach(items, (value, index) => {
            let renderedItem=this._renderItem(value,index);
            renderedItem={...value, rendered: renderedItem}
            this._bindFunctions(renderedItem);
            rendered.push(renderedItem);
        });

        return rendered;
    }
    _getAllRendered=function(){
        let all=[];
        _.forEach(this.rendered,(val,key)=>{
            all.push(val);
        })
        return all;
    }
    _getRenderedHavingKeys = function(keys) {
        let all = [];
        _.forEach(keys, (key) => {
            all.push(this.rendered[key]);
        })
        return all;
    }
    _bindFunctions(data){
        data['getAllRendered'] = this._getAllRendered;
        data['getRenderedHavingKeys'] = this._getRenderedHavingKeys;
    }

    render = (data) => {
        let rendered = _.noop();
        if(_.isArray(data)){
            rendered = this._renderItems(data);
        }else{
            rendered = this._renderItem(data);
            rendered = { ...data, rendered:rendered};
            this._bindFunctions(rendered);

        }
        return rendered
    }
}

export default Renderer;