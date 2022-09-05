// Objetos - Destructuring con 2 o mas ojetos   
   const producto ={
        precio : 30,
        nombre : "Tablet",
        disponible : true
    }

    const cliente = {
        nombre: "Jorge",
        premium : true
    }

    const { nombre,precio,disponible} = producto
    const {nombre:nombreCliente,premium} = cliente

    console.log(nombre,precio,disponible)
    console.log(nombreCliente,premium)