import React from 'react';
import './to-do-item.css';
import CheckingField from './checkingField/CheckingField';
import DeleteButton from './deleteButton/DeleteButton';
import ToDoItemInput from './ToDoItemInput';

const ToDoItem = ({ text, fieldText, setFieldText, id, isChecked, handlerChecked, handlerDelete, closeButton, setCloseButton, textIschanging, setTextIsChanging, changeTaskText}) => {

  const toDoItem_text = isChecked ? 'to-do-item_text-complete' : 'to-do-item_text';

  return (
    <div>
      <div onDoubleClick={() => setTextIsChanging(true)} onMouseOver={() => setCloseButton(true)} onMouseLeave={() => setCloseButton(false)} className='to-do-item'>
        <CheckingField handlerChecked={handlerChecked} isChecked={isChecked} id={id} />
        {textIschanging
          ? <ToDoItemInput text={text} fieldText={fieldText} setFieldText={setFieldText} id={id} setTextIsChanging={setTextIsChanging}  changeTaskText={changeTaskText}/>
          : <li className={toDoItem_text}>{fieldText}</li>
        }
        {closeButton &&
          <DeleteButton handlerDelete={handlerDelete} id={id} />
        }
      </div>
    </div>
  )
}
export default ToDoItem
