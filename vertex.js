import { Camera } from "./main.js";

export class Vertex {
    constructor(position) { // tager Vector 3 som argument
        this.position = position;
    }

    project() { // Skal returne en x og y position af Vertexen
        // Udregn t, så vi kan opstille en parameter fremstilling
        let t = (canvas.position.z - Camera.position.z) / (Camera.position.z - this.position.z);  
            
        // Udregn x & y ud fra t        
        let x = Camera.position.x + t * (Camera.position.x - this.position.x);
        let y = Camera.position.y + t * (Camera.position.y - this.position.y);
        
        // Retuner x & y
        return {x: x, y: y};
    }
}