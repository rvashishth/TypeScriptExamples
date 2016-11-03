class Point2D{
	x: number;
	y: number;

	constructor(x:number, y:number){
		this.x = x;
		this.y = y;
	}

	add(point: Point2D){
		return new Point2D(this.x+point.x, this.y+point.y);
	}
}

class Point3D extends Point2D{
	z: number;

	constructor(x: number, y:number, z:number){
		super(x,y);
		this.z=z;
		console.log("====printing values =="+x,y,z);
	}

	add(point: Point3D){
		var point2d: Point2D = super.add(point);
		return new Point3D(point2d.x,point2d.y,point.z+this.z);
	}
}

new Point3D(1,2,3).add(new Point3D(1,2,3));