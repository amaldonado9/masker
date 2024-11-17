const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzYgNC4yOUwzLjk2IDIuNUwyLjU1IDMuOTFMNC4zNCA1LjdMNS43NiA0LjI5Wk0zIDkuOTVIMFYxMS45NUgzVjkuOTVaTTEyIDBIMTBWMi45NUgxMlYwWk0xOS40NSAzLjkxTDE4LjA0IDIuNUwxNi4yNSA0LjI5TDE3LjY2IDUuN0wxOS40NSAzLjkxWk0xNi4yNCAxNy42MUwxOC4wMyAxOS40MUwxOS40NCAxOEwxNy42NCAxNi4yMUwxNi4yNCAxNy42MVpNMTkgOS45NVYxMS45NUgyMlY5Ljk1SDE5Wk0xMSA0Ljk1QzcuNjkgNC45NSA1IDcuNjQgNSAxMC45NUM1IDE0LjI2IDcuNjkgMTYuOTUgMTEgMTYuOTVDMTQuMzEgMTYuOTUgMTcgMTQuMjYgMTcgMTAuOTVDMTcgNy42NCAxNC4zMSA0Ljk1IDExIDQuOTVaTTEwIDIxLjlIMTJWMTguOTVIMTBWMjEuOVpNMi41NSAxNy45OUwzLjk2IDE5LjRMNS43NSAxNy42TDQuMzQgMTYuMTlMMi41NSAxNy45OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
const moonIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODMyNTMgMTVDMTAuMjQ4NCAxNSAxMi40NTQ5IDEzLjk0NzUgMTMuOTE2NyAxMi4yMjI5QzE0LjEzMyAxMS45Njc4IDEzLjg5NzIgMTEuNTk1MSAxMy41NjMgMTEuNjU2QzkuNzYyODkgMTIuMzQ5IDYuMjczMTYgOS41NTkwNCA2LjI3MzE2IDUuODg1ODZDNi4yNzMxNiAzLjc2OTk4IDcuNDU2MDUgMS44MjQyOSA5LjM3ODU3IDAuNzc2NjZDOS42NzQ5MiAwLjYxNTE3NiA5LjYwMDM5IDAuMTg0OTUxIDkuMjYzNjUgMC4xMjUzOTFDOC43OTE1OCAwLjA0MjAzOSA4LjMxMjU2IDYuODQ0NzRlLTA1IDcuODMyNTMgMEMzLjUwOTA3IDAgMCAzLjM1NDgxIDAgNy41QzAgMTEuNjM5OSAzLjUwMzU2IDE1IDcuODMyNTMgMTVaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=";
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
