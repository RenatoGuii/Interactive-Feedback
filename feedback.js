let container1var = document.querySelector("div#container1")
let container2var = document.querySelector("div#container2")
let respostavar = document.querySelector("div#resposta")

function clicar () {
    var valor = document.querySelector('input[name="feedback"]:checked')
        container1var.style.display = "none"
        container2var.style.display = "block"
        respostavar.innerHTML = `You selected ${valor.value} out of 5`
}






    