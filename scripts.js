const mas = ['Маша',"Саша","Паша","Гена","Вова"]
const images = ['https://img.freepik.com/free-photo/portrait-of-smiling-attractive-redhead-young-woman-with-long-wavy-hair_295783-487.jpg?w=900&t=st=1661275717~exp=1661276317~hmac=431f8d410a7d9d9c727b22e099be8fc8da13b7c22fc1e5419b4e4d3ea2c2f8d2', 'https://img.freepik.com/free-photo/happy-bearded-young-man-looks-with-joyful-expression-has-friendly-smile-wears-yellow-sweater-and-red-hat_295783-1388.jpg?w=900&t=st=1661273291~exp=1661273891~hmac=11b25fc348440d0e8b4a01573fd9675580eed01636f478b0dc9847e229a11fb7', 'https://img.freepik.com/free-photo/studio-portrait-of-bearded-man-posing-over-beige-background-looking-into-camera-with-broad-smile-on-his-face_295783-16582.jpg?w=740&t=st=1661276040~exp=1661276640~hmac=0dd47fbf1046eef8b1b41c4fbb58147804ce78c58541d22556a149f4add1e1bf']
const fotokart = ['1.jpg', '2.jpg', '3.jpg']

function startBesk() {
   window.setInterval (timer, 1000)
}

function timer() {
   const elem = document.getElementById('startBesk')
   let t = elem.innerHTML
   t = parseInt(t) + 1
   elem.innerHTML = t
}

function dvaStart() {
   startStopId = window.setInterval (dvaTimer, 500)
   const btnStart = document.getElementById('btnStart')
   btnStart.disabled=true
   const btnStop = document.getElementById('btnStop')
   btnStop.disabled=false
}

function dvaTimer() {
   const elem = document.getElementById('startStop')
   let t = elem.innerHTML
   t = parseInt(t) + 1
   elem.innerHTML = t
}

function dvaStop () {
   window.clearInterval(window.startStopId)
   const btnStop = document.getElementById('btnStop')
   btnStop.disabled=true
   const btnStart = document.getElementById('btnStart')
   btnStart.disabled=false
}

function clock() {
   const t = new Date()
   let h = t.getHours()
   let m = t.getMinutes()
   if (m<10) {
      m='0' + m
   }
   let s = t.getSeconds()
   if (s<10) {
      s='0' + s
   }
   const elem = document.getElementById('clock')
   elem.innerHTML = h + ':' + m + ':' + s
}

function startClock() {
   window.setInterval(clock, 500)
}

function timer() {
   window.setInterval(timerStart, 500)
}

function timerStart() {
   const elem = document.getElementById('timer')
   const btn = document.getElementById('btnTimer')
   const text = document.getElementById('timerStop')
   btn.disabled = true
   if (elem.innerHTML>0) {
      elem.innerHTML = parseInt(elem.innerHTML) - 1
   } else {
      text.style.display = 'block'
   }
}

function slider() {
   const sl = document.getElementById('slider')
   const img = sl.querySelector('img')
   let i = 1
   img.src= 'images/' + fotokart[0]
   window.setInterval(function() {

      img.src= 'images/' + fotokart[i]
      i++
      if (i==(images.length)) {
         i=0
      }
   }, 1000)
}

function page() {
   slider()
   startClock()
}

function primer()
{
    document.getElementById("feedBack").innerHTML = 9
}

 