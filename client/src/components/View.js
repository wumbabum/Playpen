import React from 'react';
import Signup from "./Signup";
import Browse from "./Browse";

let View = (props) => {
  let display;
  if (props.tab === 'Signup') {
    display = (<Signup handleSubmitForm={props.handleSubmitForm} />);
  }
  if (props.tab === 'Browse') {
    display = (
      <Browse 
        handleFindMatches={props.handleFindMatches} 
        goToSignup={props.goToSignup}
        address={props.address} 
        matches={props.matches}
      />
    );
  }
  
  return display;
}

export default View;