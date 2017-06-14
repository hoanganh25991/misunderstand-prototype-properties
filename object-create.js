const Coder = function(name){this.name = name}

let c = new Coder('anh');
let c1 = Object.create(c);

// Add sayHello to c
c.sayHello = () => console.log('sayHello');
// Now c1 can sayHello
c1.sayHello();
