let name;
let surname;
do {
    name = prompt("Введите имя:")
} while (name) {
    alert("Ввод данных отменен")
    alert("Поле не должно быть пустым")
}


alert(`Ваше ФИО: ${name}`)