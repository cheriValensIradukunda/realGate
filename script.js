window.addEventListener("scroll",() => {
    let nav = document.getElementsByClassName("scrollNav")[0]
    if(window.scrollY > 200){
        // console.log(don)
        nav.style.display = "block"
    }else{
        nav.style.display = "none"
    }
})