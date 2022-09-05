// Objetos 
    
/*     const precio= 30
    const nombre = "Tablet"
    const disponible = true */

    const producto ={
        precio : 30,
        nombre : "Tablet",
        disponible : true
    }

    console.log(producto)
    console.table(producto)

    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.disponible)

// Destructuring: Extrae los datos dentro del Objeto

    const { nombre,precio,disponible } = producto
    console.log(nombre)
    console.log(precio)
    console.log(disponible)

// Object Literal Enhacement: Inserta Datos Dentro del Objeto

    const autenticado = true
    const usuario = "Jorge"

    const nuevoObjeto = {
        usuario,
        autenticado
    }

    console.table(nuevoObjeto)


