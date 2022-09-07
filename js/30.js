//? fetch API

const url = "https://jsonplaceholder.typicode.com/comments"

const consutarApi = () => {
    fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((resultado) => {
            resultado.forEach(comenteario => {
                console.log(comenteario)
            });
        })
}

//consutarApi()

const consutarApi2 = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    resultado.forEach(comentarios => {
        console.log(comentarios)
    });
}

//consutarApi2()

const consutarApi3 = async () => {
    const respuesta = await fetch(url)
    console.log('despues de respuesta')
    const resultado = await respuesta.json()
    console.log('despues del resultado')
}

consutarApi3()