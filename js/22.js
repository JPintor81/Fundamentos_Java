// Selectores del DOM

const heading = document.querySelector('.heading')

// console.log(heading)
// console.log(heading.textContent)
// console.log(heading.tagName)
// console.log(heading.classList)
// console.log(heading.id)

const enlaces = document.querySelectorAll('.navegacion a')

console.log(typeof enlaces)

// Itera en el objeto para sacar el valor de cada uno
for (let i = 0; i < enlaces.length; i++) {
    const element = enlaces[i];
    console.log(element.textContent)
}