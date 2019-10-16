import React, { useState } from 'react';
import ButtonsGroup from './ButtonsGroup';

const ButtonsGroupContainer = ({ setStatusTasks }) => {

  const [isActivClass, setIsActiveClass] = useState(1);
  const buttons = [{ text: 'All', id: 1 }, { text: 'Active', id: 2 }, { text: 'Completed', id: 3 }];

  const changeClass = (id) => {
    switch (id) {
      case 1:
        setIsActiveClass(1);
        setStatusTasks('All');
        break
      case 2:
        setIsActiveClass(2);
        setStatusTasks('Active');
        break
      case 3:
        setIsActiveClass(3);
        setStatusTasks('Completed');
        break
      default:
        break
    }
  }

  return (
    <ButtonsGroup buttons={buttons} changeClass={changeClass} isActivClass={isActivClass} />
  )
}

export default ButtonsGroupContainer
