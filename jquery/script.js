$(function () {});

function myFunction() {
  const inputEl = document.querySelector("#myInput");
  const allLis = Array.from(document.querySelectorAll("li"));
  allLis.forEach((li) => {
    if (
      !li.children[0].textContent
        .toLowerCase()
        .includes(inputEl.value.toLowerCase())
    ) {
      li.style.display = "none";
    } else {
      li.style.display = "";
    }
  });
}
