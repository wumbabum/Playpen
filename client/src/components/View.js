import React from 'react';
import Signup from "./Signup";
import Browse from "./Browse";

let View = (props) => {
  let display;
  if (props.tab === 'Signup') {
    display = (<Signup handleSubmitAddress={props.handleSubmitAddress} />);
  }
  if (props.tab === 'Browse') {
    display = (<Browse />);
  }
  
  return display;
}

export default View;