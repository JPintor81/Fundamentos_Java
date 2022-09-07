//? 39. Múltiples Async / Await y Performance

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

//! Consulta Original
    const consutarApi = async () => {
        const respuesta = await fetch(url)
        console.log('despues de respuesta')
        const resultado = await respuesta.json()
        console.log('despues del resultado')
    }
    //consutarApi()

//! la Siguiente consulta va encontra del performans de la pagina, puesto que espera linea a linea cada consulta retrasando asi el cargue de los datos
    const consutarApi2 = async () => {
        const inicio = performance.now()

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        // console.log(resultado)

        console.log('Iniciando la 2da consulta')

        const respuesta2 = await fetch(url2)
        const resultado2 = await respuesta2.json()
        // console.log(resultado2)    

        const fin = performance.now()

        console.log(`Tiempo primera consulta: ${inicio - fin} ms`)
    }
    consutarApi2()

//!  

    const consutarApi3 = async () => {  
        const inicio = performance.now()//Inicia a medir el tiempo de ejecucion del siguinte codigo

        const [respuesta, respuesta2] = await Promise.all([fetch(url),fetch(url2)])  

        const resultado = await respuesta.json()
        const resultado2 = await respuesta2.json()  

        // console.log(resultado)  
        // console.log(resultado2)
        const fin = performance.now() // Terminina la medicion del tiempo del codigo
        
        console.log(`Tiempo de la Segunda consulta: ${inicio - fin} ms`)//imprime el tiempo que tarde en ejecutarse el codigo entre el inicio de la primera const y el llamdao de la sugunda const.
    }
    consutarApi3()

