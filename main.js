const toggleTheme = document.getElementById("toggleTheme");
const menuLinks = document.querySelectorAll(".menu__link");
const rootHTML = document.documentElement;

toggleTheme.addEventListener("click", () => {
    const currentTheme = rootHTML.getAttribute("data-theme");

    if(currentTheme === "dark"){
        rootHTML.setAttribute("data-theme", "light");
    } else {
        rootHTML.setAttribute("data-theme", "dark");
    }
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
  })