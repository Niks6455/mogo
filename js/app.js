$(function(){
    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset =  $(window).scrollTop();

    //fihed header
    checkSkrol(scrollOffset);
    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();
        checkSkrol(scrollOffset);
    });



    function checkSkrol(scrollOffset){
      
        if (scrollOffset >= introH){
            header.addClass("fixed")
        }
        else{
            header.removeClass("fixed")
        }
    }



     //smooth scroll
     $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });



    // Menu nav toggle
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



  
    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
        // toggleClass Осуществляет одностороннее переключение всех классов, которым принадлежат элементы, содержащиеся в объекте jQuery
       
    });

    //slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

// Получите все элементы, которым вы хотите добавить анимацию
const elements = document.querySelectorAll('#anim');

// Функция, которая будет проверять положение элементов при прокрутке
function checkScroll() {
  elements.forEach(element => {
    // Получите положение элемента относительно верхней части окна
    const elementPosition = element.getBoundingClientRect().top;

    // Проверьте, находится ли элемент в пределах видимости окна
    if (elementPosition < window.innerHeight) {
      // Добавьте класс "slide-in-left" к элементу
      element.classList.add('animation');
    }
  });
}

// Вызовите функцию checkScroll при загрузке страницы и при прокрутке
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
