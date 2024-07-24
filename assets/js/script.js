let menu = document.getElementById("mt");
let button = document.getElementById("button");
let close_menu= document.getElementById("close")

close_menu.addEventListener("click",()=>{
    let result = close_menu.classList.toggle("close")
    if(result){
        menu.classList.remove("open-menu")
        menu.classList.remove("menu-close")
    }
    else{
        menu.classList.add("open-menu")
        menu.classList.add("menu-close")
    }
})

button.addEventListener("click",()=>{
    let result =  button.classList.toggle("open");
    if(result){
        menu.classList.add("open-menu")
        menu.classList.add("menu-close")
    }
    else{
        menu.classList.remove("open-menu")
        menu.classList.remove("menu-close")
    }
})
