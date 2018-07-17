import { Modal } from 'antd';

const ErrorModal = () => {
    return{
        show: (errorTitle, errorMessage)=>{
            Modal.error({
                title: errorTitle,
                content: errorMessage,
            });
        }
    }
};

export default ErrorModal();



