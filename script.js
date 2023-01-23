const elSelect = document.querySelector("#select");
const elBread = document.querySelector("#bread");
const sizeOfBread = document.querySelector("#sizeOfBread");
const elHold = document.querySelectorAll(".hold__input");
const holdInput = document.querySelectorAll(".hold__inputt");
const elSize = document.querySelectorAll(".size-wrapper__input");
const list = document.querySelector("#li-wrapper");
const additional = document.querySelector("#additional-wrapper");

elSelect.addEventListener("change", function (evt) {
  localStorage.setItem("bread", JSON.stringify(elSelect.value));
  elBread.textContent = JSON.parse(localStorage.getItem("bread"));
});

for (let i = 0; i < elSize.length; i++) {
  elSize[i].addEventListener("change", function (evt) {
    localStorage.setItem("elSize", JSON.stringify(elSize[i].dataset.size));
    sizeOfBread.textContent = JSON.parse(localStorage.getItem("elSize"));
  });
}

for (let i = 0; i < elHold.length; i++) {
  let input = elHold[i];
  let newItem = document.createElement("li");
  elHold[i].addEventListener("change", function (evt) {
    if (input.checked) {
      newItem.className = "color";
      localStorage.setItem("elements", JSON.stringify(elHold[i].dataset.add));
      newItem.textContent = JSON.parse(localStorage.getItem("elements"));
      list.appendChild(newItem);
    } else {
      newItem.remove();
    }
  });
}

for (let i = 0; i < holdInput.length; i++) {
  const element = holdInput[i];
  let array = element.dataset.extra;

  const newLi = document.createElement("li");

  element.addEventListener("change", () => {
    if (element.checked === true) {
      newLi.className = "subtitle";

      localStorage.setItem("element", JSON.stringify(element.dataset.extra));
      newLi.textContent = JSON.parse(localStorage.getItem("element"));
      console.log(JSON.parse(localStorage.getItem("element")));
      additional.appendChild(newLi);
    }
    if (element.checked === false) {
      newLi.textContent = null;
    }
  });
}
