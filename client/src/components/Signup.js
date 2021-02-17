import React from 'react';
import style from './style.module';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    };

    this.handleSubmitAddress = this.handleSubmitAddress.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleSubmitAddress(event) {
    event.preventDefault();
    this.props.handleSubmitAddress(this.state.address);
  }

  handleAddressChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitAddress}>
        <label>
          Enter your address:
          <input type="text" onChange={this.handleAddressChange} />
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default Signup;