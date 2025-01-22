var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ogni riga di JS valida è anche una valida riga di TS!
console.log('Hello TypeScript!');
// però TS nasce con lo socpo di TIPIZZARE JS, ovvero di fornire delle definizioni
// di TIPO alle nostre strutture dati (i modo che l'editor possas aiutarci nella
// stesura del codice ed evidenziarci con maggiore precisione gli errori)
// DEFINIZIONE DI VARIABILE: TIPI PRIMITIVI
// string       -> 'Gianluca'
// number       -> 6
// boolean      -> true
// undefined    -> undefined
// null         -> null
// Symbol
// any
// TS permette l'assegnazione di un TIPO ad ogni struttura dati, tramite l'operatore ":"
// una volta che TS ha capito il tipo di un dato, mostrerà come suggerimento i metodi
// applicabili in base al tipo del dato
var myName = 'Gianluca';
var myNumber = 6;
var isLoading = true;
console.log(myName.toUpperCase());
myNumber = 28;
// TS è in grado di capire il TIPO di una variabile grazie al suo valore iniziale
var automatic = 'EPICODE'; // <-- TS ha capito che automatic è di tipo "string"
var n1 = 11; // <-- TS ha capito che n1 e di tipo "number"
// questa capacità di TS di intuire il tipo del dato a partire dal suo valore iniziale
// viene chiamata "TYPE INFERENCE"
var num = 100;
// il tipo "any" non introduce un tipo particolare nella stesura del codice
// permette di "spegnere" i controlli di tipo da parte di TipeScript
// --> ATTENZIONE <-- perché a questo punto si guida "a luci spente",
// TS non avviserà di eventuali incongruenze nel codice
// es. di FUNZIONE tipizzata (che torna una stringa)
var sayHello = function () {
    return 'Hello!';
};
// sull'esecuzione di sayHello posso invocare i metodi e le proprietà delle stringhe!
console.log(sayHello().toUpperCase());
// RISOLVIAMO UN CLASSICO PROBLEMA DI JS
var sumOfTwoNumbers = function (n1, n2) {
    return n1 + n2;
};
sumOfTwoNumbers(4, 9); // -> 13
// sumOfTwoNumbers(4, '9'); -> la funzione dà errore di compilazione
// TYPE UNION
var stringOrNumber = 'Ciao';
var stringOrNumberOrBoolean = true;
var myTypeVariable = 'Hello!';
// FUNZIONI CON PARAMETRI OPZIONALI
var greetings = function (greet, name) {
    return ('I am the greetings function. ' + greet + ', ' + (name || 'User') + '!');
};
console.log(greetings('Good morning', 'Gianluca'));
console.log(greetings('Good morning'));
// il ? indica un parametro per cui non è sempre necessario fornire un argomento
// è come se al parametro della funzione facessimo una TYPE UNION con il tipo 'undefined'
//VALORI DI RITORNO
var makeNumber = function (val) {
    return parseInt(val);
};
makeNumber('65'); // -> 65
var arrow = function () {
    return 0;
};
// ARRAY
var arrayOfNames = ['Gianluca', 'Chiara', 'Alessandro'];
var arrayOfNumber = [1, 1, 2, 3, 5, 8, 13];
arrayOfNumber.push(21);
var arrayOfStrings = __spreadArray(__spreadArray([], arrayOfNames, true), ['Stefano'], false);
// modo alternativo: Array<string> o Array<number> etc.
var arrayOfOtherNumbers = [0.1, 0.2, 0.3];
var mixedArray = [2025, 'gennaio', 'febbraio'];
arrayOfNames.forEach(function (name) {
    var firstChar = name.slice(0, 1);
    console.log(firstChar);
});
arrayOfNumber.forEach(function (n) {
    console.log(n.toFixed(2));
});
// variante dugli array: la TUPLA
var genericArray = ['Stefano', 10, 'EPICODE'];
var z = genericArray[2]; // siamo andati a "forzare" TS e dirgli che il terzo
// elemento dell'array era un astringa
z.toUpperCase(); // a questo punto sono riuscito ad applicare il metodo toUpperCase()
var tuple = [6, 'Gianluca', 'Di Diego', 11];
tuple.push(100);
tuple[1].toUpperCase(); // TS già sà che questo elemento è una stringa
// OGGETTI
var epicodeStaffMember1 = {
    firstName: 'Stefano',
    lastName: 'Casasola',
    age: 19,
    area: 'FVG',
    modules: ['U1', 'U2', 'U3'],
};
// epicodeStaffMember.city // -> TS non compila, l'oggetto non ha questa proprietà
console.log(epicodeStaffMember1.modules[0].slice(1)); // -> 1
var pet1 = {
    species: 'Doggo',
    breed: 'Labrador',
    age: 5,
    skills: ['barking', 'playing', 'sleeping'],
    numberOfPaws: 4,
};
// se volessi riutilizzare la struttura di pet1 per creare altri pets "in serie"?
var pet2 = {
    species: 'Cat',
    breed: 'European',
    age: 7,
    skills: ['asking-for-food', 'playing', 'destroying', 'judging'],
    numberOfPaws: 4,
    // color: orange // torna errore perché non è presente nell'interfaccia
};
var pet3 = {
    species: 'Snake',
    breed: 'Copperhead',
    age: 1,
    skills: ['crawls', 'eat', 'sleep'],
};
var mario = {
    name: 'Mario Mario',
    age: 30,
    height: 170,
    eyeColor: 'brown',
    hairColor: 'brown',
};
var luigi = {
    name: 'Luigi Mario',
    age: 30,
    height: 175,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'left',
    favouriteCourt: 'grass',
    championshipsWon: 0,
};
var bowser = {
    name: 'Bowser Koopa',
    age: 35,
    height: 185,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'right',
    favouriteCourt: 'clay',
    championshipsWon: 10,
};
var yoshi = {
    name: 'Yoshi',
    age: 25,
    height: 175,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'right',
    favouriteCourt: 'grass',
    championshipsWon: 3,
};
var tennisPlayers = [];
tennisPlayers.push(luigi, bowser, yoshi);
console.log(tennisPlayers);
tennisPlayers.forEach(function (player) {
    console.log(player.favoriteHand.length.toPrecision(2));
});
var arrayOfTennisPlayersNames = tennisPlayers.map(function (player) {
    return player.name;
});
console.log(arrayOfTennisPlayersNames);
var italianAddress = {
    street: 'Via Roma',
    civicNumber: 1,
    city: 'Paperino',
    zipCode: '59100',
    area: 'Italy',
};
italianAddress.area.toUpperCase();
// {
// state: 'Oklahoma',
// country: 'USA'
// }
var americanAddress = {
    street: 'E Hills Dr',
    civicNumber: 2711,
    city: 'Moore',
    zipCode: '73160',
    area: {
        state: 'Oklahoma',
        country: 'USA',
    },
};
americanAddress.area.country.toUpperCase();
