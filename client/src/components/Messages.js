import React from 'react';
import style from './style.module';

let Messages = ({message}) => {
  if (message === '') {
    return null;
  } else {
    return (
      <div className={style['message']} >{message}</div>
    );
  }
};

export default Messages;