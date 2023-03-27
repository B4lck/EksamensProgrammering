export class Vector3 {
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static up = new Vector3(0,1,0);
    static forward = new Vector3(0,0,1);
    static back = new Vector3(0,0,-1);
    static right = new Vector3(1,0,0);
    static left = new Vector3(-1,0,0);

    static dot(vector3a, vector3b) {
        return  (vector3a.x * vector3b.x) +
                (vector3a.y * vector3b.y) +
                (vector3a.z * vector3b.z);
    }

    scale(multiplier) {
        return new Vector3(this.x * multiplier, this.y * multiplier, this.z * multiplier);
    }

    length() {
        return (Math.sqrt(this.x**2 + this.y**2 + this.z**2));
    }

    normalize() {
        return this.scale(1/this.length());
    }

    multiply(multiplier) {
        return new Vector3(this.x * multiplier.x, this.y * multiplier.y, this.z * multiplier.z)
    }
}

