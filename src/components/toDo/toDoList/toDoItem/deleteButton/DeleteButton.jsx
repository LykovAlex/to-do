import React from 'react';
import './delete-button.css';

const DeleteButton = ({ handlerDelete, id }) => {
  return (
    <div onClick={() => handlerDelete(id)} className='close-button'>
      <span className="close"></span>
    </div>
  )
}

export default DeleteButton
