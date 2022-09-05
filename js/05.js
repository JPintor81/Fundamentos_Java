// Manipulacion de Objetos

    const producto ={
        precio : 30,
        nombre : "Tablet",
        disponible : true
    }

// Reescribe el valor de una propiedad del Objeto    
    producto.nombre = "Monitor Curvo"

//Agrega una propiedad inexistente
    producto.codigo = "CFG-9873-0"
    
// Eliminar una propiedad
    delete producto.disponible
    
//Evita que el Objeto sea Modificado
    
    Object.freeze(producto)//Evita que el Objeto sea Modificado

    producto.nombre = "Televisor"

    console.table(producto)