function calc() {
    let a = document.getElementById("number1") //aq eu passei para let a o elemento com id number1
    let adult = parseInt(a.value) //aq eu passei para adult o value de let a (parseInt para indicar q é número)
    let b = window.document.getElementById("number2") //aq eu passei para let b o elemento com id number2
    let children = parseInt(b.value) //aq eu passei para children o value de let b (parseInt para indicar q é número)
    let c = window.document.getElementById("number3") //aq eu passei para let c o elemento com id number3
    let time = parseInt(c.value) //aq eu passei para time o value de let c (parseInt para indicar q é número)
    let d = window.document.getElementById("one") //aq eu passei para let d o elemento com id one
    let e = window.document.getElementById("two") //aq eu passei para let e o elemento com id two
    let f = window.document.getElementById("three") //aq eu passei para let f o elemento com id three
    let children2 = children * 0.5 //aq eu fiz uma nova variável e multipliquei a var children por 0*5
    let div = document.getElementsByTagName("div")[0] //aq eu passei para div d o elemento [0] de div

    if (time <= 6) { //aq uma condição
        let carne = ((adult + children2) * 400) / 1000 //aq fiz uma variável nova, somei a var adult com children 2, multipliquei por 400, dps dividi por 1000 para ter o resultado de qnts kg de carne são necessários
        let cerveja = Math.ceil((adult * 1200) / 350) // aq fiz uma nova variável, passei math.ceil para arredondar para cima, multipliquei adult por 1200ml e dps dividi por 350 q são os ml de uma latinha
        let bebida = Math.ceil(((adult + children2) * 1000) / 2000) // fiz uma nova variável, math.ceil para arrendondar para cima, somei adult com children multipliquei por 1000, dps dividi por 2000 para saber quantas garrafas de 2L são necessárias
        d.innerHTML = carne + " KG de carne" //aq juntei tudo
        e.innerHTML = cerveja + " Latas de cerveja" //aq juntei tudo
        f.innerHTML = bebida + " Garrafas de 2L de água/refrigerante" //aq juntei tudo
        div.style = "height: 360px" //aq aumentei o tamanho da div para mostrar o resultado
    }
    if (time > 6) { //aq outra condição
        let carne = ((adult + children2) * 600) / 1000 //aq fiz uma variável nova, somei a var adult com children 2, multipliquei por 600, dps dividi por 1000 para ter o resultado de qnts kg de carne são necessários
        d.innerHTML = carne + " KG de carne" //aq juntei tudo
        let cerveja = Math.ceil((adult * 2000) / 350) // aq fiz uma nova variável, passei math.ceil para arredondar para cima, multipliquei adult por 2000ml e dps dividi por 350 q são os ml de uma latinha
        e.innerHTML = cerveja + " Latas de cerveja" //aq juntei tudo
        let bebida = Math.ceil(((adult + children2) * 1500) / 2000) // fiz uma nova variável, math.ceil para arrendondar para cima, somei adult com children multipliquei por 1500ml, dps dividi por 2000 para saber quantas garrafas de 2L são necessárias
        f.innerHTML = bebida + " Garrafas de 2L de água/refrigerante" //aq juntei tudo
        div.style = "height: 360px" //aq aumentei o tamanho da div para mostrar o resultado
    }
}