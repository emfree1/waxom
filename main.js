$(document).ready(function(){
    $('.slider-in-header').slick({
     prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        dots:true
    });


$('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
    });

$('.menu-toggle').on('click',function(){
        $('.menu-toggle').toggleClass('active');
    });

$('.menu-toggle').on('click', function() {
    if($('.menu-toggle').hasClass('active')) {
        console.log('111');
        $('.dws-menu').css('display', 'block');
    } else {
        console.log('222');
        $('.dws-menu').css('display', 'none');
    }
});

});


document.querySelector('.menu-toggle').addEventListener('click', () => {
    console.dir(this)
})

const obj = {
    a:1,
    e:5,
    meth(){
        console.log(this)
    }
}

obj.meth()

function reverse(string){
    return string.split('-').reverse().join('')
}

function sumRange(start, end){
    var sum = 0
    for(var i = start; i<=end; i++){
        sum = sum + i
    }
    return sum
}

function min(a, b, c){
    var min = Number.POSITIVE_INFINITY
    for(var i = 0; i<= arguments.length; i++){
        if(arguments[i] < min){
            min = arguments[i]
        }
    }

   return min
}

function filterNumbers (array, max) {
    return array.filter(item => item < max)
} 

const users = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
  ];
  
  function usersToObject(users) { 
    var newUser = {}
    users.forEach(user => {
        newUser[user.id] = user
    });
    return newUser
   }
  console.log(usersToObject(users))

console.log(filterNumbers([1, 4, 8, 1, 20], 5))

// console.log(min(1,2,5, -3))
// console.log(reverse('h-o-l'))
// console.log(sumRange(-1, 3))