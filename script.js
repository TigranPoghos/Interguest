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

const body = document.querySelector('body')
body.addEventListener('click', function(event){
    if(!rectangle__js4.classList.contains('active')){
        return
    }
    if(!event.target.closest('.rectangle__js4')){
        form__jsBook.classList.toggle('active')
        rectangle__js4.classList.toggle('active') 
    }
})





const rectangle__js3 = document.querySelector('.rectangle__js3')
const form__jsBody = document.querySelector('.form__jsBody')
rectangle__js3.addEventListener('click', function(){
	form__jsBody.classList.toggle('active') 
    rectangle__js3.classList.toggle('active') 
})
