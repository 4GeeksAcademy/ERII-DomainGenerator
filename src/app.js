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
