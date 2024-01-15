import {useState} from "react";
import {editTask, toggleDoneTask, deleteTask} from "../app/slices/tasksSlice.js";
import { useDispatch } from 'react-redux';

function ListItem({ 
    item,
    setEditMode, 
    editMode, 
    editedId, 
    setEditedId 
  }) {
  const [editedTask, setEditedTask] = useState(item.task); 
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setEditedTask(event.target.value); 
  };

  const handleEdit = () => {
    setEditMode(true);
    setEditedId(item.id);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedId(null);
    setEditedTask(item.task);
  };

  const handleSave = () => {
    dispatch(editTask(item.id));
    setEditMode(false);
    setEditedId(null);
  };

  return (
    <>
      <input
        type="text"
        value={editedTask}
        onChange={handleInputChange}
        disabled={editedId !== item.id}
      ></input>
      {editedId === item.id ? 
        <>
          <button onClick={handleSave} disabled={!editedTask.length}>Save</button>
          <button onClick={handleCancel}>Cancel</button></> 
      : <>
          <button onClick={handleEdit} disabled={editMode}>Edit</button>
          <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
        </>
      }
      <button onClick={() => dispatch(toggleDoneTask(item.id))}>{item.done ? 'Done' : 'Not done'}</button>
      <br/>
    </>
  );
}

export default ListItem;
