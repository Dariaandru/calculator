const screen1 = document.getElementById('screen');
const header = document.getElementById('header');
const n1 = document.getElementById('1');
const n2 = document.getElementById('2');
const n3 = document.getElementById('3');
const n4 = document.getElementById('4');
const n5 = document.getElementById('5');
const n6 = document.getElementById('6');
const n7 = document.getElementById('7');
const n8 = document.getElementById('8');
const n9 = document.getElementById('9');
const n0 = document.getElementById('0');
const dot = document.getElementById('dot');
const res = document.getElementById('but-res');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus')
const mult = document.getElementById('mult');
const div = document.getElementById('div');
let content = [];

header.addEventListener('click', () => {
    content = [];
    screen1.innerHTML = '';
});

n1.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = String(screen1.innerHTML) + '1';
        content.push('1')  
    }
    
});

n2.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '2';
        content.push('2')  
    }
    
});

n3.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '3';
        content.push('3')  
    }
    
});

n4.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '4';
        content.push('4')  
    }
    
});

n5.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '5';
        content.push('5')  
    }
    
});

n6.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '6';
        content.push('6')  
    }
    
});

n7.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '7';
        content.push('7')  
    }
    
});

n8.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '8';
        content.push('8')  
    }
    
});

n9.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '9';
        content.push('9')  
    }
    
});

n0.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '0';
        content.push('0')  
    }
    
});


dot.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + '.';
        content.push('.')  
    }
    
});


plus.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + " + ";
        content.push('+');
    }
});

minus.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + " - ";
        content.push('-');
    }
});

mult.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + " * ";
        content.push('*');
    }
});

div.addEventListener('click', () => {
    if (content.length < 30) {
        screen1.innerText = screen1.innerHTML + " / ";
        content.push('/');
    }
});

res.addEventListener('click', () => {
    let exs = screen1.innerText.split(' ');
    let result;
    console.log(exs);
    let i
    result = Number(exs[0]);
    if (exs[0] == '-')
        {
            result = 0;
        }
    for (i = 0; i<exs.length; i++)
        // {   console.log('k')
        {
            if (exs[i] == '+')
                {
                    result = result + Number(exs[i+1]);
                }

            if (exs[i] == '-')
                {
                    result = result - Number(exs[i+1]);
                }
            if (exs[i] == '*')
                {
                    result = result * Number(exs[i+1]);
                }
            if (exs[i] == '/')
                {
                    result = result / Number(exs[i+1]);
                }
        }

            
            
            screen1.innerText = result;
            console.log(Number(result));

});






       
