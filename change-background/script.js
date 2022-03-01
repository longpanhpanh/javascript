const body = document.querySelector("body");
const backgroundHeader = document.querySelector(".background-header");
const changeBtn = document.querySelector(".change");

const direction = [  ]

changeBtn.addEventListener("click", () => {
  const randomColor1 = Math.floor(Math.random() * 1000000);
  const randomColor2 = Math.floor(Math.random() * 1000000);
  backgroundHeader.textContent = `background-image: linear-gradient(to right, #${randomColor1}, #${randomColor2})`;
  body.style = backgroundHeader.textContent;
});
