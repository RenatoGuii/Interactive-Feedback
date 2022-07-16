let container1var = document.querySelector("#container1")
let container2var = document.querySelector("#container2")
let respostavar = document.querySelector("#resposta")

function findSelector () {
    var valor = document.querySelector('input[name="feedback"]:checked')
    if (valor != null) {
        respostavar.innerHTML = `You selected ${valor.value} out of 5`
        return 1 
    } else {
        window.alert ('[ERRO] Verifique seus dados novamente!')
        return 0
    }
}

function clicar () {
    if (findSelector () == 0) {
        return 
    } else {
        findSelector ()
        container1var.style.display = "none"
        container2var.style.display = "block"
    }
}




    