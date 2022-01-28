const primput=document.querySelector(".primput")
const radiji=document.querySelectorAll(".impuce")
const visine1=primput.getBoundingClientRect().width
const belitext=document.querySelector(".podbelitext")
const togl=document.querySelector(".togl ")
const dugmence=document.querySelector(".toglo ")
const julov=document.querySelector(".julov ")
const julovul=document.querySelector(".julov ul ")


const imezavisinu=julovul.getBoundingClientRect().height

console.log(julovul)
console.log(togl)

radiji.forEach(function (item,index) {
   item.setAttribute("data-id",index)
    item.style.width=`${visine1*2}`+"px" //pomnozio sam sa 2 da bude malo vece
 item.addEventListener("click",(e)=>{
  const identitet=e.target.dataset.id
 const duljina=belitext.getBoundingClientRect().width
const stotka=-duljina*identitet//BRAVOOOOOOOOOOOOO
belitext.style.transform="translate(calc("+stotka+"px))"
})
})


const niz=[{
    h3:"prvitext",
    p:"prvip"
},
{
    h3:"drugitext",
    p:"drugip"},
{
    h3:"trecitext",
    p:"trecip"
}

]




const zabeli=niz.map((ni,index)=>{
    return`          <div class="klasa${index}">
    <h3>${ni.h3}</h3>
    <p>${ni.p}</p>
    </div>`


}).join("")

 belitext.innerHTML=zabeli
belitext.style.transform="translate()" 

let varij=false

function klikova() {    //nzm zasto al nekad oce a nekad nece da radi
    const nula=0  
    varij=!varij
    if(varij){
        togl.classList.remove("fas")
        togl.classList.remove("fa-hamburger")
        togl.classList.add("fas")
        togl.classList.add("fa-skull")
        julov.style.height=`${imezavisinu}`+"px"
    }

else{
    togl.classList.remove("fas")
    togl.classList.remove("fa-skull")
    togl.classList.add("fas")
    togl.classList.add("fa-hamburger")
    julov.style.height='0px'
  
}


}


dugmence.addEventListener("click",klikova)
