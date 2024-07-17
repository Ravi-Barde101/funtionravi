const object = {firstname : "ravi", lastname : "barde"};
function PassObject(obj1){
     return ("First Name is => "+obj1.firstname+"   Last Name is => "+obj1.lastname);
}
const display = PassObject(object);
console.log(display);