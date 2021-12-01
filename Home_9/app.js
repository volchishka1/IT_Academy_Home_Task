function createH1() {
        const text = document.querySelector("#forH1 input[name='text']")
        const prop = document.querySelector("#forH1 input[name='prop']")
        const value = document.querySelector("#forH1 input[name='value']")
    
        const p = document.createElement('h1')
        p.textContent = text.value
        p.style[prop.value] = value.value

        text.value = ""
        prop.value = ""
        value.value = ""

        document.getElementById('forH').appendChild(p)
}

function createP() {
    const text = document.querySelector("#forP input[name='text']")
    const prop = document.querySelector("#forP input[name='prop']")
    const value = document.querySelector("#forP input[name='value']")

    const p = document.createElement('p')
    p.textContent = text.value
    p.style[prop.value] = value.value

    text.value = ""
    prop.value = ""
    value.value = ""

    document.getElementById('forH').appendChild(p)
}


// function createH1(){
//     const blockH1 = document.getElementById("forH1")
//     const h1Props = {}
//     for (let inp of blockH1.children) {
//         h1Props[inp.name] = inp.value
//     }
//     const createdEl = document.createElement("h1")

//     const body = document.getElementsByTagName("body")
//     body[0].appendChild(createdEl)

//     createdEl.style[h1Props.prop] = h1Props.value
//     createdEl.innerText = h1Props.text
// }

// function createP(){
//     const blockP = document.getElementById("forP")
//     const pProps = {}
//     for (let p of blockP.children) {
//         pProps[p.name] = p.value
//     }
//     const createdEl_1 = document.createElement("p")

//     const body_1 = document.getElementsByTagName("body")
//     body_1[0].appendChild(createdEl_1)

//     createdEl_1.style[pProps.prop] = pProps.value
//     createdEl_1.innerHTML = pProps.text
// }

function createLi() {
    const ul = document.getElementById("ul_1")
    const li = document.createElement("li")
    li.setAttribute("class", "liItem")
    const textLabel = document.createElement('label')
    textLabel.textContent = ' text '
    const propLabel = document.createElement('label')
    propLabel.textContent = ' prop '
    const valueLabel = document.createElement('label')
    valueLabel.textContent = ' value '
    const inputText = document.createElement("input")
    inputText.setAttribute("name", "text")
    const inputProp = document.createElement("input")
    inputProp.setAttribute("name", "prop")
    const inputValue = document.createElement("input")
    inputValue.setAttribute("name", "value")
    li.appendChild(inputText)
    .appendChild(textLabel)
    .appendChild(inputProp)
    .appendChild(propLabel)
    .appendChild(inputValue)
    .appendChild(valueLabel)
    ul.appendChild(li)
    
}

function createUl() {
    const getLi = document.querySelectorAll(".liItem")
    getLi.forEach(element => {
        const text = element.querySelector("input[name='text']")
        const prop = element.querySelector("input[name='prop']")
        const value = element.querySelector("input[name='value']")
    
        const p = document.createElement('p')
        p.textContent = text.value
        p.style[prop.value] = value.value

        text.value = ""
        prop.value = ""
        value.value = ""

        document.getElementById('forUl').appendChild(p)
    });

    
}