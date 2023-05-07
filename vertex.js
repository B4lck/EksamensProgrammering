import { Camera } from "./main.js";

export class Vertex {
    // #CertifiedBalckAlfaMoment
    constructor(position) { // tager Vector 3 som argument
        this.position = position;
    }

    project() { // Skal returne en x og y position af Vertexen
        // Udregn t, så vi kan opstille en parameter fremstilling
        let t = (canvas.position.z - Camera.position.z) / (Camera.position.z - this.position.z);  

        // Udregn retningsvektoren til parameter fremstillingen
        let rx = Camera.position.x - this.position.x;
        let ry = Camera.position.y - this.position.y;
            
        // Udregn x & y ud fra t med en parameter fremstilling       
        let x = Camera.position.x + t * rx;
        let y = Camera.position.y + t * ry;
        
        // Retuner x & y
        return {x: x, y: y};
    }
}