import React,{Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';

class App extends Component{
    render(){
        return(
            <div classNames='App'>
                <Form inline>
                    <h2>Input Your Birthday!</h2>
                    <FormControl type="date">
                    </FormControl>
                    {" "}
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;
