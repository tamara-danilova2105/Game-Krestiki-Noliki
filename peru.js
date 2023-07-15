// баннер анимация

let text = ' Перу. Империя Инков';
let a = 0;
let speed = 100;

function type () {
    if (a < text.length) {
        document.querySelector('h1').textContent += text.charAt(a);
        a ++;
        setTimeout(type, speed);
    }
}

type();

// ВИКТОРИНА

const button = document.querySelector('.btn');

button.addEventListener('click', result);

function result(e) {
    e.preventDefault();
    
    let score=0;
    
    if(document.querySelector('#answer1').checked){	
        score++;
    }
    
    if(document.querySelector('#answer2').checked){	
    score++;
    }
    
    if(document.querySelector('#answer3').checked) {	
        score++;
    }
    
    if(document.querySelector('#answer4').checked) {	
        score++;
    }
    
    if(document.querySelector('#answer5').checked) {	
        score++;
    }

    if(score === 5) {
        Swal.fire({
            icon: 'success',
            title: 'Браво!',
            text: `Ваши баллы: ${score} из 5`,
        })
    }

    else {
        Swal.fire({
            icon: 'warning',
            title: 'Есть ошибки',
            text: `Ваши баллы: ${score} из 5`,
        })
    }

}
