console.log("hfhfh")
document.querySelector(".char").onclick = function(){
    document.querySelector(".article-title").innerHTML = "abc"
}
document.querySelector(".article-span").onmouseover = function(){
    document.querySelector("nav").style.background = "red"
}
document.querySelector(".article-span").onmouseout = function(){
    document.querySelector("nav").style.background = "green"
}
document.querySelector(".nav-img").onclick = function(){
    alert("abc")
}
let prevScrolPos = window.scrollY
window.onscroll = function(){
    let carentScrollPos = window.scrollY
    if (prevScrolPos > carentScrollPos){
        document.querySelector("nav").style.top = "0"
    }
    else{
        document.querySelector("nav").style.top = "-60px"
    }
    prevScrolPos = carentScrollPos
}
document.querySelector(".section-card-img3").onclick = function(){
    document.querySelector(".section-card-3").style.background = "gray"
    document.querySelector(".section-card-title3").innerHTML = "Ультимейт 2"
}
document.querySelector("figcaption").onclick = function(){
    document.querySelector(".menu").classList.toggle("menu-open")

}
document.querySelector(".clous").onclick = function(){
    document.querySelector(".menu").classList.remove("menu-open")
}
