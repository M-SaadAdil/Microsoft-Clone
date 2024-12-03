let body = document.getElementById("body");
let features = document.getElementById("features");
let ham = document.getElementById("hamburger");
let isMenuOpen = false;

ham.addEventListener("click", ()=> {
    isMenuOpen = !isMenuOpen;
    if(isMenuOpen){
        features.classList.remove("-translate-x-96")
        features.classList.add("menu-expanded")
    }
    else{
        features.classList.add("-translate-x-96"),
        features.classList.remove("menu-expanded")

    }
})
// features.classList.contains("menu-expanded") && ham.addEventListener("click", ()=> {
//     features.classList.add("-translate-x-96"),
//     features.classList.remove("menu-expanded")
// })
// ham.addEventListener("dblclick", ()=> {
    //     features.classList.add("-translate-x-96")
    //     features.classList.remove("menu-expanded")
    // })
    // if(features.classList.contains("menu-expanded")){
        //     if(){
            
        //     }
        // }
    // ham.onclick(features.classList.remove("-translate-x-96"));
        