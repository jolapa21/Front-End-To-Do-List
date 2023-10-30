import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import List from '../../components/List';
import { addToDo } from '../../store/actions/toDo';

function App() {
    const [input, setInput] = useState('');
    const [disabled, setDisabled] = useState(true);

    const toDoList = useSelector(state => state.toDo.list);
    const dispatch = useDispatch();

    function submit() {
        dispatch(addToDo(input));
        setInput('');
        setDisabled(true);
    }

    function handleOnChange (event) {
        if(event.target.value.length !== 0){
            this.setState({input: event.target.value, disabled: false});
        } else {
            this.setState({input: event.target.value, disabled: true});
        }
    };

    return (
        <>
            <h1 className='mt-5 mb-3'>What's the plan for today?</h1>
            {this.state.disabled}
            <Input onChange={handleOnChange} value={input} className="form-control" />
            <Button onClick={submit} className="btn btn-primary container my-3" disabled={disabled}>Add</Button>
            
            <List
                toDoList={toDoList}
                ulClassName="list-group mt-5 mb-3"
                liClassName="list-group-item d-flex justify-content-between align-items-center"
                delClassName="btn btn-danger"
                alertClassName="alert alert-dark"
            />
        </>
    )
}

export default App;