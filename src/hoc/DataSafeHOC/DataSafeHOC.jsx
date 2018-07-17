import React, { Component } from 'react';
import ErrorModal from '../../components/ErrorModal/ErrorModal'



const DataSafeHOC=(WrapperComponent,dataloader)=>{
    return class extends Component {
        state={error:false}
        reqInterceptor= null;
        responseInterceptor= null;
        axiosInstance=dataloader._loaderInstance._axiosInstance

        componentWillMount(){
            this.reqInterceptor= this.axiosInstance.interceptors.request.use(function (config) {
                return config;
            }, function (error) {
                ErrorModal.show('Error While Loading Data', 'Please check console')
                this.setState({error:true})
                return Promise.reject(error);
            });

            this.responseInterceptor= this.axiosInstance.interceptors.response.use(function (response) {
                return response;
            }, function (error) {
                ErrorModal.show('Error While Loading Data', 'Please check console')
                this.setState({ error: true })
                return Promise.reject(error);
            });
        }
        componentWillUnmount() {
            this.axiosInstance.interceptors.request.eject(this.reqInterceptor);
            this.axiosInstance.interceptors.response.eject(this.responseInterceptor);

        }
        render() {
            let target=null
            if(!this.state.error){
                target = <WrapperComponent {...this.props} />
            }
            return (
                <div>
                    {target}
                </div>
            );
        }
        
    }
}


export default DataSafeHOC;