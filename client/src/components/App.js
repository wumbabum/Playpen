import React from 'react';
import style from './style.module';
import axios from 'axios';
import Navigation from './Navigation';
import View from './View';
import Messages from './Messages';
const Server = window.location.href;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      tab: 'Signup',
      hasValidAddress: false,
      message: '',
      matches: []
    };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleFindMatches = this.handleFindMatches.bind(this);
  }

  handleTabClick(target) {
    this.setState({
      tab: target
    });
  }

  handleSubmitForm(input) {
    //Add address validation here
    if (true) {
      this.setState({
        address: input.address,
        hasValidAddress: true,
        message: 'Your info has been updated.'
      })
    }
  }

  handleFindMatches() {
    if (this.state.hasValidAddress) {
      axios.get(`${Server}api/nearby/${this.state.address}`)
        .then(response => {
          let matches = response.data;
          console.log(matches);
          this.setState({
            matches: matches,
            message: ''
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            message: 'That is not a valid address'
          });
        });
    }
  }

  render() {
    return (
      <main>
        <Navigation tab={this.state.tab} handleTabClick={this.handleTabClick} />
        <h1>PlayPen</h1>
        <div className={style['page']}>
          <div className={style['content']} >
            <View 
              tab={this.state.tab} 
              handleSubmitForm={this.handleSubmitForm}
              handleFindMatches={this.handleFindMatches}
              goToSignup={this.handleTabClick}
              address={this.state.address}
              matches={this.state.matches}
            />
          </div>
        </div>
        <Messages message={this.state.message} />
      </main>
    );
  }
}

export default App;