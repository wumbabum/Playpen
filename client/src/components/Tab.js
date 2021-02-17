import React from 'react';
import style from './style.module';

var Tab = (props) => {
  //Determine if this tab is currently selected or not and set appropriate styling.
  var color = {
    backgroundColor: props.clicked ? 'rgb(97, 141, 223)' : 'rgb(202, 202, 202)',
  };
  
  return (
    <li 
      className={style['tab']} 
      style={color} 
      onClick={() => props.handleTabClick(props.tag)} 
    >
      {props.title}
    </li>
  );
}

export default Tab;