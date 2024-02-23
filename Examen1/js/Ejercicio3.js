alert('Bienvenido a Resolver una Ecuacion Cuadrtica');

const a = parseFloat(prompt('Ingrese el valor de "a" : '));
console.log(`Valor de a: ${a}`);

const b = parseFloat(prompt('Ingrese el valor de "b" : '))
console.log(`Valor de b: ${b}`);

const c = parseFloat(prompt('Ingrese el valor de "c" : '))
console.log(`Valor de c: ${c}`);

const x1 = -b + (Math.sqrt(Math.pow(b,2)-(4 * a * c)))/2 * a
console.log(`X1= ${x1}`);

const x2 = (-b - Math.sqrt(Math.pow(b,2)-(4 * a * c)))/(2 * a)
console.log(`X2= ${x2}`);