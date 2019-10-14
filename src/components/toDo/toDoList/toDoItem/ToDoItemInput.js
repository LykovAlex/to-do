import React,{useState} from 'react';
import './ToDoItemInput.css';

const ToDoItemInput = ({text, id, changeTaskText, setTextIsChanging}) => {

  const [fieldText, setFieldText] = useState(text);

  const changeText= (e) => {
    if(e.key === 'Enter'){
      changeTaskText(id, fieldText);
      setTextIsChanging(false);
    }
  }
  const changeText2= () => {
      changeTaskText(id, fieldText);
      setTextIsChanging(false);
  }

  return(
    <div>
        <input className='toDoItemInput' type='text' value={fieldText} onChange={(e) => setFieldText(e.target.value)} onBlur={changeText2} onKeyPress={(e) => changeText(e)}/>
    </div>

  )
}
export default ToDoItemInput
