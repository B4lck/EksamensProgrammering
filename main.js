// Importer de ting der skal importeres
import { Vector3 } from "./vector3.js";
import { Cube } from "./cube.js";

// Opsæt canvasen
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Kameraet
export let Camera = {
    position: new Vector3(0,0,-100),
    speed: 5
}
canvas.position = new Vector3(0,0,0);

// Cubes i scenen
let cube = new Cube(new Vector3(200, 200, 400), 200);
let cube2 = new Cube(new Vector3(800, 200, 400), 200);

// Funktion der kører hvert frame
function update() {
    // Tegn baggrunden
    ctx.fillStyle = "Black";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    // Tegn
    cube.draw(ctx);
    cube2.draw(ctx);

    // Genstart funktionen næste frame
    requestAnimationFrame(update);
}
update();



// Controller
document.addEventListener("keydown", (e) => {
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
});