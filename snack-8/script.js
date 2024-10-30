const students = [
    {
        id: 1,
        name: 'Marco Lanci',
        age: 32,
        class: '3C',
    },
    {
        id: 2,
        name: 'Mario Banfi',
        age: 34,
        class: '4A',
    },
    {
        id: 3,
        name: 'Luigi Banzi',
        age: 33,
        class: '5B',
    },
]

// Recupera la classe dello studente 'Marco Lanci'
const nameToFind = 'Marco Lanci'
const studentClassFound = students.find(({ name }) => name === nameToFind).class
console.log(studentClassFound)
// Risultato: '3C'
