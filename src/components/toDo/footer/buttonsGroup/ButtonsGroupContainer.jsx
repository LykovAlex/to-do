import React, {useState} from 'react';
import ButtonsGroup from './ButtonsGroup';

const ButtonsGroupContainer = ({showAllTasks, showActiveTasks, showCompletedTasks, setStatusTasks}) => {

    const [isActivClass, setIsActiveClass] = useState(1);
    const buttons = [{text: 'All', id: 1}, {text: 'Active', id: 2}, {text: 'Completed', id: 3}];

    const changeClass = (id) => {
      switch(id) {
      case 1:
        showAllTasks();
        setIsActiveClass(1);
        setStatusTasks('All');
        break
      case 2:
        showActiveTasks();
        setIsActiveClass(2);
        setStatusTasks('Active');
        break
      case 3:
        showCompletedTasks();
        setIsActiveClass(3);
        setStatusTasks('Completed');
        break
      default:
        break
      }
    }

  return(
    <ButtonsGroup buttons={buttons} changeClass={changeClass} isActivClass={isActivClass}/>
  )
}

export default ButtonsGroupContainer
