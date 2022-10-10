
const POINTS_ODJ = [
    "point numero 1",
    "point numero 2",
    "point numero 3",
    "point numero 4",
]

const BLAGUES = [
    "blague 1",
    "blague 2",
    "blague 3",
    "blague 4",
]

const donnerPoint = () => {
    if (Math.random() > 0.8 || POINTS_ODJ.length === 0) {
        alert(BLAGUES[Math.floor(Math.random()*BLAGUES.length)])
    } else {
        const index = Math.floor(Math.random()*POINTS_ODJ.length)
        const point = POINTS_ODJ[index]
        POINTS_ODJ.splice(index)
        alert(point)
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

    ev.target.appendChild(element);

    if (ev.target.id === data + '-container') {
        element.draggable = false
        element.onmouseenter = () => {}
        ev.target.style.border = '3px solid lightgreen'
        ev.target.style.borderRadius = '15px'
        setTimeout(donnerPoint, 200)
    }
}
