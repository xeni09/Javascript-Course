// Ejercicio 1
// Definición de la interfaz 'Person'
console.log('Ejercicio 1');
// Definición de la arrow function que acepta un parámetro de tipo 'Person' y devuelve un array con los valores de sus propiedades
var getPersonValues = function (person) {
    var name = person.name, age = person.age, profession = person.profession;
    return [name, age, profession];
};
// Ejemplo
var person = {
    name: "Lucas",
    age: 28,
    profession: "Full Stack",
};
var valuesPersonArray = getPersonValues(person);
console.log(valuesPersonArray); // Salida: ["Lucas", 28, "Full Stack"]
// Ejercicio 2
console.log('Ejercicio 2');
function sumOrConcatenate(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        // Ambos parámetros son números, devuelve la suma
        return param1 + param2;
    }
    else if (typeof param1 === 'string' && typeof param2 === 'string') {
        // Ambos parámetros son strings, devuelve la concatenación con el símbolo "-"
        return "".concat(param1, "-").concat(param2);
    }
    else {
        // Un parámetro es número y el otro es string, devuelve la concatenación con ":'+"
        return "".concat(param1, "+").concat(param2);
    }
}
// Ejemplo
console.log((sumOrConcatenate(5, 20)), ('--> la suma de dos numeros'));
console.log((sumOrConcatenate("Hola", "caracola")), ('--> dos strings con el simbolo "-"'));
console.log((sumOrConcatenate(5, "tomates")), ('--> numero y string con el simbolo "+'));
// Ejercicio 3
console.log('Ejercicio 3');
// Type predicate para distinguir entre Car y Motorcycle
function isCar(vehicle) {
    return 'pressPedal' in vehicle;
}
// Función que acepta un parámetro que puede ser Car o Motorcycle
function operateVehicle(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
}
// Ejemplos de uso
var car = {
    tires: 4,
    turnOnEngine: function () { return console.log('Car engine is on'); },
    pressPedal: function () { return console.log('Pressing the pedal in the car'); },
};
var motorcycle = {
    tires: 2,
    turnOnEngine: function () { return console.log('Motorcycle engine is on'); },
    openThrottle: function () { return console.log('Opening the throttle on the motorcycle'); },
};
operateVehicle(car); // Salida esperada: Car engine is on, Pressing the pedal in the car
operateVehicle(motorcycle); // Salida esperada: Motorcycle engine is on, Opening the throttle on the motorcycle
// Ejercicio 4
console.log('Ejercicio 4');
function removeFirstEntry(arr) {
    return arr.slice(1);
}
// Ejemplos de uso
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
console.log(newStrArray); // Salida esperada: ['World', 'Im', 'a', 'Full', 'Stack', 'Developer']
console.log(newNumArray); // Salida esperada: [2, 3, 4, 5, 6, 7]
console.log(newMixedArray); // Salida esperada: ['I', 'have', 3, 'tasks']
console.log('Ejercicio 4 - Forma de que el unsopported Array pueda ser aceptado, entiendo que con esto se esta sacrificando la seguridad de los tipos');
function removeFirstEntry2(arr) {
    return arr.slice(1);
}
var newUnsupportedArray = removeFirstEntry2(unsupportedArray);
console.log(newUnsupportedArray); // Salida esperada: ['Hello', 22]  
