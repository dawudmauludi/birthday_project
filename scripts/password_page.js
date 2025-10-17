const password = "17102006";
const dots = document.getElementById("dots");
const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

let input = "";

function updateDisplay(text = "") {
  display.textContent = text || input;
  display.classList.add("pop");
  setTimeout(() => display.classList.remove("pop"), 200);
}

function updateDots() {
  dots.innerHTML = "";
  for (let i = 0; i < input.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot", "filled");
    dots.appendChild(dot);
  }
  for (let i = input.length; i < 8; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
  }
}

keys.forEach(key => {
  key.addEventListener("click", () => {
    const val = key.textContent.trim();

    if (val === "Enter") {
      if (input === password) {
        updateDisplay("Access Granted");
        display.style.color = "#ff9fc2";
        setTimeout(() => {
          window.location.href = "love_page1.html"; // halaman berikut
        }, 1000);
      } else {
        updateDisplay("Wrong Password");
        display.style.color = "#ff607e";
        setTimeout(() => {
          input = "";
          updateDots();
          updateDisplay("");
          display.style.color = "";
        }, 1000);
      }
      return;
    }

    if (input.length < 8 && val !== "Enter") {
      input += val;
      updateDots();
      updateDisplay();
    }
  });
});

updateDots();
updateDisplay();

