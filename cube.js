import { Line } from "./line.js";
import { Vertex } from "./vertex.js";
import { Vector3 } from "./vector3.js";

export class Cube {
    constructor(position, size) {
        this.position = position;
        this.size = size;

        // Alle punkterne
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

        // Alle linjerne
        this.Lines = [
            new Line(this.Verticies[0], this.Verticies[1]),
            new Line(this.Verticies[0], this.Verticies[2]),
            new Line(this.Verticies[1], this.Verticies[3]),
            new Line(this.Verticies[2], this.Verticies[3]),
            new Line(this.Verticies[4], this.Verticies[5]),
            new Line(this.Verticies[5], this.Verticies[7]),
            new Line(this.Verticies[6], this.Verticies[7]),
            new Line(this.Verticies[7], this.Verticies[3]),
            new Line(this.Verticies[4], this.Verticies[6]),
            new Line(this.Verticies[2], this.Verticies[6]),
            new Line(this.Verticies[4], this.Verticies[0]),
            new Line(this.Verticies[5], this.Verticies[1]),
        ]
    }

    draw(ctx) {
        for (let line of this.Lines) {
            line.draw(ctx);
        }
    }
}