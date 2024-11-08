const hide = document.querySelector(".btn")
const show = document.querySelector(".btnclose")
const shareList = document.querySelector(".share")
hide.addEventListener("click", function(){
    show.classList.remove("hidden")
    hide.classList.add("hidden")
    shareList.classList.remove("hidden")
})
show.addEventListener("click", function(){
    hide.classList.remove("hidden")
    show.classList.add("hidden")
    shareList.classList.add("hidden")
})