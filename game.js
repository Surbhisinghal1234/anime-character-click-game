const selectCharacter = document.querySelector(".imgbox img");
const selectGame = document.querySelector("#btn");
const selectedAnime = document.querySelector("h3");
const timeDiv = document.querySelector("#left span");

const scoreDiv = document.querySelector("#right span");

const selectionScreen = document.querySelector("#top");

const playingScreen = document.querySelector("second-page");

selectCharacter.addEventListener("click", () => {
  //  top.children[1].children[2].classList.add(".selectCharacterImg")
  console.log("hii");

  selectedAnime.style.visiblity="hidden";
});
