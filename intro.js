/* 
 en kommentar
 på flera rader
*/

//Kommentar på en rad

//Tilldelning av ett värde till en variabel
const x = 10 //const används för värden som inte ska ändras
let enAnnanVariabel = 7 //let används för värden som ska ändras.

// if-else, kodblock skapas med "måsvingar", javascript bryr sig inte om indentering på samma sätt som Python.
// if (x == 10) {
//   console.log("x är 10")
// } else {
//   console.log("x är inte 10")
// }

/// === strikt likhet, jämför även datatyp
// if ("5" == 5) {
//   console.log("'5' är 5")
// }

// if ("5" === 5) {
//   // nej, det är inte strikt lika eftersom datatypen skiljer, en sträng är inte ett heltal.
//   console.log("'5' är strikt 5")
// } else {
//   console.log("'5' är inte strikt 5")
// }

// != eller !== används för att avgöra om någon INTE är lika med.
// && är logiskt OCH (|| (två pipe-tecken) är logiskt ELLER)
// if (x === 10 && enAnnanVariabel != 10) {
//   console.log("x är tio men enAnnanVariabel är INTE 10")
// }
// if (x > 15 || enAnnanVariabel === 7) {
//   console.log(
//     "Antingen är x större än 15 eller så är enAnnanVariabel lika med 7"
//   )
// }

//Dynamisk typning, en variabel kan byta datatyp utan att det smäller
// let y = 7
// console.log("y = " + y)
// y = "något annat"
// console.log("y = " + y)

// //en funktion som tar två tal som inparametrar och returnerar summan av dem.
// function add(tal1, tal2) {
//   return tal1 + tal2
// }

// let a = add(2, 3)
// console.log(a)

// // En array påminner om listor i Python.
let arr = [1, 2, 3, 4, "hej"]

// // olika sätt att loopa igenom en array
// for (let index = 0; index < arr.length; index = index + 1) {
//   console.log(arr[index]) //plockar ut värdet på platsen "index" i arrayen
// }

// // forEach tar en (anonym) funktion som argument och applicerar den funktionen på varje element. Funktionen får ett element i taget som argument.
// arr.forEach(function (element) {
//   let res = element + 2
//   console.log(res)
// })

// //objekt i javascript
let person = {
  age: 45,
  name: "Martin",
  children: ["kalle", "lisa"],
}

// // Egenskaper (propertys) på ett objekt accessas med punkt (.) eller namn i array.
// console.log(person)
// console.log(person.name)
// console.log(person["age"])
// console.log(person.children[0])

// //Strängar skapas med dubbelfnutt eller enkelfnutt
// console.log("Konkaternera strängar " + "med plustecken")
// console.log('En "enkelfnuttssträng" med dubbelfnuttar i...')

// //Template strings skapas med en "bakåtfnutt"
let str = 42
console.log(`Använd template string ${str} stoppa in variabler i strängar.`)
