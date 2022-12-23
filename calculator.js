const klav = ['1/x', 'x*x', 'C', '+', '1', '2', '3', '-', '4', '5', '6', '/', '7', '8', '9', '*', '-/+', '0', ',', '=']
let argfirst = ''
let argsecond = ''
let operation = ''
let comma = false

let parent = document.querySelector('#parent');


document.write = ('Вывод текста в javascript')

function out () {
    let s = this.textContent
    let v = document.getElementById('display')
    if (argfirst == '') {
        v.value = ''
    }
    if ((s=='1' || s=='2' || s=='3' || s=='4' || s=='5' || s=='6' || s=='7' || s=='8' || s=='9' || s=='0') && operation == '') {
        v.value += s
        argfirst += s
    } else if ((s=='-' || s=='+' || s=='/' || s=='*') && operation == '') {
        operation = s
        v.value += s
        comma = false
    } else if ((s=='1' || s=='2' || s=='3' || s=='4' || s=='5' || s=='6' || s=='7' || s=='8' || s=='9' || s=='0') && operation != '') {
        v.value += s
        argsecond += s
    } else if (s=='=' && operation == '+' && argsecond != '') {
        v.value = Number(argfirst) + Number(argsecond)
        argfirst = ''
        argsecond = ''
        operation = ''
        comma = false
    } else if (s=='=' && operation == '-' && argsecond != '') {
        v.value = Number(argfirst) - Number(argsecond)
        argfirst = ''
        argsecond = ''
        operation = ''
        comma = false
    } else if (s=='=' && operation == '/' && argsecond != '') {
        v.value = Number(argfirst) / Number(argsecond)
        argfirst = ''
        argsecond = ''
        operation = ''
        comma = false
    } else if (s=='=' && operation == '*' && argsecond != '') {
        v.value = Number(argfirst) * Number(argsecond)
        argfirst = ''
        argsecond = ''
        operation = ''
        comma = false
    } else if (s == '1/x' && argsecond == '') {
        v.value = 1 / Number(argfirst)
        argfirst = ''
        argsecond = ''
        operation = ''
        comma = false
    } else if (s == 'x*x' && argsecond == '') {
        v.value = Number(argfirst) * Number(argfirst)
        argfirst = ''
        argsecond = ''
        operation = ''
        comma = false
    } else if (s == 'C') {
        v.value = ''
        argfirst = ''
        argsecond = ''
        operation = ''
        comma = false
    } else if (s == ',' && comma == false && operation == '') {
        v.value += '.'
        argfirst += '.'
        comma = true
    } else if (s == ',' && comma == false && operation != '') {
        v.value += '.'
        argsecond += '.'
        comma = true
    } else if (s == '-/+' && argfirst[0] != '-' && operation == '') {
        argfirst = "-".concat(argfirst)
        v.value = argfirst
    } else if (s == '-/+' && argfirst[0] == '-' && operation == '') {
        argfirst = argfirst.substring(1, argfirst.length)
        v.value = argfirst
    } else if (s == '-/+' && argsecond[0] != '-' && operation != '') {
        argsecond = "-".concat(argsecond)
        v.value = argfirst + operation + argsecond
    } else if (s == '-/+' && argsecond[0] == '-' && operation != '') {
        argsecond = argsecond.substring(1, argsecond.length)
        v.value = argfirst + operation + argsecond
    }

}



    let i = 1
    for (let i = 0; i<klav.length; i++) {
        let parent = document.getElementById('keyboard')
        let p = document.createElement('button');
        p.textContent = klav[i];

        p.classList = 'key';
        p.addEventListener('click', out);

        parent.appendChild(p);
    }

 

