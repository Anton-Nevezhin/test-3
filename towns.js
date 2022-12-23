const towns = ['123', '321', '594', '358', '497', '157', '357', '512', '312', '412']
let town
let step 
let last
let index
let already = [] // Уже упоминавшиеся элементы
let gaimer = document.querySelector('#gaimer');
let btn = document.getElementById("btn")

function newgame() {
    gaimer.value = ''
    already = []
    document.getElementById("field").innerHTML = ''
    btn.style.visibility = 'hidden'
    gaimer.focus()
}

//Поиск элемента, начинающегося на заданный символ и не введенного ранее

function westich (element){
    let result
    result = element.at(0) == last && control(element) != true
    return result
}

//Проверка на наличие в списке уже названных элементов

function control (word) {
    return already.includes(word) 
}

gaimer.addEventListener('keypress', function(event) {

    if (event.key == 'Enter') {
        town = ''
        step = gaimer.value

// Проверка на отсутствие повтора введенного элемента

        if (control (step)) {
            document.getElementById("field").innerHTML += '<br>' + 'Уже было'  + '<br>'
            gaimer.value = ''
        } else {
            already.push(step);

// Вычисление последнего символа введенного элемента

            last = step.at(-1)
            town = towns.find(westich)

            if (typeof town == "string") {

// Если ответ найден

                document.getElementById("field").innerHTML += '<br>'
                document.getElementById("field").innerHTML += step + ' ' + town + '<br>'
                already.push(town);
                gaimer.value = ''
            } else {
                document.getElementById("field").innerHTML += '<br>' + 'Вы победили'
                btn.style.visibility = 'visible'
            }
        }
     } 
});      
