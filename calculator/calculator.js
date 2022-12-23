const klav = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

let parent = document.querySelector('#parent');


document.write = ('Вывод текста в javascript')

function smena() {
    let i = 1
    for (let i = 0; i<klav.length; i++) {
        let parent = document.getElementById('parent')
        let p = document.createElement('div');
        p.textContent = klav[i];
        p.style.height = '50px'
        p.style.width = '50px'

        parent.appendChild(p);
    }

 }

