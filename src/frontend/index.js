import { backend } from "../declarations/backend";
// import { backend } from "../declarations/backend/backend.did.d.ts"

window.addEventListener("load", async function () {
  // console.log("Finish Loading");
  const currentAmt = await backend.checkBalance();
  document.getElementById("value").innerHTML = Math.round(currentAmt * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  // console.log("event");
  const button = event.target.querySelector("#submit-btn");
  const inputAmt = parseFloat(document.getElementById("input-amount").value);
  const withdrawalAmt = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await backend.topUp(inputAmt);
  } 
  

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await backend.withdrawl(withdrawalAmt);
  }

  await backend.compund();

  const currentAmt = await backend.checkBalance();
  document.getElementById("value").innerHTML = Math.round(currentAmt * 100) / 100;


  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");

});












document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);
  // Interact with backend actor, calling the greet method
  const greeting = await backend.greet(name);
  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;
  return false;
});
