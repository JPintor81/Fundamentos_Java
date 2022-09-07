//? fetch API

const url = "https://jsonplaceholder.typicode.com/comments"

const consutarApi = () =>{    
    fetch(url)
        .then((respuesta)=>{
            return respuesta.json()
        })
        .then((resultado)=>{
            resultado.forEach(comenteario => {
                console.log(comenteario)
            });
        })
}

consutarApi()