class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      output: "\n" };

    this.handleClear = this.handleClear.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleClear() {
    this.setState({ input: "0", output: "" });
    console.log(this.state);
  }

  handleOperator(e) {
    let operator = e.target.innerHTML;
    if (this.state.output.includes("=")) {
      this.setState({ output: this.state.input + operator });
      this.setState({ input: operator });
      return;
    }
    this.setState({ input: operator });
    if (/-/.test(this.state.output.charAt(this.state.output.length - 1)) && /[-+/x]/.test(this.state.output.charAt(this.state.output.length - 2))) {
      let outputArr = this.state.output.split("");
      outputArr.pop();
      outputArr.pop();
      outputArr.push(operator);
      outputArr = outputArr.join("");
      this.setState({ output: outputArr });
      return;
    }
    if (operator == "-" && /[+/x]/.test(this.state.output.charAt(this.state.output.length - 1))) {
      this.setState({ output: this.state.output + operator });
      return;
    }
    if (/[+/x-]/.test(this.state.output.charAt(this.state.output.length - 1))) {
      let outputArr = this.state.output.split("");
      outputArr.pop();
      outputArr.push(operator);
      outputArr = outputArr.join("");
      this.setState({ output: outputArr });
      return;
    }
    this.setState({ output: this.state.output + operator });
  }

  handleNum(e) {
    let num = e.target.innerHTML;
    if (this.state.input == "0") {
      if (num == "0") {
        return;
      }
      if (num == ".") {
        this.setState({ input: "0.", output: "0." });
        return;
      }
      this.setState({ input: num, output: this.state.output + num });
    } else {
      if (num == "." && this.state.input.includes(".")) {
        return;
      }
      if (/[-+/x]/.test(this.state.input)) {
        this.setState({ input: num, output: this.state.output + num });
        return;
      }
      this.setState({ input: this.state.input + num, output: this.state.output + num });
    }
  }

  handleEquals() {
    let result = this.state.output.replace(/x/g, "*");
    console.log(result);
    result = eval(result);
    result = result.toString(10);
    this.setState({ input: result, output: this.state.output + "=" + result });
  }

  render() {
    return (
      React.createElement("div", { id: "main" },
      React.createElement("div", { id: "output" }, this.state.output),
      React.createElement("div", { id: "display" }, this.state.input),
      React.createElement("div", { id: "grid" },
      React.createElement("button", { id: "clear", onClick: this.handleClear }, "AC"),
      React.createElement("button", { id: "divide", onClick: this.handleOperator }, "/"),
      React.createElement("button", { id: "multiply", onClick: this.handleOperator }, "x"),
      React.createElement("button", { id: "seven", onClick: this.handleNum }, "7"),
      React.createElement("button", { id: "eight", onClick: this.handleNum }, "8"),
      React.createElement("button", { id: "nine", onClick: this.handleNum }, "9"),
      React.createElement("button", { id: "subtract", onClick: this.handleOperator }, "-"),
      React.createElement("button", { id: "four", onClick: this.handleNum }, "4"),
      React.createElement("button", { id: "five", onClick: this.handleNum }, "5"),
      React.createElement("button", { id: "six", onClick: this.handleNum }, "6"),
      React.createElement("button", { id: "add", onClick: this.handleOperator }, "+"),
      React.createElement("button", { id: "one", onClick: this.handleNum }, "1"),
      React.createElement("button", { id: "two", onClick: this.handleNum }, "2"),
      React.createElement("button", { id: "three", onClick: this.handleNum }, "3"),
      React.createElement("button", { id: "equals", onClick: this.handleEquals }, "="),
      React.createElement("button", { id: "zero", onClick: this.handleNum }, "0"),
      React.createElement("button", { id: "decimal", onClick: this.handleNum }, "."))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));