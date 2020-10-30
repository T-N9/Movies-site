let screenHeight=$(window).height();
console.log(screenHeight);

$('.nav-link').click(function(){
    $('.navbar-collapse').removeClass('show');
    $('.menu-icon').addClass('fa-chevron-down');
    
});

$(window).scroll(function () {
    let currentPos=$(this).scrollTop();

    if(currentPos>=screenHeight-400){
        $('.m-header').addClass('m-navbar-scroll');
    }
    else{
        $('.m-header').removeClass('m-navbar-scroll');
        navActive('home');
        // $("#up-link").removeClass('d-block');
        // $("#up-link").addClass('d-none');
    }
});
$('.navbar-toggler').click(function () {
    let result=$('.navbar-collapse').hasClass('show');
    console.log(result);

    if(result){
        $('.menu-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
    else{
        $('.menu-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        
    }
});

function navActive(current){
    $(`.nav-link`).removeClass("nav-active");
    $(`.nav-link[href='#${current}']`).addClass("nav-active");
}
function navScroll(){
    let currentSec=$("section[id]");
    currentSec.waypoint(function(direction){
        if(direction=="down"){
            let currentId=$(this.element).attr('id');
            console.log(currentId);
            navActive(currentId);
        }
    },{offset:'0px'});
    currentSec.waypoint(function(direction){
        if(direction=="up"){
            let currentId=$(this.element).attr('id');
            console.log(currentId);
            navActive(currentId);
        }
    },{offset:'-10px'});
}

navScroll();
new WOW().init();
$(".casts_slide").slick({
    arrows:false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});