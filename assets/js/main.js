let allItems =  document.querySelectorAll(".nav__link");
let elThemeBtn = document.querySelector("#theme-button");

allItems.forEach(item => {
    item.addEventListener("click", e => {
        allItems.forEach(btn => btn.classList.remove("active-link"));
        e.target.classList.add("active-link");
    })
})
window.addEventListener("scroll", (e)=> {
    if(Math.round(window.scrollY) >= 350){
        document.querySelector("header").classList.toggle("scroll-header")
    }
    if(Math.round(window.scrollY) <=  459){
        for(let i = 0; i < allItems.length; i++){
            allItems.forEach(btn => btn.classList.remove("active-link"));
            allItems[0].classList.add("active-link");
        }
    }
    if(Math.round(window.scrollY) >=  459){
        for(let i = 0; i < allItems.length; i++){
            allItems.forEach(btn => btn.classList.remove("active-link"));
            allItems[1].classList.add("active-link");
        }
    }
    if(Math.round(window.scrollY) >=  999){
        for(let i = 0; i < allItems.length; i++){
            allItems.forEach(btn => btn.classList.remove("active-link"));
            allItems[2].classList.add("active-link");
        }
    }
    if(Math.round(window.scrollY) >=  1486){
        for(let i = 0; i < allItems.length; i++){
            allItems.forEach(btn => btn.classList.remove("active-link"));
            allItems[3].classList.add("active-link");
        }
    }
    if(Math.round(window.scrollY) >=  2806){
        for(let i = 0; i < allItems.length; i++){
            allItems.forEach(btn => btn.classList.remove("active-link"));
            allItems[4].classList.add("active-link");
        }
    }
})
elThemeBtn.addEventListener("click", ()=> {
    document.querySelector("body").classList.toggle("dark-theme");
})
