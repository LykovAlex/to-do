import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoContainer = (props) => {

  const [closeButton, setCloseButton] = useState(false);
  const [textIschanging, setTextIsChanging] = useState(false);
  const [fieldText, setFieldText] = useState(props.text);

  return (
    <ToDoItem
      textIschanging={textIschanging}
      setTextIsChanging={setTextIsChanging}
      closeButton={closeButton}
      setCloseButton={setCloseButton} 
      fieldText={fieldText}
      setFieldText={setFieldText}
      {...props}
    />
  )
}

export default ToDoContainer
