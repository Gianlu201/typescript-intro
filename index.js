"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
let myName = 'Gianluca';
let myNumber = 6;
let isLoading = true;
console.log(myName.toUpperCase());
myNumber = 28;
// TS è in grado di capire il TIPO di una variabile grazie al suo valore iniziale
let automatic = 'EPICODE'; // <-- TS ha capito che automatic è di tipo "string"
let n1 = 11; // <-- TS ha capito che n1 e di tipo "number"
// questa capacità di TS di intuire il tipo del dato a partire dal suo valore iniziale
// viene chiamata "TYPE INFERENCE"
let num = 100;
// il tipo "any" non introduce un tipo particolare nella stesura del codice
// permette di "spegnere" i controlli di tipo da parte di TipeScript
// --> ATTENZIONE <-- perché a questo punto si guida "a luci spente",
// TS non avviserà di eventuali incongruenze nel codice
// es. di FUNZIONE tipizzata (che torna una stringa)
const sayHello = function () {
    return 'Hello!';
};
// sull'esecuzione di sayHello posso invocare i metodi e le proprietà delle stringhe!
console.log(sayHello().toUpperCase());
// RISOLVIAMO UN CLASSICO PROBLEMA DI JS
const sumOfTwoNumbers = function (n1, n2) {
    return n1 + n2;
};
sumOfTwoNumbers(4, 9); // -> 13
// sumOfTwoNumbers(4, '9'); -> la funzione dà errore di compilazione
// TYPE UNION
let stringOrNumber = 'Ciao';
let stringOrNumberOrBoolean = true;
let myTypeVariable = 'Hello!';
// FUNZIONI CON PARAMETRI OPZIONALI
const greetings = function (greet, name) {
    return ('I am the greetings function. ' + greet + ', ' + (name || 'User') + '!');
};
console.log(greetings('Good morning', 'Gianluca'));
console.log(greetings('Good morning'));
// il ? indica un parametro per cui non è sempre necessario fornire un argomento
// è come se al parametro della funzione facessimo una TYPE UNION con il tipo 'undefined'
//VALORI DI RITORNO
const makeNumber = function (val) {
    return parseInt(val);
};
makeNumber('65'); // -> 65
const arrow = () => {
    return 0;
};
// ARRAY
let arrayOfNames = ['Gianluca', 'Chiara', 'Alessandro'];
let arrayOfNumber = [1, 1, 2, 3, 5, 8, 13];
arrayOfNumber.push(21);
let arrayOfStrings = [...arrayOfNames, 'Stefano'];
// modo alternativo: Array<string> o Array<number> etc.
let arrayOfOtherNumbers = [0.1, 0.2, 0.3];
let mixedArray = [2025, 'gennaio', 'febbraio'];
arrayOfNames.forEach((name) => {
    const firstChar = name.slice(0, 1);
    console.log(firstChar);
});
arrayOfNumber.forEach((n) => {
    console.log(n.toFixed(2));
});
// variante dugli array: la TUPLA
let genericArray = ['Stefano', 10, 'EPICODE'];
const z = genericArray[2];
// siamo andati a "forzare" TS e dirgli che il terzo
// elemento dell'array era un astringa
z.toUpperCase(); // a questo punto sono riuscito ad applicare il metodo toUpperCase()
let tuple = [6, 'Gianluca', 'Di Diego', 11];
tuple.push(100);
tuple[1].toUpperCase(); // TS già sà che questo elemento è una stringa
// gli ENUM
// enum omogenei
var Months;
(function (Months) {
    Months[Months["january"] = 1] = "january";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
})(Months || (Months = {})); // i valori vengono incrementati gradualmente a partire dal valore assegnato
// enum eterogenei
var HeterogeneusEnum;
(function (HeterogeneusEnum) {
    HeterogeneusEnum[HeterogeneusEnum["NO"] = 0] = "NO";
    HeterogeneusEnum["YES"] = "YES";
})(HeterogeneusEnum || (HeterogeneusEnum = {}));
// OGGETTI
let epicodeStaffMember1 = {
    firstName: 'Stefano',
    lastName: 'Casasola',
    age: 19,
    area: 'FVG',
    modules: ['U1', 'U2', 'U3'],
};
// epicodeStaffMember.city // -> TS non compila, l'oggetto non ha questa proprietà
console.log(epicodeStaffMember1.modules[0].slice(1)); // -> 1
let pet1 = {
    species: 'Doggo',
    breed: 'Labrador',
    age: 5,
    skills: ['barking', 'playing', 'sleeping'],
    numberOfPaws: 4,
};
// se volessi riutilizzare la struttura di pet1 per creare altri pets "in serie"?
let pet2 = {
    species: 'Cat',
    breed: 'European',
    age: 7,
    skills: ['asking-for-food', 'playing', 'destroying', 'judging'],
    numberOfPaws: 4,
    // color: orange // torna errore perché non è presente nell'interfaccia
};
let pet3 = {
    species: 'Snake',
    breed: 'Copperhead',
    age: 1,
    skills: ['crawls', 'eat', 'sleep'],
};
const mario = {
    name: 'Mario Mario',
    age: 30,
    height: 170,
    eyeColor: 'brown',
    hairColor: 'brown',
};
const luigi = {
    name: 'Luigi Mario',
    age: 30,
    height: 175,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'left',
    favouriteCourt: 'grass',
    championshipsWon: 0,
};
const bowser = {
    name: 'Bowser Koopa',
    age: 35,
    height: 185,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'right',
    favouriteCourt: 'clay',
    championshipsWon: 10,
};
const yoshi = {
    name: 'Yoshi',
    age: 25,
    height: 175,
    eyeColor: 'brown',
    hairColor: 'brown',
    favoriteHand: 'right',
    favouriteCourt: 'grass',
    championshipsWon: 3,
};
const tennisPlayers = [];
tennisPlayers.push(luigi, bowser, yoshi);
console.log(tennisPlayers);
tennisPlayers.forEach((player) => {
    console.log(player.favoriteHand.length.toPrecision(2));
});
const arrayOfTennisPlayersNames = tennisPlayers.map((player) => {
    return player.name;
});
console.log(arrayOfTennisPlayersNames);
let italianAddress = {
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
let americanAddress = {
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
// chiamate API
const FETCHURL = 'striveschool-api.herokuapp.com/food-books';
const manipulateDom = (data) => {
    data.forEach((bookObj) => {
        const container = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', bookObj.imageUrl);
        container.appendChild(img);
        document.getElementById('main').appendChild(container);
    });
};
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(FETCHURL);
        if (response.ok) {
            const data = yield response.json();
            manipulateDom(data);
        }
        else {
            throw new Error('Errore nel recuopero libri');
        }
    }
    catch (error) {
        console.log(error);
    }
});
document.addEventListener('load', init);
function init() {
    getBooks();
}
