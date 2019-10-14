import React,{useState} from 'react';
import ToDoItem from './ToDoItem';

const ToDoContainer = (props) => {

const [closeButton, setCloseButton] = useState(false);
const [textIschanging, setTextIsChanging] = useState(false);

  return(
    <ToDoItem textIschanging={textIschanging} setTextIsChanging={setTextIsChanging} closeButton={closeButton} setCloseButton={setCloseButton} {...props}/>
  )
}

export default ToDoContainer
