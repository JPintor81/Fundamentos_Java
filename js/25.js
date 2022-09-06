// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function(e) {
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e) {
    console.log(e.target.value)
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 500);
} 

/* const total = "El nombre es: "
const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function(e) {
    console.log(e.target.value)
                total  = total.concat(e.target.value)
}) */