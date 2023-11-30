window.onload = function() {
    const myName = document.getElementById("name");
    const myEmail = document.getElementById("email");
    const myComment = document.getElementById("comments");
    
    myEmail.addEventListener("input", (event) => {
        if (myEmail.validity.typeMismatch) {
          myEmail.setCustomValidity("Please enter a valid email address");
        } else {
          myEmail.setCustomValidity("");
        }
      });

    myComment.addEventListener("input", (event) => {
        if(myComment.validity.typeMismatch) {
            myComment.setCustomValidity("Only regular characters allowed (ex: a, 1, $)");
        }
        else {
            myComment.setCustomValidity("");
        }
    });

    const toggleButton = document.querySelector('input[type="checkbox"]');
    const docBody = document.body;

    if(localStorage.getItem("theme") === "darkmode") {
        toggleButton.checked = true;
        docBody.classList.add("dark-mode");
        docBody.classList.remove("light-mode");
    }
    else {
        toggleButton.checked = false;
        docBody.classList.add("light-mode");
        docBody.classList.remove("dark-mode");
    }

    toggleButton.addEventListener("change", () => {
    if(toggleButton.checked) {
        docBody.classList.add("dark-mode");
        docBody.classList.remove("light-mode");
        localStorage.setItem("theme", "darkmode");
    }
    else {
        docBody.classList.add("light-mode");
        docBody.classList.remove("dark-mode");
        localStorage.setItem("theme", "lightmode");
    }
    });
}