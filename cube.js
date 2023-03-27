import { Vertex, Line } from "./main.js";
import { Vector3 } from "./vector3.js";

export class Cube {
    constructor(position, size) {
        this.position = position;
        this.size = size;

        this.Verticies = [
            new Vertex(new Vector3(this.position.x + size, this.position.y + size, this.position.z + size)),
            new Vertex(new Vector3(this.position.x + size, this.position.y - size, this.position.z + size)),
            new Vertex(new Vector3(this.position.x + size, this.position.y + size, this.position.z - size)),
            new Vertex(new Vector3(this.position.x + size, this.position.y - size, this.position.z - size)),
            new Vertex(new Vector3(this.position.x - size, this.position.y + size, this.position.z + size)),
            new Vertex(new Vector3(this.position.x - size, this.position.y - size, this.position.z + size)),
            new Vertex(new Vector3(this.position.x - size, this.position.y + size, this.position.z - size)),
            new Vertex(new Vector3(this.position.x - size, this.position.y - size, this.position.z - size)),
        ]
        this.Lines = [
            new Line(this.Verticies[0], this.Verticies[1]),
            new Line(this.Verticies[1], this.Verticies[2]),
            new Line(this.Verticies[2], this.Verticies[3]),
            new Line(this.Verticies[3], this.Verticies[4]),
            new Line(this.Verticies[4], this.Verticies[5]),
            new Line(this.Verticies[5], this.Verticies[6]),
            new Line(this.Verticies[6], this.Verticies[7]),
            new Line(this.Verticies[7], this.Verticies[0]),
        ]
    }

    draw() {
        for (let line of this.Lines) {
            line.draw();
        }
    }
}