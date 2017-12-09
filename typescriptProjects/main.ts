function log(message){
    console.log(message);
}

let message = 'Hello World';
log(message);

//testing vs code

// let count = 5;
// count = 'a';

//type assertion has two ways to declare
// let message1;
// message1 = 'abc';

// let endswithC = (<string>message).endsWith('c');
// let alternativeWay = (message1 as string).endsWith('c');


//they code above has no cohesion like groups should be place together

//use class for a better cohesion
class Point {
    //call them fields

    //these variables are no long needed because of the redefined constructor
    // private x: number; 
    // private y: number;

    //constructor reserved keyword in typescipt
    //the ? makes parameters optional

    //below the constructor is a better and shorter way

    // constructor(x?:number,y?: number){
    //     this.x = x;
    //     this.y = y;
    // }

    constructor(private x?:number,private y?: number){   
    }

    draw(){
        console.log('X' + this.x + 'Y' + this.y);
    }
    getDistance(another: Point){
        //...
    }
    
}

let point = new Point();
//thes variables are all private and cannot be accessed
// point.x = 1;  
// point.y = 2;

point.draw();