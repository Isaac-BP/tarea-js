let promedio
let suma = 0

let cvalores = parseInt(prompt("Cuantos numeros quieres introducir?"))
let array = []
for (i = 0; i < cvalores; i++){
    let valores = parseInt(prompt("Digite un numero "))
    array.push(valores);
    suma = suma + valores;
}

promedio = suma / cvalores;

console.log("Los valores que introduciste son: " + array);
console.log("La suma de los valores es: " + suma);
console.log("El promedio es: " + promedio);
