class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $("#preview").html(marked(this.state.text));
  }

  componentDidUpdate() {
    $("#preview").html(marked(this.state.text));
  }

  handleChange() {
    this.setState({
      text: $("#editor").val() });

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { id: "header", style: { textAlign: "center" } }, "Markdown Previewer"),
      React.createElement("div", { id: "title", className: "row" },
      React.createElement("h2", { class: "col-sm-6" }, "Editor"),
      React.createElement("h2", { class: "col-sm-6" }, "Previewer")),

      React.createElement("div", { id: "main" },
      React.createElement("textarea", { id: "editor", className: "box", onChange: this.handleChange }, this.state.text),
      React.createElement("div", { id: "preview", className: "box" }))));



  }}



const placeholder = `![GitHub Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROGQ9QQvG5qD4J0ls68e7_mT1iTeCj1tpdbZjSgJVv2Zo3kQXZ)

---
# This is a level-1 heading
---
## This is a level-2 heading
### This is a level-3 heading
[Here is a link](https://www.google.com)
___
Here is **bold text**

This is an inline code \`x = x + 1\`

This is a code block:
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
Here is an unordered list:
* Item 1
* Item 2
  * Item 2a
  * Item 2b
Here is an ordered list:
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

Here is a blockquote:

> We're living the future so
> the present is our past.
`;

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));