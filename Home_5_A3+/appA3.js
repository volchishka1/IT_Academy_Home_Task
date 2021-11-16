let question = prompt("Введите данные").replace(/[^\w]/gi, "").toLowerCase()

const polindrom = keyy => {
    
    var keyyReverse = keyy.length,
        keyyReverse = keyy.split('').reverse().join('')
    return keyy === keyyReverse
}

console.log(polindrom(question))