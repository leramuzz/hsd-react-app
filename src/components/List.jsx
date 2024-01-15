import {useState} from "react";
import { useSelector } from 'react-redux';
import { selectTasks } from '../app/slices/tasksSlice';
import ListItem from "./ListItem.jsx";
import NewItem from "./NewItem.jsx";

function List() {
  const [editMode, setEditMode] = useState(false);
  const [editedId, setEditedId] = useState(false);
  const items = useSelector(selectTasks);

  return (
    <>
      <h2>Meine Aufgaben</h2>
      <NewItem editMode={editMode}/>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          setEditMode={setEditMode}
          editMode={editMode}
          editedId={editedId}
          setEditedId={setEditedId}
        />
      ))}
    </>
  );
}

export default List;
