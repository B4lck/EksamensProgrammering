import { Vertex } from "./vertex.js";

export class Line {
    // En linje består af 2 punkter, som hver bliver kaldet v1 og v2.
    constructor(_v1, _v2) {
        this.v1 = _v1;
        this.v2 = _v2;
    }
    
    // Funktionen for at tegne en linje
    draw(ctx) {
        // Indstil tykkelsen og farven af linjen
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";

        // Få positionen af punkterne
        let v1p = this.v1.project();
        let v2p = this.v2.project();
        
        // Tegn linjen mellem punkterne
        ctx.beginPath()
        ctx.moveTo(v1p.x, v1p.y);
        ctx.lineTo(v2p.x, v2p.y);
        ctx.stroke();
    }
}