const ham = document.getElementById("ham");
const links = document.getElementById("links");
ham.addEventListener("click", () => {
    links.classList.toggle("show");
});