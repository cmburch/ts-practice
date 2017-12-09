function log(message){
    console.log(message);
}

let message = 'Hello World';
log(message);

//testing vs code
let count = 5;
count = 'a';

//type assertion has two ways to declare
let message1;
message1 = 'abc';

let endswithC = (<string>message).endsWith('c');
let alternativeWay = (message1 as string).endsWith('c');
