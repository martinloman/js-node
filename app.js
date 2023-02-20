let arr = [1, "ett", true, 3.14]

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i]
//   console.log(element)
// }

// arr.forEach((element) => {
//   console.log(element)
// })

let obj = {
  namn: "Kalle Anka",
  alder: 30,
}

// console.log(obj)
// console.log(obj.namn)
// console.log(obj["namn"])

// obj.namn = "Kajsa Anka"

// console.log(obj)

arr.push(obj)

// console.log(arr)

// obj.alder = 50

// if (obj.alder > 50) {
//   console.log("Äldre än 50")
// } else if (obj.alder === "50") {
//   console.log("Exakt 50")
// } else {
//   console.log("Yngre än 50")
// }

function add(tal1, tal2) {
  return tal1 + tal2
}

// SUmmera alla jämna tal i en array
function addEvenNumbers(arr) {
  let sumSoFar = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element % 2 === 0) {
      // ett jämt tal, lägger till summan
      sumSoFar = sumSoFar + element
    }
  }
  return sumSoFar
}

let summa = addEvenNumbers([2, 3, 4, 5, 6, 1000, 7])
console.log(summa)
