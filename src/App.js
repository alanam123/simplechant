import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          < Welcome className="welcome" name="Alana" />
          < Settings className={"settings"} />
      </header>
      <player>

      </player>

      <footer>
        <a
          className="credit"
          href="https://www.alanamartin.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          Created by Alana Martin
        </a>
      </footer>


    </div>
  );
}

export default App;

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <h1>Simple Chant</h1>
                < User name={this.props.name}/>
            </div>
        );
    }
}

class User extends React.Component {
    render() {
        return (
        <p>
            Hello, {this.props.name ? this.props.name : "Stranger!"}
        </p>
        );
    }
}

class Settings extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
               Gear Icon
            </div>
        );
    }
}
