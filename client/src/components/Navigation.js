import React from 'react';
import style from './style.module';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.handlePetPalClick = this.handlePetPalClick.bind(this);
  }

  handleSignUpClick() {
    this.props.handleTabClick('SignUp');
  }

  handlePetPalClick() {
    this.props.handleTabClick('PetPal');
  }

  render() {
    return (
      <ul className={style['navigation']}>
        <li className={style['tab']} onClick={this.handleSignUpClick} >Sign Up</li>
        <li className={style['tab']} onClick={this.handlePetPalClick} >Pet Pals</li>
      </ul>
    );
  }
}

export default Navigation;