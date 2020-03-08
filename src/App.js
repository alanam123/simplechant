import React from 'react';
import gear from './gear-icon.png';
import './App.css';
import * as Tone from "tone";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          < Welcome className="welcome" name="Alana" />
          < Settings className={"settings"} />
          < Visualizer className={"visualizer"} />
      </header>
      <main id="player">
          < NowPlaying className={"now-playing"}/>
          < PlayerControls />
      </main>

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
               <img src={gear} />
            </div>
        );
    }
}

class NowPlaying extends React.Component {
    render() {
        return (
            <section className={this.props.className}>
                <p>Now Playing Simple Progression</p>
            </section>
        );
    }
}


class Visualizer extends React.Component {
    render() {
        return (
            <section className={this.props.className}>
                <p>Soon to be visualizer</p>
            </section>
        );
    }
}


class PlayerControls extends React.Component {
    render() {
        return (
            <section className={this.props.className}>
                < PlayPause />
                < Tempo />
                < Looper />
            </section>
        );
    }
}

class PlayPause extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isPlaying: false};
        this.state = {buttonImage: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isPlaying: !state.isPlaying
        }));
        if ( this.state.isPlaying) {
            playTones();
        } else {
            stopStones();
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick}
                    className={this.props.className}>
                    Play Pause
                </button>
            </div>
        );
    }
}


class Tempo extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.className}>
                    Tempo Slider
                </button>
            </div>
        );
    }
}

class Looper extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.className}>
                 Looper
                </button>
            </div>
        );
    }
}

/** Tone Functions
 *
 */
function playTones(){
    const time = 0;
    var synth = new Tone.Synth();
    synth.toMaster();
    synth.triggerAttack("C4", time);
    synth.triggerRelease(time + 1.0);

    var pattern = new Tone.Pattern(function(time, note){
        synth.triggerAttackRelease(note, 0.25);
    }, ["C4", "D4", "E4", "G4", "A4"]);

    //begin at the beginning
    pattern.start(0);
    Tone.Transport.start();
}


function stopStones(){
    Tone.Transport.stop();
}
