const buttons = document.querySelectorAll(".btn");
const active = document.querySelectorAll(".hide");
const title = document.querySelector(".content-text");

buttons.forEach(btn => btn.addEventListener("click", () => {
    let btnBtn = btn.getAttribute("data-btn-type");
    switch (btnBtn) {
        case "search" :
            title.innerHTML = "Whoa! You found me!";
            buttons[3].innerHTML = "Hide back";
            active.forEach(element => element.classList.add("show"));
            break;
        case "run" :
            title.innerHTML = "Please don't run!";
            buttons[3].innerHTML = "Close";
            active.forEach(element => element.classList.add("show"));
            break;
        case "hide" :
            active.forEach(e => e.classList.remove("show"));
            break;
    }
}));