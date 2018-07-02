import React from 'react';

import ParentHOC from '../../hoc/ParentHOC/ParentHOC'
import Form from '../UI/Form/Form'
import FormControlsGroup from '../UI/FormControlsGroup/FormControlsGroup'
import FormControl from '../UI/FormControl/FormControl'
import Label from '../UI/Label/Label'
import InputText from '../UI/InputText/InputText'
import InputPassword from '../UI/InputPassword/InputPassword'
import Button from '../UI/Button/Button'


const LoginForm = props => {
    return (
        <ParentHOC>
            <Form>
                <FormControlsGroup>
                    <FormControl>
                        <Label>Username</Label>
                    </FormControl>
                    <FormControl>
                        <InputText/>
                    </FormControl>    
                </FormControlsGroup>
                <FormControlsGroup>
                    <FormControl>
                        <Label>Password</Label>
                    </FormControl>
                    <FormControl>
                        <InputPassword />
                    </FormControl>
                </FormControlsGroup>
                <FormControlsGroup>
                    <FormControl>
                        <Button>Reset</Button>
                    </FormControl>
                    <FormControl>
                        <Button>Login</Button>
                    </FormControl>
                </FormControlsGroup>
            </Form>
        </ParentHOC>
    );
};



export default LoginForm;