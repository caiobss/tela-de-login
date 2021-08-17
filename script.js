function façapost(url, body){
    console.log('body', body)
    let request = new XMLHttpsRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify (body))

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}
function cadastro(){
    event.preventDefault()
     let url = 'https://127.0.0.1:5500/index.html'
     let email = document.querySelector("#email").value
     let senha = document.querySelector("#senha").value
     console.log(email)
     console.log(senha)

    body = {
        "email" : email,
        "senha" : senha
    }
    façapost(url, body)
}
