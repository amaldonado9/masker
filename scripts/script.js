const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
    if (value === "042989" || calculatedValue === 042989) {
      boutmyBLANK();
    }
  }
}

function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  if (["+", "-", "*", "/", "."].includes(e.key)) {
    res.value += e.key;
  }

  if (e.key === "Enter") {
    calculate(res.value);
  }

  if (e.key === "Backspace") {
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}