let inYear = prompt("Введите год:");


function centuryOfYear (year) {
    return Math.floor((year-1)/100) + 1
}

console.log(centuryOfYear(inYear))