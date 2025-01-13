function suma(a, b){
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 3, 2, 6, 7, 9);
console.log(resultado);
console.log(typeof suma); 