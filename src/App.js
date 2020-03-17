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

      </header>
      <main id="player">
          < Visualizer className={"visualizer"} />
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
                <p>Twinkle Twinkle Little Star</p>
            </section>
        );
    }
}


class Visualizer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section>Soon to be visualizer.
            </section>

        );
    }
}


class PlayerControls extends React.Component {
    render() {
        return (
            <section className={this.props.className}>
                < PlayPause />
                < Tempo className="tempo"/>
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
        this.state = {buttonText: "Play"};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
            Tone.start();
            console.log('audio is ready');
            this.handleClick();
    }


    handleClick() {
        this.setState(state => ({
            isPlaying: !state.isPlaying
        }));
        if ( this.state.isPlaying) {
                playTones();
            this.state.buttonText = "Pause";
        } else {
            stopStones();
            this.state.buttonText = "Play";
        }
    }


    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick}
                    className={this.props.className}>
                    {this.state.buttonText}
                </button>
            </div>
        );
    }
}


class Tempo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"bpm" : 120 };
    }


    changeBPM(value){
            this.setState( {"bpm": value } );
            Tone.Transport.bpm.value = value;
    }

    render() {
        return (
            <div className={this.props.className}>
                <h2>Tempo</h2>
                <div>BPM: {this.state.bpm}</div>
                <div>
                    <input onChange={event =>this.changeBPM(event.target.value)} type="range" min="40" max="240" defaultValue="120"/>
                </div>
            </div>
        );
    }
}

class Looper extends React.Component {

    handleClick(){
        alert('Looper coming soon!');
    }
    render() {
        return (
            <div>
                <input type="radio" id="once" name="repeat" value="once" /><label for="once">Once</label>
                <input type="radio" id="continuous" name="repeat" value="continuous" /><label for="continuous">Continuous</label>
                <input type="radio" id="times" name="repeat" value="times" /><label for="repeat">Repeat</label> <input type="number" defaultValue="8" min="2" max="99" />

                <button onClick={this.handleClick} className={this.props.className}>
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
    // const time = 0;
    var synth = new Tone.Synth();
    synth.toMaster();

    const twinkle = [
        //part a.
        {"time" : "0:0", "note" : "G4", "duration": "2n"},
        {"time" : "0:2", "note" : "G4", "duration": "2n"},


        {"time" : "1:0", "note" : "D5", "duration": "2n"},
        {"time" : "1:2", "note" : "D5", "duration": "2n"},

        {"time" : "2:0", "note" : "E5", "duration": "2n"},
        {"time" : "2:2", "note" : "E5", "duration": "2n"},

        {"time" : "3:0", "note" : "D5", "duration": "1n"},


        {"time" : "4:0", "note" : "C5", "duration": "2n"},
        {"time" : "4:2", "note" : "C5", "duration": "2n"},

        {"time" : "5:0", "note" : "B4", "duration": "2n"},
        {"time" : "5:2", "note" : "B4", "duration": "2n"},

        {"time" : "6:0", "note" : "A4", "duration": "2n"},
        {"time" : "6:2", "note" : "A4", "duration": "2n"},

        {"time" : "7:0", "note" : "G4", "duration": "1n"},

        //part b.
        {"time" : "8:0", "note" : "D5", "duration": "2n"},
        {"time" : "8:2", "note" : "D5", "duration": "2n"},


        {"time" : "9:0", "note" : "C5", "duration": "2n"},
        {"time" : "9:2", "note" : "C5", "duration": "2n"},

        {"time" : "10:0", "note" : "B4", "duration": "2n"},
        {"time" : "10:2", "note" : "B4", "duration": "2n"},

        {"time" : "11:0", "note" : "A4", "duration": "1n"},


        {"time" : "12:0", "note" : "D5", "duration": "2n"},
        {"time" : "12:2", "note" : "D5", "duration": "2n"},

        {"time" : "13:0", "note" : "C5", "duration": "2n"},
        {"time" : "13:2", "note" : "C5", "duration": "2n"},

        {"time" : "14:0", "note" : "B4", "duration": "2n"},
        {"time" : "14:2", "note" : "B4", "duration": "2n"},

        {"time" : "15:0", "note" : "A4", "duration": "1n"},


        //part a.
        {"time" : "16:0", "note" : "G4", "duration": "2n"},
        {"time" : "16:2", "note" : "G4", "duration": "2n"},


        {"time" : "17:0", "note" : "D5", "duration": "2n"},
        {"time" : "17:2", "note" : "D5", "duration": "2n"},

        {"time" : "18:0", "note" : "E5", "duration": "2n"},
        {"time" : "18:2", "note" : "E5", "duration": "2n"},

        {"time" : "19:0", "note" : "D5", "duration": "1n"},


        {"time" : "20:0", "note" : "C5", "duration": "2n"},
        {"time" : "20:2", "note" : "C5", "duration": "2n"},

        {"time" : "21:0", "note" : "B4", "duration": "2n"},
        {"time" : "21:2", "note" : "B4", "duration": "2n"},

        {"time" : "22:0", "note" : "A4", "duration": "2n"},
        {"time" : "22:2", "note" : "A4", "duration": "2n"},

        {"time" : "23:0", "note" : "G4", "duration": "1n"},
    ];



    const americaTheBeautiful = [
        {"time" : "0:0", "note" : "C4", "duration": "4n"},
        {"time" : "0:1", "note" : "C4", "duration": "4n"},
        {"time" : "0:2", "note" : "D4", "duration": "4n"},


        {"time" : "1:0", "note" : "B3", "duration": "4n."},
        {"time" : "1:1:2", "note" : "C4", "duration": "4n"},
        {"time" : "1:2", "note" : "D4", "duration": "4n"},
        //
        {"time" : "2:0", "note" : "E4", "duration": "4n"},
        {"time" : "2:1", "note" : "E4", "duration": "4n"},
        {"time" : "2:2", "note" : "F4", "duration": "4n"},

        {"time" : "3:0", "note" : "E4", "duration": "4n."},
        {"time" : "3:1:2", "note" : "D4", "duration": "8n"},
        {"time" : "3:2", "note" : "D4", "duration": "4n"},

        {"time" : "4:0", "note" : "D4", "duration": "4n"},
        {"time" : "4:1", "note" : "C4", "duration": "4n"},
        {"time" : "4:2", "note" : "B3", "duration": "4n"},

        {"time" : "5:0", "note" : "C4", "duration": "2n + 4n"},

        {"time" : "6:0", "note" : "G4", "duration": "4n"},
        {"time" : "6:1", "note" : "G4", "duration": "4n"},
        {"time" : "6:2", "note" : "G4", "duration": "4n"},

        {"time" : "7:0", "note" : "G4", "duration": "4n."},
        {"time" : "7:1:2", "note" : "F4", "duration": "8n"},
        {"time" : "7:2", "note" : "E4", "duration": "4n"},


        {"time" : "8:0", "note" : "F4", "duration": "4n"},
        {"time" : "8:1", "note" : "F4", "duration": "4n"},
        {"time" : "8:2", "note" : "F4", "duration": "4n"},

        {"time" : "9:0", "note" : "F4", "duration": "4n."},
        {"time" : "9:1:1", "note" : "E4", "duration": "8n"},
        {"time" : "9:2", "note" : "D4", "duration": "4n"},

        {"time" : "10:0", "note" : "E4", "duration": "4n"},
        {"time" : "10:1:0", "note" : "F4", "duration": "8n"},
        {"time" : "10:1:2", "note" : "E4", "duration": "8n"},
        {"time" : "10:2:0", "note" : "D4", "duration": "8n"},
        {"time" : "10:1:2", "note" : "C4", "duration": "8n"},
        {"time" : "10:2", "note" : "G4", "duration": "4n"},

        {"time" : "11:0", "note" : "E4", "duration": "4n."},
        {"time" : "11:1:2", "note" : "F4", "duration": "8n"},
        {"time" : "11:2", "note" : "G4", "duration": "4n"},

        {"time" : "12:0", "note" : "G4", "duration": "8n"},
        {"time" : "12:0:2", "note" : "F4", "duration": "8n"},
        {"time" : "12:1", "note" : "E4", "duration": "4n"},
        {"time" : "12:2", "note" : "D4", "duration": "4n"},

        {"time" : "13:0", "note" : "G4", "duration": "2n"}
    ];

    let notes = twinkle;
    var part = new Tone.Part(function(time, notes){
        //the value is an object which contains both the note and the velocity
        synth.triggerAttackRelease(notes.note, notes.duration, time );
    }, notes ).start(0);


    Tone.Transport.start();
    console.log( 'transport started.');
}


function stopStones(){
    Tone.Transport.stop();
    console.log( 'transport stopped.');
}


