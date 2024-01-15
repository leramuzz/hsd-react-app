import {useState} from "react";
import { useDispatch } from 'react-redux';
import { increment } from '../app/slices/counterSlice';
import {addTask} from "../app/slices/tasksSlice.js";

function NewItem({editMode}) {
  const [newTask, setNewTask] = useState(''); 
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNewTask(event.target.value); 
  };

  return (
    <>
      <input
        type="text"
        placeholder="Neue Aufgabe"
        onChange={handleInputChange}
      ></input>
      <button onClick={() => {dispatch(addTask(newTask)); dispatch(increment());}} disabled={editMode || !newTask.length}>Save</button>
      <br />
    </>
  );
}

export default NewItem;
