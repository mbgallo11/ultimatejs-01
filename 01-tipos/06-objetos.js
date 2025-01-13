//Personaje de TV
let nombre = 'Homero Simpson';
let anime = 'Los Simpsons';
let edad = 39;


let personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 40;

personaje['edad'] = 41;

delete personaje.anime;
console.log(personaje);