
const POINTS_ODJ = [
    "Couverture BePrepared",
    "Petites informations diverses",
    "Les ICares",
    "DALA : Danse Avec Les Assos",
    "Teaser Voyage Amsterdam BDE",
    "Teaser WEPN",
    "Teaser Apartés",
    "Prochain Direct Télévisé ! :D",
]

const BLAGUES = [
    "Rondou'Doom est une personne incroyable",
    "Venez le 10 novembre",
    "Avec quoi est-ce qu'on ramasse les papayes ? Avec une foufourche !",
    "Orlysal est un dieu, juste parfois il parle de caca",
    "C'est un pingouin qui respire par les fesses, il s'assoit et il meurt",
    "Pourquoi les tyranosaures ne peuvent pas applaudir avec leurs pattes ? Parce qu'ils sont morts",
]

let left = 18
let isGivingPoints = false

const donnerPoint = () => {
    left -= 1

    if (left < POINTS_ODJ.length) {
        isGivingPoints = true
    }

    if (isGivingPoints) {
        const point = POINTS_ODJ[0]
        POINTS_ODJ.splice(0,1)
        alert(point)
    } else {
        alert(BLAGUES[Math.floor(Math.random()*BLAGUES.length)])
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    const element = document.getElementById(data)

    element.parentElement.style.border = '1px solid black'
    element.parentElement.style.borderRadius = '0px'
    element.parentElement.ondragover = allowDrop

    if (element.parentElement.children[0].style.display === 'none') {
        element.parentElement.children[0].style.display = 'block'
    }

    let target
    if (ev.target.tagName === 'H4') {
        target = ev.target.parentElement
    } else {
        target = ev.target
    }

    if (target.children[0]) {
        target.children[0].style.display = 'none';
    }

    target.appendChild(element);
    target.ondragover = undefined

    if (target.id === data + '-container') {
        element.draggable = false
        element.onmouseenter = () => {}
        target.style.border = '3px solid lightgreen'
        target.style.borderRadius = '15px'
        setTimeout(donnerPoint, 200)
    } else if (target.id !== '') {
        target.style.border = '3px solid red'
        target.style.borderRadius = '15px'
    }
}
