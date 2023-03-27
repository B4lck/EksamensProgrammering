import { Vector3 } from "./vector3.js";

export class plane {
    constructor(normalVector, Point) {
        this.normalVector = normalVector;
        this.point = Point;
    }
    
    GetIntersectPoint(Pos0, Vector) {
        let d = Vector3.dot(this.normalVector, Vector);
        if (d == 0) return false;
        let t = (Vector3.dot(this.normalVector, this.point) - Vector3.dot(this.normalVector, Pos0)) / d;
        if (t >= 0.0001) return false;
        return Pos0.add(Vector.scale(t));
    }

    
}