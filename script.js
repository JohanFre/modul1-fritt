// Variables and fruit array declaration.
const websiteHost = document.querySelector(".hostName");
const jokeBtnEl = document.querySelector(".getRandomJoke");
const randomJoke = document.querySelector(".randomJoke");
const fruitListEl = document.querySelectorAll(".all-the-fruits");
const sortFruitsEl = document.querySelector(".sortFruits");
// const jokeUrl = "http://api.icndb.com/jokes/random";
const fruitsEl = [
  "Banana",
  "Pineapple",
  "Apple",
  "Pear",
  "Orange",
  "Mango",
  "Apricot",
  "Cherry",
  "Fig",
  "Grape",
  "Plum",
];

// Event listener for hostName button.
websiteHost.addEventListener("click", () => {
  alert("Your href is: " + location.href);
});

// Console logs different global location object.
console.log(location.origin);
console.log(location.pathname);
console.log(location.hostname);

/* // Event listener for fetching jokeAPI and displaying the joke.
// jokeBtnEl.addEventListener("click", () => {
//   fetch(jokeUrl)
//     .then((response) => response.json())
//     .then((data) => (randomJoke.innerHTML = data.value.joke));
// });
 */

// Plan B då fetchen ovan inte fungerar på Github.
jokeBtnEl.addEventListener("click", () => {
  alert("Fetchen fungerar men inte på github");
});

// Creates listitems from fruit array.
let ulEl = document.createElement("ul");
document.querySelectorAll(".all-the-fruits")[0].appendChild(ulEl);

for (let i = 0; i < fruitsEl.length; i++) {
  let liEl = document.createElement("li");
  liEl.innerHTML = fruitsEl[i];
  ulEl.appendChild(liEl);
}

// Event listener for fruit filterbutton / console logs short named fruits.
sortFruitsEl.addEventListener("click", () => {
  let filterEl = fruitsEl.filter((word) => word.length <= 4);
  console.log(filterEl);
});

// Function for simple math equation.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10));
