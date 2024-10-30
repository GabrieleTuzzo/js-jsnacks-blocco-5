const nums = [2, 8, 4, 7, 12, 87]

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const evenNums = nums.filter((el) => el % 2 === 0)
console.log(evenNums)
// Risultato: [2, 8, 4, 12]
