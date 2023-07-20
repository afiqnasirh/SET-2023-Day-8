console.log("Hello World");

// let animals = ["lion", "tiger", "dolphin", "snake", "ant"];
// //

let h1ArrayDom = document.querySelectorAll("h1");
let renderTextDom = document.querySelector("#renderText");

// console.log("h1ArrayDom");

// for (let i = 0; i < h1ArrayDom.length; i = i + 1) {
//   let text = h1ArrayDom[i].innerText;
//   console.log(text);
// }

// for (let i = 0; i < h1ArrayDom.length; i = i + 1) {
//   h1ArrayDom[i].setAttribute("style", "background-colour:red;");
// }

for (let i = 0; i < h1ArrayDom.length; i = i + 1) {
  h1ArrayDom[i].setAttribute("style", "background-colour:red;");
}

let animals = ["lion", "tiger", "dolphin", "snake", "ant"];

for (let i = 0; i < animals.length; i = i + 1) {
  let newH1Dom = document.createElement("h1");
  newH1Dom.innerText = animals[i];
  renderTextDom.appendChild(newH1Dom);
}

befor;
// without create element
