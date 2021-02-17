import React from 'react';
import style from './style.module';

class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.goToSignup = this.goToSignup.bind(this)
    this.handleFindMatches = this.handleFindMatches.bind(this);
  }

  goToSignup(event) {
    event.preventDefault();
    this.props.goToSignup('Signup')
  }

  handleFindMatches(event) {
    event.preventDefault();
    this.props.handleFindMatches();
  }

  render() {
    if (this.props.address === '') {
      return (
        <div>
          <p>Enter you address before matching</p>
          <button onClick={this.goToSignup}>Go sign up</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleFindMatches}>Match with other pet owners</button>
          <ul className={style['match-container']}>
            {
              this.props.matches.map((match, index) => (
                <li className={style['match']} key={index}>
                  <div>{match.name + ': '}</div>
                  <div>{match.time + '   away.'}</div>
                  <div className={style['mbutton']}>
                    <div>
                      Match
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }
}

export default Browse;