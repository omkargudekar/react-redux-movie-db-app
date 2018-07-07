import React,{Component} from 'react';

const AsyncComponent = (importFn) => {
    return class extends Component{
        
        state={
            component:null
        }
        componentDidMount(){
            importFn().then((cmp)=>{
                this.setState({
                    component:cmp.default
                })
            })
        }
        render(){
            let C = this.state.component;
            return C?<C {...this.props}></C>:null
        }
    }
};

export default AsyncComponent;