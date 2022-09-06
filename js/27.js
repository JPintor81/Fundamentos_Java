//? 

const formula = document.querySelector('#formulario')
formula.addEventListener('submit', function (e) {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const contra = document.querySelector('.password').value

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')

    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia) {
        alertaPrevia.remove()
    }
    if (nombre === '' && contra === '') {
        alerta.textContent = 'Los Campos "Nombre" Y "Password" esta vacios'
        alerta.classList.add('error')
    }else if (nombre === '') {
        alerta.textContent = 'El campo del Nombre esta vacio.'
        alerta.classList.add('error')
    } else if (contra === '') {
        alerta.textContent = 'El Campo del Password esta vacio'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todo bien todo correcto y yo que me alegro'
        alerta.classList.add('exito')
    }
    console.log(alerta)

    formula.appendChild(alerta)
})