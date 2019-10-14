import React from 'react';
import './deleteButton.css';

const DeleteButton = ({handlerDelete, id}) => {
  return(
    <div onClick={() => handlerDelete(id)} className='closeButton'>
      <span className="close"></span>
    </div>
  )
}

export default DeleteButton
