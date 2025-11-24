console.log(window.innerWidth)
const body = document.querySelector('body');


// window.scrollTo({
//     top: 3400,
//     behavior: 'smooth' // опционально: плавная прокрутка
// });


body.classList.add("noScroll");

window.addEventListener('load', function () {
    const preloader = document.querySelector('#preloader')
    preloader.classList.add('close');

    setTimeout(function () {
        body.classList.remove("noScroll");

        setTimeout(function () {
            preloader.style.display = 'none';
        }, 600);
    }, 500);

    // Время полной загрузки страницы
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Страница загружена за ${loadTime} мс`);
});






const header = document.querySelector('header');
// const headerMenuA = document.querySelectorAll('header .menu a');
// const menuDots = document.querySelectorAll('header .menu a .dot');

// headerMenuA.forEach(element => {
//     element.addEventListener('click', () => {
//         menuDots.forEach(dot => {
//             dot.style.opacity = 0;
//         })

//         element.firstElementChild.style.opacity = 1;
//     })
// });


const headerLogo = document.querySelector('header .logo');

headerLogo.addEventListener('click', function () {
});



const headerBurger = document.querySelector('header .burger');
const headerMenuBurger = document.querySelector('header .menuBurger');
const headerMenuBurgerA = document.querySelectorAll('header .menuBurger');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle("open");
    headerMenuBurger.classList.toggle("open");
    body.classList.toggle("noScroll");
})

headerMenuBurgerA.forEach(element => {
    element.addEventListener('click', () => {
        headerBurger.classList.toggle("open");
        headerMenuBurger.classList.toggle("open");
        body.classList.toggle("noScroll");
    })
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 1128) {
        if (headerBurger.classList.contains("open")) {

            headerBurger.classList.remove("open");
            headerMenuBurger.classList.remove("open");
            body.classList.remove("noScroll");
        }
    }
});










const partsPriceNuv = document.querySelectorAll('#price .nav .part');
const classesPrice = document.querySelectorAll('#price .classes');

partsPriceNuv.forEach(element => {
    element.addEventListener('click', () => {
        partsPriceNuv.forEach(el => {
            el.classList.remove("open");
        })
        element.classList.add("open");

        if (element.classList.contains("part1")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes1")) {
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part2")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes2")) {
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part3")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes3")) {
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part4")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if (cl.classList.contains("classes4")) {
                    cl.classList.add("open");
                }
            })
        }
    })
});







const partQuestions = document.querySelectorAll('#questions .part .boxQuestions .partQuestions');

partQuestions.forEach(element => {
    element.addEventListener('click', () => {
        // element.classList.toggle('open')
        toggleDiv(element);

    })
});




function toggleDiv(element) {
    const isOpening = !element.classList.contains('open');

    // Отключаем переходы для измерений
    const originalTransition = element.style.transition;
    element.style.transition = 'none';

    if (isOpening) {
        // Сохраняем текущее состояние (минимальная высота)
        const startHeight = element.getBoundingClientRect().height;

        // Добавляем класс и измеряем конечную высоту
        element.classList.add('open');
        const endHeight = element.getBoundingClientRect().height;

        // Возвращаем к начальной высоте и включаем анимацию
        element.style.height = startHeight + 'px';
        element.style.transition = originalTransition;

        // Запускаем анимацию
        requestAnimationFrame(() => {
            element.style.height = endHeight + 'px';
        });

    } else {
        // Сохраняем текущую высоту
        const startHeight = element.getBoundingClientRect().height;

        // Убираем класс и измеряем конечную высоту
        element.classList.remove('open');
        const endHeight = element.getBoundingClientRect().height;

        // Возвращаем класс для анимации
        element.classList.add('open');
        element.style.height = startHeight + 'px';
        element.style.transition = originalTransition;

        // Анимируем к конечной высоте
        requestAnimationFrame(() => {
            element.classList.remove('open');
            element.style.height = endHeight + 'px';
        });
    }

    // Очистка после анимации
    element.addEventListener('transitionend', function handler() {
        element.removeEventListener('transitionend', handler);
        element.style.transition = '';
        element.style.height = '';
    }, { once: true });
}

