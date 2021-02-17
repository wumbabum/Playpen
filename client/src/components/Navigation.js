import React from 'react';
import style from './style.module';
import Tab from './Tab';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(target) {
    this.props.handleTabClick(target);
  }

  render() {
    return (
      <ul className={style['navigation']}>
        <Tab tag={'Signup'} title={'Sign Up'} clicked={this.props.tab === 'Signup'} handleTabClick={this.handleTabClick}/>
        <Tab tag={'Browse'} title={'Pet Pals'} clicked={this.props.tab === 'Browse'} handleTabClick={this.handleTabClick}/>
      </ul>
    );
  }
}

export default Navigation;