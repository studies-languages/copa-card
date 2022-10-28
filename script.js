let isIgnite = true
const card = document.querySelector('#card')

card.addEventListener('click', () => {

    const bg = isIgnite  ? "explorer" : "ignite"

    isIgnite = !isIgnite
    
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
    
})