let gifSuccess = document.querySelector('.quest__success'),
    questEnd = document.querySelector('.quest__end'),
    first = document.querySelector('.quest__first'),
    second = document.querySelector('.quest__second'),
    third = document.querySelector('.quest__third'),
    fourth = document.querySelector('.quest__fourth'),
    fifth = document.querySelector('.quest__fifth'),
    sixth = document.querySelector('.quest__sixth'),
    seventh = document.querySelector('.quest__seventh'),
    eighth = document.querySelector('.quest__eighth'),
    ninth = document.querySelector('.quest__ninth'),
    tenth = document.querySelector('.quest__tenth'),
    final = document.querySelector('.quest__final');

var eighthCounter = 0;

function changeStage(previous, next) {
    previous.style.display = 'none';
    gifSuccess.style.display = 'block';
    setTimeout(function () {
        gifSuccess.style.display = 'none';
        next.classList.remove('none');
    }, 2000);
}

first.querySelector('.first__button').addEventListener('click', function () {
    if (first.querySelector('.first__input').value  === '5-16-2-18-1-33') {
        changeStage(first, second);
    } else {
        alert('Пароль неверный. В доступе отказано.');
    };
});

second.querySelector('.second__button').addEventListener('click', function () {
    if (second.querySelector('.second__input').value.toUpperCase()  === 'БЛЮЗ 100 РЕНГЕН') {
        changeStage(second, third);
    } else {
        alert('Пароль неверный. В доступе отказано.');
    };
});

third.querySelector('.third__button').addEventListener('click', function () {
    changeStage(third, fourth);
});

fourth.querySelector('.fourth__button').addEventListener('click', function () {
    if (fourth.querySelector('.fourth__input').value.toUpperCase()  === 'УСПОКОЙ МЕНЯ') {
        changeStage(fourth, fifth);
    } else {
        alert('Пароль неверный. В доступе отказано.');
    };
});

fifth.querySelector('.fifth__button').addEventListener('click', function () {
    if (fifth.querySelector('.fifth__input').value.toUpperCase()  === '*SYSTEMERROR*') {
        changeStage(fifth, sixth);
    } else {
        alert('Пароль неверный. В доступе отказано.');
    };
});

sixth.querySelector('.sixth__button').addEventListener('click', function () {
    if (sixth.querySelector('.sixth__input').value  === '87') {
        changeStage(sixth, seventh);
    } else {
        alert('Хм.. не получается, попробуй посмотреть на задачу под другим углом..');
    };
});

seventh.querySelector('.seventh__button').addEventListener('click', function () {
    if (seventh.querySelector('.seventh__input').value  === '52') {
        changeStage(seventh, eighth);
    } else {
        alert('Nope!');
    };
});

eighth.querySelectorAll('.eighth__button').forEach(function (elem) {
    elem.addEventListener('click', function () {
        eighthCounter += 1;
        console.log(eighthCounter);
        eighth.querySelector('.eighth__count').innerHTML = `${10 - eighthCounter}`;
        elem.remove();
        if (eighthCounter === 10) {
            changeStage(eighth, ninth);
        };
    });
});

ninth.querySelector('.ninth__button').addEventListener('click', function () {
    alert('Кто поставил сюда эту форму?')
});

ninth.querySelector('.ninth__button--hide').addEventListener('click', function () {
    changeStage(ninth, tenth);
});

tenth.querySelector('.tenth__button').addEventListener('click', function () {
    if (tenth.querySelector('.tenth__input').value.toUpperCase()  === 'ОТВЕТСТВЕННАЯ') {
        changeStage(tenth, final);
    } else {
        alert('Nope!');
    };
});

final.querySelector('.final__button').addEventListener('click', function () {
    if (final.querySelector('.final__input').value.toUpperCase()  === 'АМЯВМЯУЁВА') {
        final.style.display = 'none';
        questEnd.style.display = 'block';
    } else {
        alert('Попробуй еще!');
    };
});