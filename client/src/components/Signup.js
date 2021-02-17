import React from 'react';
import style from './style.module';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      petName: '',
      species: '--',
      petSize: '--',
      address: ''
    };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePetNameChange = this.handlePetNameChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    this.handlePetSizeChange = this.handlePetSizeChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.props.handleSubmitForm(this.state);
  }

  handleUserNameChange(event) {
    this.setState({
      userName: event.target.value
    })
  }

  handlePetNameChange(event) {
    this.setState({
      petName: event.target.value
    })
  }

  handleSpeciesChange(event) {
    this.setState({
      species: event.target.value
    })
  }

  handlePetSizeChange(event) {
    this.setState({
      petSize: event.target.value
    })
  }

  handleAddressChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Your name:
          <input type="text" onChange={this.handleUserNameChange} />
        </label>
        <label>
          Your pet's name:
          <input type="text" onChange={this.handlePetNameChange} />
        </label>
        <label>
          Species:
          <select value={this.state.species} onChange={this.handleSpeciesChange}>
            <option value="--">--</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Iguana">Iguana</option>
          </select>
        </label>
        <label>
          Pet Size:
          <select value={this.state.PetSize} onChange={this.handlePetSizeChange}>
            <option value="--">--</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <label>
          Home address:
          <input type="text" onChange={this.handleAddressChange} />
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export default Signup;