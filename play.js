for (let i = 1; i < 10; i++) {
    let parent = document.getElementById('fields')
    let p = document.createElement('div');
    p.textContent = i;

    p.classList = 'field';
    p.addEventListener('click', nomer);

    parent.appendChild(p);

}

function newfunc() {
    document.getElementById('field').innerHTML = 'tyughj'
}

function nomer() {
 //   let p = document.getElementById('prim')
 //   let p = document.getElementById('prim')
 //   p.textContent += '0';
 //   alert (this.textContent)
    this.textContent = 'X'

}