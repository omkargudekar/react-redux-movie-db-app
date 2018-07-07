import React from 'react';
import Classes from './InputText.css'
class InputText extends React.Component {
    render(){
        return (
            <input className={Classes['inputText']} type="text" {...this.props} />
        );

    } 
}
export default InputText;