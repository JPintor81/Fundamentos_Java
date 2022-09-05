//  Unir 2 o mas objetos
   const producto ={
        precio : 30,
        nombre : "Tablet",
        disponible : true
    }

    const cliente = {
        nombre: "Jorge",
        premium : true
    }


//* este metodo no se utiliza porque modifica el obejto original
    //const clienteProducto = Object.assign(producto,cliente)

//* Este metodo une los dos objetos sin modificar los originales
    const clienteProducto2 = {...producto,...cliente}

//* Este metodo no une los objetos sino que los agrega a un tercer metodo
    const nuevoObjeto = {
        producto : {...producto},
        cliente : {...cliente}
    }

    
    console.table(nuevoObjeto)