let doc = document ;
let menuBtn = doc.querySelector(".mobile-menu-opener")
let menuLinks = document.querySelectorAll(".menu__link")
let menu = doc.querySelector(".mobile-menu")
let svgHearts = doc.querySelectorAll("svg")
let svgContainer = doc.querySelectorAll(".products__heart")
let scroll = doc.querySelector(".scroll")
let scrollToUp = doc.querySelector(".footer__scroll")

window.addEventListener("scroll" , ()=> {
    let documentHeight = document.body.clientHeight
    let windowHeight =  window.innerHeight
    let scrolled = window.scrollY
    let percentAge = scrolled / (documentHeight - windowHeight);
    scroll.style.width = `${Math.round((percentAge*100))}%`
    let result = percentAge*100
    console.log(percentAge);
    
})

let menuLiner = doc.querySelector(".mobile-menu-opener__liner")
menuBtn.addEventListener("click" , (e)=>{
    menuLiner.classList.toggle("mobile-menu-opener__liner--open")
    menu.classList.toggle("mobile-menu--open")
})

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener("click" , (e)=>{
        e.preventDefault()
        menuLinks.forEach((e)=>{
            e.classList.remove("menu__link--active")
        })
        menuLink.classList.add("menu__link--active")
    })
})
svgContainer.forEach(svg => {
    svg.addEventListener("click" , (e)=>{
        e.target.classList.toggle("products__svg-actived")
        
    })
    svg.addEventListener("dblclick" , (e)=>{
        e.preventDefault()
    })
})


scrollToUp.addEventListener("click" , ()=>{
    scrollTo(0,0)
})
