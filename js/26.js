//* Eventos del DOM - Submit

/* 
! Imprime lo el Usuario y contrasena Insertados
const formula = document.querySelector('#formulario')
formula.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const contra = document.querySelector('.password').value

    console.log("Nombre: " + nombre)
    console.log("Password: " + contra)

    console.log("Enviaste Formulario")
}) */


const formula = document.querySelector('#formulario')
formula.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const nombre = document.querySelector('.nombre').value
    const contra = document.querySelector('.password').value

    if (nombre ==='') {
        console.log('El campo del Nombre esta vacio.')
    }else if (contra === '') {
        console.log('El Campo del Password esta vacio')
    }else{
        console.log('Todo bien todo correcto y yo que me alegro')
    }

    console.log('Enviaste el Formulario')
})
