// Create sounds object
const sounds = {
  "Q": "Heater 1", "W": "Heater 2", "E": "Heater 3", "A": "Heater 4", "S": "Clap",
  "D": "Open HH", "Z": "Kick 'n Hat", "X": "Kick", "C": "Closed HH" };


// Create stateless DrumPad component
const DrumPad = props => {
  return (
    React.createElement("button", { className: "drum-pad btn", id: sounds[props.id], onClick: props.onClick }, props.id,
    React.createElement("audio", { className: "clip", id: props.id, src: props.src, type: "audio/mp3" })));


};

// Create stateful App component
class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { sound: "Sound" };
    this.handlePress = this.handlePress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Handle click events
  handleClick(event) {
    let button = event.target;
    button.querySelector("audio").currentTime = 0;
    button.querySelector("audio").play();
    $(button).addClass("triggered");
    setTimeout(() => {$(button).removeClass("triggered");}, 200);
    this.setState({ sound: sounds[button.querySelector("audio").id] });
  }

  // Handle keyboard strokes
  handlePress(event) {
    let keyPressed = event.key.toUpperCase();
    $("#" + keyPressed)[0].currentTime = 0;
    $("#" + keyPressed)[0].play();
    $("#" + keyPressed).parent().addClass("triggered");
    setTimeout(() => {$("#" + keyPressed).parent().removeClass("triggered");}, 200);
    this.setState({ sound: sounds[keyPressed] });
  }

  // Listen for keyboard strokes
  componentDidMount() {
    $("body").keydown(this.handlePress);
  }

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "drum-pads" },
      React.createElement(DrumPad, { id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", onClick: this.handleClick }),
      React.createElement(DrumPad, { id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", onClick: this.handleClick })),

      React.createElement("div", { id: "display" }, React.createElement("strong", null, this.state.sound))));


  }}


// Render App component
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));