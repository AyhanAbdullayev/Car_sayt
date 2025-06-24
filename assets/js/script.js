let menu = document.getElementById("mt");
let button = document.getElementById("button");
let close_menu = document.getElementById("close")
let up_arrow = document.getElementById("up-arrow")


close_menu.addEventListener("click",()=>{
    let result = close_menu.classList.toggle("close");
    if(result){
        menu.classList.remove("open-menu");
        menu.classList.remove("menu-close");
    }
    else{
        menu.classList.add("open-menu");
        menu.classList.add("menu-close");
    }
})

window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        up_arrow.style.display="flex";
    }
    else{
        up_arrow.style.display="none";
    }
})

button.addEventListener("click",()=>{
    let result =  button.classList.toggle("open");

    if(result){
        menu.classList.add("open-menu");
        menu.classList.add("menu-close");
    }
})
up_arrow.addEventListener("click",()=>{
    window.location.href="#sec"
})