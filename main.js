import { plane } from "./plane.js";
import  {Vector3} from "./vector3.js";
import { Cube } from "./cube.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const Camera = {
    position: new Vector3(0,0,-100)
}

const _canvas = {
    plane: new plane(new Vector3(0,0,-1), new Vector3(0,0,0))
}

export class Vertex {
    constructor(position) { // tager Vector 3
        this.position = position;
    }

    project() {
        return _canvas.plane.GetIntersectPoint(Camera.position, this.position.sub(Camera.position));
    }
}

canvas.position = new Vertex(0,0,0);

export class Line {
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }
    
    draw() {
        console.log(v1.project())
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.beginPath()
        ctx.moveTo(v1.project().x, v1.project().y);
        ctx.lineTo(v2.project().x, v2.project().y);
        ctx.stroke();
    }
}



ctx.fillStyle = "Black";
ctx.fillRect(0,0,canvas.width, canvas.height);

let v1 = new Vertex(new Vector3(50, 40, 60));
let v2 = new Vertex(new Vector3(300, 200, 60));

function draw() {
    let cube = new Cube(new Vector3(canvas.width / 2, canvas.height / 2, 500), 50);
    
    cube.Lines[0].draw();
    cube.Lines[1].draw();

    console.log(cube.Lines[0], cube.Lines[1]);
}

draw();