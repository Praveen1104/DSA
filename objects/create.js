const obj={a:1,b:2}
console.log(obj);
const obj1=Object.create(obj);
console.log(obj1.a);
obj1.a=10;
console.log(obj1.a);
console.log(obj1);