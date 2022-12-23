let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {

        // Добавляем ноувю li в список
  
        let parent = document.getElementById('list')
        let i = document.getElementById('input')
        let text = document.createElement('span');
        let del = document.createElement('span');
        let made = document.createElement('span');
        let p = document.createElement('li');
        text.textContent = i.value;
        text.addEventListener('dblclick', editor)
        del.textContent = 'Удалить';
        made.textContent = 'Сделано';
        p.classList = 'list';
        del.classList = 'href';
        text.classList = 'text';
        del.addEventListener('click',out);
        made.classList = 'href';
        made.addEventListener('click', pred);
        p.appendChild(text);
        p.appendChild(made);
        p.appendChild(del);
        parent.appendChild(p);
        i.value = ''
	}
});

function alerted() {
    alert("Вы нажали на кнопку");
}

function out() {
    this.parentElement.remove();
}

function pred() {
    this.parentElement.classList = 'new';
}

function editor () {
    let edit = document.createElement('input');
    let k = this
    edit.value = k.textContent
    edit.addEventListener('keypress', function(change) {
	if (change.key == 'Enter') {
       k.textContent = edit.value
    }
    });
    this.appendChild(edit);

}