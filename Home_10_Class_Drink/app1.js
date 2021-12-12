class HashStorageClass {
    values = {}

    addValue(key, value) {
        this.values[key] = value
    }

    getValue(key) {
        return this.values[key]
    }

    deleteValue(key) {
        if (typeof this.values[key] === "undefined") {
            return false;
        }
        return delete this.values[key]
    }

    getKeys() {
        return Object.getOwnPropertyNames(this.values)
    }
}

const drinkStorage = new HashStorageClass()

function createDrink() {
    const name = document.querySelector("input[name='drinkName']")
    const view = document.querySelector("input[name='drinkView']")
    const components = document.querySelector("input[name='drinkComponent']")

    const drinkComponents = new HashStorageClass()
    drinkComponents.addValue('алкогольный', view.checked ? 'Да' : 'Нет')
    drinkComponents.addValue('рецепт приготовления', components.value)

    drinkStorage.addValue(name.value, drinkComponents)

    name.value = ""
    view.value = ""
    components.value = ""
}

function getDrinkInfo() {
    const drinkName = prompt("Введите название напитка")
    const drink = drinkStorage.getValue(drinkName)

    if (typeof drink === "undefined") {
        alert("Напиток не найден")
    } else {
        const components = drink.getKeys();
        let componentsText = 'Напиток : ' + drinkName + "\n";

        components.forEach((componentsName) => {
            const componentsValue = drink.getValue(componentsName)
            componentsText += componentsName + " : " + componentsValue + "\n"
        });

        alert(componentsText);
    }
}

function deleteDrink() {
    const drinkName = prompt("Введите название напитка")
    const wasDeleted = drinkStorage.deleteValue(drinkName)

    if (wasDeleted) {
        alert("Напиток удален")
    } else {
        alert("Напиток не найден")
    }
}

function showDrinks() {
    const drinks = drinkStorage.getKeys().join(", ")
    alert(drinks)
}
