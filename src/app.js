/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "a"];
  let adj = ["great", "big", "beautiful", "creepy", "nasty"];
  let noun = ["jogger", "raccoon", "car", "pizza", "burger", "thief"];
  let dom = [".com", ".org", ".es", ".net", ".xyz"];

  function generateDomain() {
    let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdj = adj[Math.floor(Math.random() * adj.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomDom = dom[Math.floor(Math.random() * dom.length)];

    return randomPronoun + randomAdj + randomNoun + randomDom;
  }

  let generatedDomainElement = document.getElementById("generatedDomain");

  let generatedDomain = generateDomain();
  generatedDomainElement.textContent = generatedDomain;

  let generateButton = document.getElementById("generateButton");

  function onGenerateButtonClick() {
    let generatedDomain = generateDomain();
    generatedDomainElement.textContent = generatedDomain;
  }

  generateButton.addEventListener("click", onGenerateButtonClick);
};

let pronoun = ["the", "our", "a"];
let adj = ["great", "big", "beautiful", "creepy", "nasty"];
let noun = ["jogger", "raccoon", "car", "pizza", "burger", "thief"];
let dom = [".com", ".org", ".es", ".net", ".xyz"];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let d = 0; d < dom.length; d++) {
        console.log(`${pronoun[p]}${adj[a]}${noun[n]}${dom[d]}`);
      }
    }
  }
}
