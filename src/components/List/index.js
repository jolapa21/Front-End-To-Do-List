import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import { deleteToDo } from '../../store/actions/deleteToDo';

function List({ulClassName, liClassName, delClassName, alertClassName}) {
  const toDoList = useSelector(state => state.toDo.list);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const editTodo = (id) => {
    setEditId(id);
    setEditText(toDoList.find(todo => todo.id === id).name);
  };

  const handleEditChange = (event) => {
    setEditText(event.target.value);
  };

  const saveEdit = (id) => {
    dispatch({type: 'EDIT_TODO', payload: {id: id, name: editText}});
    setEditId(null);
    setEditText('');
  };

  return toDoList.length > 0 ? (
    <ul className={ulClassName}>
      {toDoList.map(({id, name}) => (
        <li key={id} className={`${liClassName} ${name.isDeleted ? 'deleted' : ''}`}>
          {editId === id ? (
            <input type="text" value={editText} onChange={handleEditChange} onBlur={() => saveEdit(id)} />
          ) : (
            <span onClick={() => editTodo(id)}>{name}</span>
          )}
          <Button onClick={() => dispatch(deleteToDo(id))} className={delClassName}>Delete</Button>
        </li>
      ))}
    </ul>
  ) : (
    <div className={alertClassName} role="alert">
    </div>
  )
}

export default List;