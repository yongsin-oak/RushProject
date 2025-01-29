// example of a card component
// js/components/Card.js
export function Card(title, description) {
  return `
      <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;
}

// usage
// import { Card } from "./components/Card.js";

// const app = document.getElementById("app");
// app.innerHTML += Card("Hello World", "This is a simple card component.");
