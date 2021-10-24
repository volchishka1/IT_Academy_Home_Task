const surname = prompt("Введите вашу фамилию")

if (surname == null) {
    alert("Ввод данных отменен!")
} else if (surname == "") {
    alert("Поле не должно быть пустым")
} 
const name = prompt("Введите ваше имя");
if (name == null) {
    alert("Ввод данных отменен!")
} else if (name == "") {
    alert("Поле не должно быть пустым")
} 
const middle_name = prompt("Введите ваше отчество");


const age = prompt("Введите ваш возраст");
const p_age = parseFloat(age);
const age_p_day = p_age * 365
const age_after_five_years = p_age + 5


var sex = confirm("Если вы мужского пола, нажмите 'OK', если женского, нажмите 'Отмена'");
if (sex) {
    sex = "Мужской"
} else {
    sex = "Женский"
};


var pension = "";
if (age >= 60 && sex === "Мужской") {
    pension = "да"
} else if (age >= 55 && sex === "Женский") {
    pension = "да"
} else {
    pension = "нет"
};


alert(`Ваше ФИО: ${surname} ${name} ${middle_name}
Ваш возраст: ${p_age}
Ваш возраст в днях: ${age_p_day}
Черeз 5 лет вам будет: ${age_after_five_years}
Ваш пол: ${sex}
Вы на пенсии: ${pension}`);