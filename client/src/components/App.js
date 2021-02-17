import React from 'react';
import style from './style.module';
import axios from 'axios';
import Navigation from './Navigation';
import View from './View';
const apiServer = 'localhost';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      tab: 'Signup'
    };

    this.handleSubmitAddress = this.handleSubmitAddress.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(target) {
    this.setState({
      tab: target
    });
  }

  handleSubmitAddress(address) {
    axios.get(`http://${apiServer}:5000/api/nearby/${address}`, (err, matches) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          address: address,
          matches: matches
        });
      }
    });
  }

  render() {
    return (
      <main>
        <div className={style['page']}>
          <Navigation tab={this.state.tab} handleTabClick={this.handleTabClick} />
          <div className={style['content']} >
            <View tab={this.state.tab} handleSubmitAddress={this.handleSubmitAddress} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;