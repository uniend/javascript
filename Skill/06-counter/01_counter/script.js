const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

function change(btn) {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("increase")) {
      count += 1;
      value.innerHTML = count;
    } else if (btn.classList.contains("decrease")) {
      count -= 1;
      value.innerHTML = count;
    } else {
      count = 0;
      value.innerHTML = count;
    }

    if (count > 0) {
      value.style.color = "white";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
}

btns.forEach(change);
