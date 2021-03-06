let interval;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      round: "Session",
      onPlay: false,
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0 };

    this.reset = this.reset.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.startStop = this.startStop.bind(this);
  }

  reset() {
    $("#beep")[0].pause();
    $("#beep")[0].currentTime = 0;
    clearInterval(interval);
    this.setState({ round: "Session", onPlay: false, break: 5, session: 25, minutes: 25, seconds: 0 });
  }

  startStop() {
    if (this.state.onPlay || this.state.minutes == 0) {
      clearInterval(interval);
      this.setState({ onPlay: false });
      $("#start_stop")[0].innerHTML = '<i className="fas fa-play"></i>';
      return;
    }
    this.setState({ onPlay: true });
    $("#start_stop")[0].innerHTML = '<i className="fas fa-pause"></i>';
    interval = setInterval(() => {
      if (this.state.minutes == 0 && this.state.seconds == 0) {
        $("#beep")[0].currentTime = 0.8;
        $("#beep")[0].play();
        this.state.round == "Session" ? this.setState({ round: "Break", minutes: this.state.break, seconds: 1 }) : this.setState({ round: "Session", minutes: this.state.session, seconds: 1 });
      }
      if (this.state.seconds == 0) {
        this.setState({ minutes: this.state.minutes - 1, seconds: 60 });
      }
      this.setState({ seconds: this.state.seconds - 1 });
    }, 1000);
  }

  breakDecrement() {
    if (this.state.onPlay || this.state.break - 1 == 0) {
      return;
    }
    this.setState({ break: this.state.break - 1 });
  }

  sessionDecrement() {
    if (this.state.onPlay || this.state.session - 1 == 0) {
      return;
    }
    this.setState({ session: this.state.session - 1, minutes: this.state.minutes - 1 });
  }

  breakIncrement() {
    if (this.state.onPlay || this.state.break + 1 == 61) {
      return;
    }
    this.setState({ break: this.state.break + 1 });
  }

  sessionIncrement() {
    if (this.state.onPlay || this.state.session + 1 == 61) {
      return;
    }
    this.setState({ session: this.state.session + 1, minutes: this.state.minutes + 1 });
  }

  render() {
    return (
      React.createElement("div", { id: "main" },
      React.createElement("h1", null, "Pomodoro Clock"),
      React.createElement("label", { className: "length", id: "break-label" }, "Break Length", React.createElement("br", null),
      React.createElement("button", { className: "btn", id: "break-decrement", onClick: this.breakDecrement }, "-"), React.createElement("span", { id: "break-length" }, this.state.break),
      React.createElement("button", { className: "btn", id: "break-increment", onClick: this.breakIncrement }, "+")),

      React.createElement("label", { className: "length", id: "session-label" }, "Session Length", React.createElement("br", null),
      React.createElement("button", { className: "btn", id: "session-decrement", onClick: this.sessionDecrement }, "-"), React.createElement("span", { id: "session-length" }, this.state.session),
      React.createElement("button", { className: "btn", id: "session-increment", onClick: this.sessionIncrement }, "+")),
      React.createElement("br", null),
      React.createElement("label", { id: "timer-label" }, this.state.round,
      React.createElement("div", { id: "time-left" }, this.state.minutes.toString().padStart(2, "0"), ":", this.state.seconds.toString().padStart(2, "0"))),

      React.createElement("div", { id: "tools" },
      React.createElement("button", { className: "btn", id: "start_stop", onClick: this.startStop }, React.createElement("i", { className: "fas fa-play" })),
      React.createElement("button", { className: "btn", id: "reset", onClick: this.reset }, React.createElement("i", { className: "fas fa-sync-alt" })),
      React.createElement("audio", { id: "beep", src: "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg" }))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));