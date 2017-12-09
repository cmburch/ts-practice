class Point2 {
   
    constructor(private _x?:number,private _y?: number){   
    }

    draw(){
        console.log('X' + this._x + 'Y' + this._y);
    }
    getDistance(another: Point){
        //...
    }
    get x(){
        return this._x;
    }
    set x(value){
       if(value < 0)
           throw new Error('value cannot be less than zero');

           this._x = value;
       
    }
}

let point2 = new Point2(1,2);
let x = point2.x;
point2.x = 1;

point.draw();