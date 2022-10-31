let isIgnite = true

function changeCard(event) {
    const card = event.currentTarget
    const bg = isIgnite 
    ? "explorer" 
    : "iginite" 
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}