const scriptURL =
    "https://script.google.com/macros/s/AKfycbz7u0kWeSYlRZSL9DIWrz4zvxRGIKumze1thO0acTCsPE8DPFkf5PYipybL2vUu3TSY/exec";
const form = document.forms["Writer-Panel"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
    });
    document.querySelector('.x-submit').innerHTML = "Submitted"
    document.querySelector('.fa-arrow-right').style.display = "none";
    document.querySelector('.submit').disabled = true;
    alert("Your Response Has Been Recorded. You may now close this tab.")
});
