import img from  '../../assets/logo.png';
import '../css/main.css';

export const broken_crafts = require('../../../declarations/broken_crafts/index.js').broken_crafts;
export const clickMeBtn: HTMLButtonElement  = document.getElementById("clickMeBtn") as HTMLButtonElement;
export const imo: HTMLImageElement = document.getElementById("imo") as HTMLImageElement; 
export const sec: HTMLDivElement = document.getElementById("greeting") as HTMLDivElement;
export const loadImage: void = window.addEventListener("load",()=>imo.src = String(img))
export const clicker: void = clickMeBtn.addEventListener("click", async () => {
  const input = document.getElementById("name") as HTMLInputElement
  const name = input.value.toString();
  // Interact with broken_crafts actor, calling the greet method
  const greeting = await broken_crafts.greet(name);

  sec.innerText = greeting;
});
