"use strict"

let formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        { label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 },
            { text: 'бытовая техника', value: 3 }]
        },
        { label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, 
            { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { caption: 'Опубликовать', kind: 'submit' },
    ];

let formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { caption: 'Зарегистрироваться', kind: 'submit' },
    ];


function dynform(tag, mass) {
    let parent = document.getElementsByTagName("div");
    let newElem = document.createElement("form");
    newElem.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
    parent[0].appendChild(newElem);

    let str = "";
    let input = '<input type="';
    for (let i = 0; i < mass.length; i++) {

        let lab = '<label for="' + mass[i]['name'] + '">' + mass[i]['label'] + '</label>';
        let type = mass[i]['kind']
        let name = 'name="' + mass[i]['name'] + '">'


        switch (type) {
            case 'longtext':
                str += lab + "   " + input + 'text" style="width:300px; border-radius:7px; "' + name;
                break;
            case 'shorttext':
                str += lab + "   " + input + 'text" style="width:200px; border-radius:7px"' + name;
                break;
            case 'number':
                str += lab + "   " + input + 'number" style="width:70px; border-radius:7px" ' + name;
                break;
            case 'check':
                str += lab + "   " + input + 'checkbox"' + name;
                break;
            case 'submit':
                str += "   " + input + type + '"value="' + mass[i]['caption'] + 
                    '"style="border-radius:5px; height:25px; text-align:center; margin: 0px 0px 10px"  >';
                break;
            case 'memo':
                str += lab + "   " + '<textarea style="width:480px; height:50px"' + name + '</textarea>'
                break;
            case 'combo':
                str += lab + '<select style="width:204px">';
                let val = ""
                for (let m = 0; m < mass[i]['variants'].length; m++) {
                    val = mass[i]['variants'][m]['value'] + '">' + mass[i]['variants'][m]['text'];


                    str += '<option value="' + val + '</option>';
                }
                str += '</select>';
                break;


            case 'radio':
                str += lab;
                let val2 = ''
                for (let j = 0; j < mass[i]['variants'].length; j++) {
                    val2 = mass[i]['variants'][j]['value'] + '">' + mass[i]['variants'][j]['text'];
                    str += input + 'radio"' + name + '<span value="' + val2 + '</span>'
                }
                break
        }
        str += '<br>';
    }
    newElem.innerHTML = str;
}



let tag = 'form';

dynform(tag, formDef1)
dynform(tag, formDef2)
