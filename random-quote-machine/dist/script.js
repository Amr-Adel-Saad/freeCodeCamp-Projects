const quotes = [["Prophet Muhammad (peace be upon him)", "The best among you is the one who doesn’t harm others with his tongue and hands."], ["Prophet Muhammad (peace be upon him)", "What has reached you was never meant to miss you, and what has missed you was never meant to reach you."], ["Nelson Mandela", "The greatest glory in living lies not in never falling, but in rising every time we fall."], ["Walt Disney", "The way to get started is to quit talking and begin doing."], ["Steve Jobs", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."], ["Oprah Winfrey", "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."], ["John Lennon", "Life is what happens when you're busy making other plans."], ["Aristotle", "It is during our darkest moments that we must focus to see the light."], ["Abraham Lincoln", "In the end, it's not the years in your life that count. It's the life in your years."], ["John Wooden", "Do not let making a living prevent you from making a life."]];

const colors = ["teal", "crimson", "darkslateblue", "seegreen", "gray", "black", "brown", "slategray"];

// Picking a random quotes array index
let index = Math.floor(Math.random() * quotes.length);
let colorIndex = Math.floor(Math.random() * colors.length);
$(document).ready(function () {
  $(".bkcolored").css("background-color", colors[colorIndex]);
  $(".colored").css("color", colors[colorIndex]);
});

// Creating a React stateless component
const Bottom = props => {
  return (
    React.createElement("div", { id: "bottom", className: "d-flex justify-content-between" },
    React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", target: "_blank", className: "btn btn-primary bkcolored" },
    React.createElement("i", { className: "fa fa-lg fa-twitter" }), " Tweet"),
    React.createElement("button", { id: "new-quote", className: "btn btn-primary bkcolored", onClick: props.onClick }, "New quote")));


};

// Creating a React component
class App extends React.Component {
  constructor(props) {
    super(props);
    // Initializing state
    this.state = {
      quote: quotes[index][1],
      author: quotes[index][0] };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    $(".colored").animate({ opacity: "1" }, 1500);
  }

  // Changing state when the user clicks "New quote"
  handleClick() {
    index = Math.floor(Math.random() * quotes.length);
    colorIndex = Math.floor(Math.random() * colors.length);
    $(".btn").blur();
    $(".colored").css("opacity", "0");
    $(".bkcolored").css("background-color", colors[colorIndex]);
    $(".colored").css("color", colors[colorIndex]);
    this.setState({ quote: quotes[index][1], author: quotes[index][0] });
  }

  render() {
    return (
      React.createElement("div", { id: "wrapper", className: "bkcolored d-flex justify-content-center align-items-center" },
      React.createElement("div", { id: "quote-box" },
      React.createElement("i", { className: "colored fa fa-quote-left fa-2x fa-pull-left" }),
      React.createElement("p", { id: "text", className: "colored" }, React.createElement("strong", null, this.state.quote)),
      React.createElement("p", { id: "author", className: "colored" }, "- ", this.state.author),
      React.createElement(Bottom, { onClick: this.handleClick }))));



  }}
;

// Rendering App component
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));