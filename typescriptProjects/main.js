function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
var drawPoint = function (point) {
    //..code goes here
};
drawPoint({
    x: 1,
    y: 2
});
//they code above has no cohesion like groups should be place together
//use class for a better cohesion
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X' + this.x + 'Y' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
