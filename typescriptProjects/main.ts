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

//interface defines shape of object
interface Point1 {
    x:number,
    y:number
}

let drawPoint = (point:Point1)=>{
    //..code goes here
}

drawPoint({
   x :1,
   y :2
})

//they code above has no cohesion like groups should be place together

//use class for a better cohesion
class Point {
    //call them fields
    x:number; 
    y:number;

    draw(){
        console.log('X' + this.x + 'Y' + this.y);
    }
    getDistance(another: Point){
        //...
    }
}

let point = new Point();
point.x = 1;
point.y = 2;

point.draw();