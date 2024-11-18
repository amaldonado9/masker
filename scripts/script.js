const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const githubLight =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPiAgICA8cGF0aCBkPSJNMTAuOSwyLjFjLTQuNiwwLjUtOC4zLDQuMi04LjgsOC43Yy0wLjUsNC43LDIuMiw4LjksNi4zLDEwLjVDOC43LDIxLjQsOSwyMS4yLDksMjAuOHYtMS42YzAsMC0wLjQsMC4xLTAuOSwwLjEgYy0xLjQsMC0yLTEuMi0yLjEtMS45Yy0wLjEtMC40LTAuMy0wLjctMC42LTFDNS4xLDE2LjMsNSwxNi4zLDUsMTYuMkM1LDE2LDUuMywxNiw1LjQsMTZjMC42LDAsMS4xLDAuNywxLjMsMWMwLjUsMC44LDEuMSwxLDEuNCwxIGMwLjQsMCwwLjctMC4xLDAuOS0wLjJjMC4xLTAuNywwLjQtMS40LDEtMS44Yy0yLjMtMC41LTQtMS44LTQtNGMwLTEuMSwwLjUtMi4yLDEuMi0zQzcuMSw4LjgsNyw4LjMsNyw3LjZDNyw3LjIsNyw2LjYsNy4zLDYgYzAsMCwxLjQsMCwyLjgsMS4zQzEwLjYsNy4xLDExLjMsNywxMiw3czEuNCwwLjEsMiwwLjNDMTUuMyw2LDE2LjgsNiwxNi44LDZDMTcsNi42LDE3LDcuMiwxNyw3LjZjMCwwLjgtMC4xLDEuMi0wLjIsMS40IGMwLjcsMC44LDEuMiwxLjgsMS4yLDNjMCwyLjItMS43LDMuNS00LDRjMC42LDAuNSwxLDEuNCwxLDIuM3YyLjZjMCwwLjMsMC4zLDAuNiwwLjcsMC41YzMuNy0xLjUsNi4zLTUuMSw2LjMtOS4zIEMyMiw2LjEsMTYuOSwxLjQsMTAuOSwyLjF6Ii8+PC9zdmc+";
const githubDark =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMzgzODM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPiAgICA8cGF0aCBkPSJNMTAuOSwyLjFjLTQuNiwwLjUtOC4zLDQuMi04LjgsOC43Yy0wLjUsNC43LDIuMiw4LjksNi4zLDEwLjVDOC43LDIxLjQsOSwyMS4yLDksMjAuOHYtMS42YzAsMC0wLjQsMC4xLTAuOSwwLjEgYy0xLjQsMC0yLTEuMi0yLjEtMS45Yy0wLjEtMC40LTAuMy0wLjctMC42LTFDNS4xLDE2LjMsNSwxNi4zLDUsMTYuMkM1LDE2LDUuMywxNiw1LjQsMTZjMC42LDAsMS4xLDAuNywxLjMsMWMwLjUsMC44LDEuMSwxLDEuNCwxIGMwLjQsMCwwLjctMC4xLDAuOS0wLjJjMC4xLTAuNywwLjQtMS40LDEtMS44Yy0yLjMtMC41LTQtMS44LTQtNGMwLTEuMSwwLjUtMi4yLDEuMi0zQzcuMSw4LjgsNyw4LjMsNyw3LjZDNyw3LjIsNyw2LjYsNy4zLDYgYzAsMCwxLjQsMCwyLjgsMS4zQzEwLjYsNy4xLDExLjMsNywxMiw3czEuNCwwLjEsMiwwLjNDMTUuMyw2LDE2LjgsNiwxNi44LDZDMTcsNi42LDE3LDcuMiwxNyw3LjZjMCwwLjgtMC4xLDEuMi0wLjIsMS40IGMwLjcsMC44LDEuMiwxLjgsMS4yLDNjMCwyLjItMS43LDMuNS00LDRjMC42LDAuNSwxLDEuNCwxLDIuM3YyLjZjMCwwLjMsMC4zLDAuNiwwLjcsMC41YzMuNy0xLjUsNi4zLTUuMSw2LjMtOS4zIEMyMiw2LjEsMTYuOSwxLjQsMTAuOSwyLjF6Ii8+PC9zdmc+";
const sunIcon =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzYgNC4yOUwzLjk2IDIuNUwyLjU1IDMuOTFMNC4zNCA1LjdMNS43NiA0LjI5Wk0zIDkuOTVIMFYxMS45NUgzVjkuOTVaTTEyIDBIMTBWMi45NUgxMlYwWk0xOS40NSAzLjkxTDE4LjA0IDIuNUwxNi4yNSA0LjI5TDE3LjY2IDUuN0wxOS40NSAzLjkxWk0xNi4yNCAxNy42MUwxOC4wMyAxOS40MUwxOS40NCAxOEwxNy42NCAxNi4yMUwxNi4yNCAxNy42MVpNMTkgOS45NVYxMS45NUgyMlY5Ljk1SDE5Wk0xMSA0Ljk1QzcuNjkgNC45NSA1IDcuNjQgNSAxMC45NUM1IDE0LjI2IDcuNjkgMTYuOTUgMTEgMTYuOTVDMTQuMzEgMTYuOTUgMTcgMTQuMjYgMTcgMTAuOTVDMTcgNy42NCAxNC4zMSA0Ljk1IDExIDQuOTVaTTEwIDIxLjlIMTJWMTguOTVIMTBWMjEuOVpNMi41NSAxNy45OUwzLjk2IDE5LjRMNS43NSAxNy42TDQuMzQgMTYuMTlMMi41NSAxNy45OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
const moonIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE0IDE1IiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTcuODMyNTMgMTVDMTAuMjQ4NCAxNSAxMi40NTQ5IDEzLjk0NzUgMTMuOTE2NyAxMi4yMjI5QzE0LjEzMyAxMS45Njc4IDEzLjg5NzIgMTEuNTk1MSAxMy41NjMgMTEuNjU2QzkuNzYyODkgMTIuMzQ5IDYuMjczMTYgOS41NTkwNCA2LjI3MzE2IDUuODg1ODZDNi4yNzMxNiAzLjc2OTk4IDcuNDU2MDUgMS44MjQyOSA5LjM3ODU3IDAuNzc2NjZDOS42NzQ5MiAwLjYxNTE3NiA5LjYwMDM5IDAuMTg0OTUxIDkuMjYzNjUgMC4xMjUzOTFDOC43OTE1OCAwLjA0MjAzOSA4LjMxMjU2IDYuODQ0NzRlLTA1IDcuODMyNTMgMEMzLjUwOTA3IDAgMCAzLjM1NDgxIDAgNy41QzAgMTEuNjM5OSAzLjUwMzU2IDE1IDcuODMyNTMgMTVaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==";
const themeIcon = document.getElementById("theme-icon");
const githubIcon = document.getElementById("github-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
    try {
        const trimmedValue = value.trim();

        if (trimmedValue === currCode + "*") {
            res.value = "Reset successfully!";
            setTimeout(() => (res.value = ""), 3500);
            resetit();
            return;
        }

        if (trimmedValue === currCode) {
            res.value = "Opened in new tab!";
            setTimeout(() => (res.value = ""), 3500);
            boutmyBLANK();
            return;
        }

        const sanitizedValue = trimmedValue.replace(/[^0-9+\-*/.]/g, "");

        if (!sanitizedValue) {
            throw new Error("Invalid input...");
            setTimeout(() => (res.value = ""), 3500);
        }

        const calculatedValue = Function(
            `'use strict'; return (${sanitizedValue || 0})`
        )();

        if (isNaN(calculatedValue)) {
            throw new Error("Error!");
            setTimeout(() => (res.value = ""), 3500);
        }

        res.value = calculatedValue;
    } catch (error) {
        res.value = "Error!";
        setTimeout(() => (res.value = ""), 3500);
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
        githubIcon.setAttribute("src", githubLight);
        toast.innerHTML = "Dark Mode 🌙";
    } else {
        theme.setAttribute("href", lightTheme);
        themeIcon.setAttribute("src", moonIcon);
        githubIcon.setAttribute("src", githubDark);
        toast.innerHTML = "Light Mode ☀️";
    }
}

function liveScreen(enteredValue) {
    if (/^[0-9+\-*/.]$/.test(enteredValue)) {
        res.value += enteredValue;
    } else {
        alert("Invalid input!");
    }
}

function keyboardInputHandler(e) {
    if (["Enter", "Backspace"].includes(e.key) || /^[0-9+\-*/.]$/.test(e.key)) {
        e.preventDefault();
    }

    if (e.key >= "0" && e.key <= "9") {
        res.value += e.key;
    } else if (["+", "-", "*", "/", "."].includes(e.key)) {
        res.value += e.key;
    } else if (e.key === "Enter") {
        calculate(res.value);
    } else if (e.key === "Backspace") {
        res.value = res.value.slice(0, -1);
    }
}

document.addEventListener("keydown", keyboardInputHandler);
