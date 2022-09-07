//? Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoString() {
    return "Este texto proviene de una funcion"
}

// * concatena Con el Simbolo "+"
console.log(producto + " $" + precio + " Dolares, Marca: " + marca)

// * concatena con la ","
console.log(producto , " $" + precio , " Dolares, Marca: " , marca)

//* concatena como string, variables y funciones
console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoString()}`)
