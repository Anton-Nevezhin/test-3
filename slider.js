const foto = ['1.jpg', '2.jpg', '3.jpg']



window.setInterval(next, 2000);
let i = 0
const image = document.getElementById('slider')
const text = document.getElementById('text')

function next() {
    i++
    if (i == foto.length) {
        i = 0
    }
    image.src = 'images/' + foto[i]
}

function prev() {
   i--
   if (i < 0) {
       i = foto.length - 1
   }
   image.src = 'images/' + foto[i]
}
