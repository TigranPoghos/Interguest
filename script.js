document.addEventListener("DOMContentLoaded", function(){  



// Убавляем кол-во по клику
$('.quantity_inner .bt_minus').click(function() {
    let $input = $(this).parent().find('.quantity')
    let count = parseInt($input.val()) - 1
    count = count < 1 ? 1 : count
    $input.val(count)
});
// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function() {
    let $input = $(this).parent().find('.quantity')
    let count = parseInt($input.val()) + 1
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count
    $input.val(parseInt(count))
}); 
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '')
    }
    if (this.value == "") {
        this.value = 1
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'))
    }    
}); 




const burger__js = document.querySelector('.burger__js')
const burger__jsBody = document.querySelector('.burger__jsBody')
burger__js.addEventListener('click', function(){
	burger__jsBody.classList.toggle('active')
})
const burger__svg = document.querySelector('.burger__svg')
burger__svg.addEventListener('click', function(){
    burger__jsBody.classList.toggle('active')
})




const rectangle__js4 = document.querySelector('.rectangle__js4')
const form__jsBook = document.querySelector('.form__jsBook')
rectangle__js4.addEventListener('click', function(){
	form__jsBook.classList.toggle('active')
    rectangle__js4.classList.toggle('active')  
})

document.addEventListener('click', (e) => {
    const clickJs4 = e.composedPath().includes(rectangle__js4)
    const clickJsBook = e.composedPath().includes(form__jsBook)

    if (( !clickJs4 ) && ( !clickJsBook )) {
        rectangle__js4.classList.remove('active')
        form__jsBook.classList.remove('active')
    }
})

const snglBtns = document.querySelectorAll('.sngl__card-button')
const snglBody = document.querySelector('.sngl__body')
const snglBack = document.querySelector('sngl__left-back')
const form__categoryJs = document.querySelector('.form__categoryJs')
const snglJs = document.querySelector('.snglJs')
const amountJs = document.querySelector('.amountJs')
form__categoryJs.addEventListener('click', () => {
    snglJs.classList.toggle('active')
    amountJs.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    const clickJsCategory = e.composedPath().includes(form__categoryJs)
    const clickJsSngl = e.composedPath().includes(snglJs)
    const clickSnglBody = e.composedPath().includes(snglBody)

    if (( !clickJsCategory ) && ( !clickJsSngl ) && (!snglBody)) {
        form__categoryJs.classList.remove('active')
        snglJs.classList.remove('active')
        amountJs.classList.remove('active')
    }
})

snglBtns.forEach(snglBtn => {
    snglBtn.addEventListener('click', () => {
        snglBody.classList.toggle('active')
    })
})
snglBack.addEventListener('click', () => {
    snglBody.classList.toggle('active')
})
















const rectangle__js3 = document.querySelector('.rectangle__js3')
const form__jsBody = document.querySelector('.form__jsBody')
rectangle__js3.addEventListener('click', function(){
	form__jsBody.classList.toggle('active') 
    rectangle__js3.classList.toggle('active') 
})

document.addEventListener('click', (e) => {
    const clickJs3 = e.composedPath().includes(rectangle__js3)
    const clickJsBody = e.composedPath().includes(form__jsBody)

    if (( !clickJs3 ) && ( !clickJsBody )) {
        rectangle__js3.classList.remove('active')
        form__jsBody.classList.remove('active')
    }
})





// document.addEventListener("DOMContentLoaded", function(){
//     // gsap.to(".information",{
//     //     x:200,
//     //     y:200,
//     //     rotate:"360deg",
//     //     duration:5, //время анимации
//     //     repeat:true, //повтор
//     //     yoyo:true, //возращение в изначальное положение обратным действием
//     //     ease:"ease",//плавность
//     //     delay:5, //задержка перед анимацией
//     //     repeatDelay:5 //время для продолжения анимации
//     // })
//     let tl = gsap.timeline()

//     tl.to(".information", {
//         opacity:1,
//         x:0,
//         duration:1,
//     })

//     tl.to(".form", {
//         opacity:1,
//         x:0,
//         duration:1,
//     }, "-=1")

//     gsap.to(".gallery",{
//         opacity:1,
//         x:0,
//         scrollTrigger:{
//             trigger: ".gallery",
//             markers:true,
//             start:"top bottom",
//             end:"bottom top",
//             scrub:true,
//         },
//         duration:1,
//         onEnter:function(){
//             console.log("onEnter")
//         }
//     })
// })





let books__items = document.querySelectorAll('.books__item')
let books__itemFon = document.querySelector('.books__item-fon')
let books__itemSize = document.querySelector('.books__item-size')
let books__option = document.querySelector('.books__option')


books__items.forEach(books__item => {
    books__item.addEventListener('click', function(){
        books__item.classList.toggle('books__item-big')
        $(this).siblings().toggleClass('books__item-little')
        })
    })
})












var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

