import React from 'react';
import style from './style.module';
import axios from 'axios';
import Navigation from './Navigation';
import View from './View';
import Messages from './Messages';
const apiServer = 'localhost';

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

    this.handleSubmitAddress = this.handleSubmitAddress.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleFindMatches = this.handleFindMatches.bind(this);
  }

  handleTabClick(target) {
    this.setState({
      tab: target
    });
  }

  handleSubmitAddress(address) {
    //Add address validation here
    if (true) {
      this.setState({
        address: address,
        hasValidAddress: true,
        message: 'Your address has been updated.'
      })
    }
  }

  handleFindMatches() {
    if (this.state.hasValidAddress) {
      axios.get(`http://${apiServer}:5000/api/nearby/${this.state.address}`)
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
        <div className={style['page']}>
          <Navigation tab={this.state.tab} handleTabClick={this.handleTabClick} />
          <div className={style['content']} >
            <View 
              tab={this.state.tab} 
              handleSubmitAddress={this.handleSubmitAddress}
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