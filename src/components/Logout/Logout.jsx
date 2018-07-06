import React from 'react';
import { connect } from 'react-redux';
import LogoutAction from '../../store/actions/LogoutAction'

class Logout extends React.Component {
    componentDidMount(){
        setTimeout(()=>{
            this.props.logoutAction();
        },2000);
    }
    render(){
        return (<span>You will logged out from the MDB now.</span>);
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutAction: () => dispatch(LogoutAction())
    }
}
export default connect(null, mapDispatchToProps)(Logout);