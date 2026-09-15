document.addEventListener('DOMContentLoaded', ()=>{

    const navBar = document.getElementById("navbar")
    const hamburger = document.getElementById("hamburger")
    const navMenu = document.getElementById("nav-menu")
    const themeToggle = document.getElementById("theme-toggle")

    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle('active')
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".nav-link").forEach(link =>{
        link.addEventListener("click", ()=>{
            hamburger.classList.remove('active')
            navMenu.classList.remove("active")
        });
    });

    window.addEventListener("scroll", () =>{
        if(window.scrollY > 50){
            navBar.classList.add("scrolled")
        }else{
            navBar.classList.remove("scrolled")
        }
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme)

    themeToggle.addEventListener("click", () =>{
        const currentTheme = document.documentElement
    })
})