function calc(){
    let a = document.getElementById("number1")
    let adult = parseInt(a.value)
    let b = window.document.getElementById("number2")
    let children = parseInt(b.value)
    let c = window.document.getElementById("number3")
    let time = parseInt(c.value)
    let d = window.document.getElementById("one")
    let e = window.document.getElementById("two")
    let f = window.document.getElementById("three")
    let children2 = children*0.5
    let div = document.getElementsByTagName("div")[0]

    if(time<=6){
        let carne = ((adult + children2) * 400) /1000
        let cerveja = Math.ceil((adult * 1200) /350)
        let bebida = Math.ceil(((adult + children2) * 1000) /2000)
        d.innerHTML =carne + " KG de carne"
        e.innerHTML = cerveja + " Latas de cerveja"
        f.innerHTML = bebida + " Garrafas de 2L de água/refrigerante"
        div.style = "height: 360px"
    }
    if(time>6){
        let carne = ((adult + children2) *600) /1000
        d.innerHTML = carne + " KG de carne"
        let cerveja = Math.ceil((adult * 2000) /350)
        e.innerHTML = cerveja + " Latas de cerveja"
        let bebida = Math.ceil(((adult + children2) * 1500) /2000)
        f.innerHTML = bebida + " Garrafas de 2L de água/refrigerante"
        div.style = "height: 360px"
    }
}

let adult = 5
let children = 2

let children2 = children*0.5
console.log(((adult + children2) *400) /1000)
let cerveja = Math.ceil((adult * 1200) /350)

console.log(cerveja)

let bebida = Math.ceil(((adult + children2) * 1000) /2000)

console.log(bebida)








