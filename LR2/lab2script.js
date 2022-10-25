const Btn = document.querySelector('.btn')
const Window = document.querySelector('.window');

Btn.addEventListener("click", () => {
    Window.style.display = "block";
})

Window.addEventListener("click", () => {
    Window.style.display = "none";
})