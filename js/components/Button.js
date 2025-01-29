// example of a button component
class Button {
  constructor(text) {
    this.text = text;
  }

  render() {
    const button = document.createElement("button");
    button.textContent = this.text;
    button.classList.add("btn");
    return button;
  }
}

export default Button;

// usage
// import Button from "./components/Button.js";

// const app = document.getElementById("app");
// const myButton = new Button("Click Me!");
// app.appendChild(myButton.render());
