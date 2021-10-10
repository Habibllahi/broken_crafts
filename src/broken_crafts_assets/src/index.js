import { broken_crafts } from "../../declarations/broken_crafts";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with broken_crafts actor, calling the greet method
  const greeting = await broken_crafts.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
