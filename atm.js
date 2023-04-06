const screen = document.querySelector(".atmDisplayPantalla")
const inputCard = document.querySelector(".atmCard div")

screen.innerText = 'Bienvenido al ATM'
screen.innerHtml = '<h1> Bienvenido al ATM </h1>'

inputCard.addEventListener ('click', function () {
    screen.innerText = 'Inserte su PIN'
})

