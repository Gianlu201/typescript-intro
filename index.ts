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
let myName: string = 'Gianluca';
let myNumber: number = 6;
let isLoading: boolean = true;

console.log(myName.toUpperCase());

myNumber = 28;

// TS è in grado di capire il TIPO di una variabile grazie al suo valore iniziale
let automatic = 'EPICODE'; // <-- TS ha capito che automatic è di tipo "string"
let n1 = 11; // <-- TS ha capito che n1 e di tipo "number"

// questa capacità di TS di intuire il tipo del dato a partire dal suo valore iniziale
// viene chiamata "TYPE INFERENCE"

let num: any = 100;
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
const sumOfTwoNumbers = function (n1: number, n2: number) {
  return n1 + n2;
};

sumOfTwoNumbers(4, 9); // -> 13
// sumOfTwoNumbers(4, '9'); -> la funzione dà errore di compilazione

// TYPE UNION
let stringOrNumber: string | number = 'Ciao';
let stringOrNumberOrBoolean: string | number | boolean = true;

// TYPE ALIAS
type MySpecialType = string | number; // definizione di TIPO personalizzato
let myTypeVariable: MySpecialType = 'Hello!';

// FUNZIONI CON PARAMETRI OPZIONALI
const greetings = function (greet: string, name?: string) {
  return (
    'I am the greetings function. ' + greet + ', ' + (name || 'User') + '!'
  );
};

console.log(greetings('Good morning', 'Gianluca'));
console.log(greetings('Good morning'));
// il ? indica un parametro per cui non è sempre necessario fornire un argomento
// è come se al parametro della funzione facessimo una TYPE UNION con il tipo 'undefined'

//VALORI DI RITORNO
const makeNumber = function (val: string): number {
  return parseInt(val);
};

makeNumber('65'); // -> 65

const arrow = (): number => {
  return 0;
};

// ARRAY
let arrayOfNames = ['Gianluca', 'Chiara', 'Alessandro'];
let arrayOfNumber: number[] = [1, 1, 2, 3, 5, 8, 13];

arrayOfNumber.push(21);

let arrayOfStrings: string[] = [...arrayOfNames, 'Stefano'];

// modo alternativo: Array<string> o Array<number> etc.
let arrayOfOtherNumbers: Array<number> = [0.1, 0.2, 0.3];

let mixedArray: MySpecialType[] = [2025, 'gennaio', 'febbraio'];

arrayOfNames.forEach((name) => {
  const firstChar = name.slice(0, 1);
  console.log(firstChar);
});

arrayOfNumber.forEach((n) => {
  console.log(n.toFixed(2));
});

// variante dugli array: la TUPLA
let genericArray: (string | number)[] = ['Stefano', 10, 'EPICODE'];

const z = genericArray[2] as string; // siamo andati a "forzare" TS e dirgli che il terzo
// elemento dell'array era un astringa

z.toUpperCase(); // a questo punto sono riuscito ad applicare il metodo toUpperCase()

let tuple: [number, string, string, number] = [6, 'Gianluca', 'Di Diego', 11];
tuple.push(100);
tuple[1].toUpperCase(); // TS già sà che questo elemento è una stringa

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

// INTERFACE
// un'interfaccia è un tipo di dato specifico per un oggetto
interface Pet {
  species: string;
  breed: string;
  age: number;
  skills: string[];
}

let pet1: Pet = {
  species: 'Doggo',
  breed: 'Labrador',
  age: 5,
  skills: ['barking', 'playing', 'sleeping'],
};

// se volessi riutilizzare la struttura di pet1 per creare altri pets "in serie"?
let pet2: Pet = {
  species: 'Cat',
  breed: 'European',
  age: 7,
  skills: ['asking-for-food', 'playing', 'destroying', 'judging'],
  // numberOfPaws: 4  // torna errore perché non presente nell'interfaccia
};
