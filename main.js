import  {Vector3} from "./vector3.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Vertex {
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    project() {
        //return projektionen af vertexen.
        //projektionen består af x og y positionen på skærmen.
    }
}

canvas.position = new Vertex(0,0,0);

class Line {
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }
    draw() {
        let v1p = Project(v1);
        let v2p = Project(v2);
    }
}



ctx.fillStyle = "Black";
ctx.fillRect(0,0,canvas.width, canvas.height);
