while (true) {

    let surname
    let is_empty_surname
    do {
        surname = prompt("Введите вашу фамилию")
        is_empty_surname = surname === ""
        if (is_empty_surname) {
            alert("Поле не должно быть пустым")
        }
    } while (is_empty_surname) 

    if (surname === null) {
        alert("Ввод данных отменен!")
        break
    }

    let name
    let is_empty_name
    do {
        name = prompt("Введите ваше имя")
        is_empty_name = name === ""
        if (is_empty_name) {
            alert("Поле не должно быть пустым")
        }
    } while (is_empty_name)

    if (name === null) {
        alert("Ввод данных отменен!")
        break
    }

    let middle_name
    let is_empty_middle_name
    do {
        middle_name = prompt("Введите ваше отчество")
        is_empty_middle_name = middle_name === ""
        if (is_empty_middle_name) {
            alert("Поле не должно быть пустым")
        }
    } while (is_empty_middle_name)

    if (middle_name === null) {
        alert("Ввод данных отменен!")
        break
    }

    const age = prompt("Введите ваш возраст")
    const p_age = parseFloat(age)
    const age_p_day = p_age * 365
    const age_after_five_years = p_age + 5


    let sex = confirm("Если вы мужского пола, нажмите 'OK', если женского, нажмите 'Отмена'")
    if (sex) {
        sex = "Мужской"
    } else {
        sex = "Женский"
    }


    let pension
    if ((age >= 60 && sex === "Мужской") || (age >= 55 && sex === "Женский")) {
        pension = true
    } else {
        pension = false
    }


    alert(`Ваше ФИО: ${surname} ${name} ${middle_name}
Ваш возраст: ${p_age}
Ваш возраст в днях: ${age_p_day}
Черeз 5 лет вам будет: ${age_after_five_years}
Ваш пол: ${sex}
Вы на пенсии: ${pension ? "да" : "нет"}`
    )

    break
}

