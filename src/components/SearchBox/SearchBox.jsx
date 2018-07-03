import React, { Component } from 'react';
import Form from '../UI/Form/Form'
import FormControlsGroup from '../UI/FormControlsGroup/FormControlsGroup'
import FormControl from '../UI/FormControl/FormControl'
import InputText from '../UI/InputText/InputText'
import Button from '../UI/Button/Button'


class SearchBox extends Component {
    render() {
        return (
            <Form>
                <FormControlsGroup>
                    <FormControl>
                        <InputText></InputText>   
                    </FormControl>
                    <FormControl>
                        <Button>Search</Button>
                    </FormControl>
                </FormControlsGroup> 
            </Form>
        );
    }
}

export default SearchBox;