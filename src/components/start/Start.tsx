import React from 'react';
import '../../App.global.css';

class Start extends React.PureComponent {
  render() {
    return (
      <div className="root">
        <p className="Start.Headline">Welcome to Tarkova.</p>
        <form>
          <div className="searchbar">
            <input className="searchbaritem" placeholder="Hello World"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Start;
