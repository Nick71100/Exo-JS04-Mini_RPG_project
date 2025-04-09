import Entity from "./entity.js";
import Mage from "./mage.js";
import Monster from "./monster.js";

const mage = new Mage("Gandalf", 100, 20, 0, 100, 50);
const monster = new Monster("FireLarva", 80, 15, 0, 100, 30);

document.getElementById("spell1").addEventListener("click", () => {
  mage.attaque(monster);
  updateHealthDisplay();
});

document.getElementById("spell2").addEventListener("click", () => {
  mage.sortSpecifique(monster);
  updateHealthDisplay();
});

function updateHealthDisplay() {
  document.getElementById("character-hp").innerText = `HP: ${mage.hp}`;
  document.getElementById("monster-hp").innerText = `HP: ${monster.hp}`;
}
