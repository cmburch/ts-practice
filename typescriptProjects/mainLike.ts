import { LikeComponent } from './like.component';

let component = new LikeComponent(10,true);
component.onClick();
console.log(`likes coumt: ${component.likesCount}, isselected: ${component.likesCount}`)