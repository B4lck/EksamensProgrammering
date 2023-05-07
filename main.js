// Importer de ting der skal importeres
import { Vector3 } from "./vector3.js";
import { Cube } from "./cube.js";
import { Pyramid } from "./pyramid.js";
import { Wedge } from "./wedge.js";

// Opsæt canvasen
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Kameraet
export let Camera = {
    position: new Vector3(0,0,-100),
    speed: 5
}
canvas.position = new Vector3(0,0,-20);

// Objekter i scenen
let Objekter = [
    new Cube(new Vector3(400, 200, 200), 100),
    new Pyramid(new Vector3(800, 200, 200), 100),
    new Wedge(new Vector3(1200, 200, 200), 100)
];

// Funktion der kører hvert frame
function update() {
    // Tegn baggrunden
    ctx.fillStyle = "Black";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    // Tegn alle objekter i scenen
    for (let objekt of Objekter) {
        objekt.draw(ctx);
    }

    // Genstart funktionen næste frame
    requestAnimationFrame(update);
}
update();



// Controller
document.addEventListener("keydown", (e) => {
    // Ryk kameraet side til side og op og ned.
    if (e.key == "d") {
        Camera.position.x += Camera.speed;
    }

    if (e.key == "a") {
        Camera.position.x -= Camera.speed;
    }

    if (e.key == "w") {
        Camera.position.y -= Camera.speed;
    }

    if (e.key == "s") {
        Camera.position.y += Camera.speed;
    }

    // Ryk canvasen tættere på
    if (e.key == "e") {
        canvas.position.z += Camera.speed;
    }

    if (e.key == "q") {
        canvas.position.z -= Camera.speed;
    }
});

