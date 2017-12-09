class Point2 {
   
    constructor(private x?:number,private y?: number){   
    }

    draw(){
        console.log('X' + this.x + 'Y' + this.y);
    }
    getDistance(another: Point){
        //...
    }
    get X(){
        return this.x;
    }
    set X(value){
       if(value < 0)
           throw new Error('value cannot be less than zero');

           this.x = value;
       
    }
}

let point2 = new Point2(1,2);
let x = point2.X;
point2.X = 1;

point.draw();