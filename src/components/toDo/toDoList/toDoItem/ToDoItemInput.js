import React from "react";
import "./to-do-item-input.css";

const ToDoItemInput = ({ fieldText, text, setFieldText, id, changeTaskText, setTextIsChanging }) => {

  const onBlurInput = (e) => {
    if (e) {
      if (fieldText !== text) {
        let ckeckedfieldText = fieldText.replace(/ +(?= )/g, "");
        changeTaskText(id, ckeckedfieldText);
        setFieldText(ckeckedfieldText)
      }
    } else{
      console.log('Required field');
      setFieldText(text)
    }
    setTextIsChanging(false);
  };

  return (
    <div>
      <input
        className="to-do-item-input"
        name="text"
        type="text"
        value={fieldText}
        autoFocus
        onChange={e => setFieldText(e.target.value)}
        onBlur={e => onBlurInput(e.target.value)}
      />
    </div>
  );


};
export default ToDoItemInput;
