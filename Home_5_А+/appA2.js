let question = prompt("Введите данные")

const deleteSpacesFromStart = str => {
    let index = 0;
    while (str[index] === ' ') {
        str = str.replace(' ', '$');
        index++;
    }

    return str;
}

const reverseString = str => {
    return str.split("").reverse().join("");
}

let str = deleteSpacesFromStart(question);

str = reverseString(str);

str = deleteSpacesFromStart(str);

str = reverseString(str);

console.log(str);





// const deleteSpace = key => console.log(key.split(' ').join('$'));
//     deleteSpace(question)






