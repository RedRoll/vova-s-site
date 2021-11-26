// function for button 1

 $(function() {
    $(".box__btn-1").mouseenter(function(){
        if($(".hidden-box-1").is(":hidden")) {
            $(".hidden-box-1").slideDown(500); // 500 означает время - оно задает имеено плавное появление
            // после duration можно написать еще одно значение - функию, котрая запустится после завершения анимации
        }  
                                       
        else {
            $(".box__btn-1, .hidden-box-1").mouseleave(function(){
                $(".hidden-box-1").hide();
            });
        }
    });
});

// function for hidden block (hidden-box-1)

$(function() {
    let boxBTN = '.hidden-box-1';  // сохраняю скрытый блок в переменной
    let elementBoxBTN = $(boxBTN);  // перевожу вышенаписанную переменную в jQuery обьект (для того,
    // чтобы этот скрытый блок можно было выбрать, тоесть взаимодействовать с ним через jQuery селлектор)
    
    elementBoxBTN.css({   // дальше задаю позиционирование для данного jQuery обьекта (скрытого блока)
        position: "absolute",
        top: 42,                                            
        left: -50,
        
        
    });
    $(".hidden-box-1").mouseover(function() {
        $(".hidden-box-1").show();            // запретить скрывать если указатель на блоке
    });
    
    
});


// hidden-box 2

$(function() {
    $(".box__btn-2").mouseenter(function(){
        if($(".hidden-box-2").is(":hidden")) {
            $(".hidden-box-2").slideDown(500); // 500 означает время - оно задает имеено плавное появление
            // после duration можно написать еще одно значение - функию, котрая запустится после завершения анимации
        }  
                                       
        else {
            $(".box__btn-2, .hidden-box-2").mouseleave(function(){
                $(".hidden-box-2").hide();
            });
        }
    });
});

$(function() {
    let boxBTN = '.hidden-box-2';  // сохраняю скрытый блок в переменной
    let elementBoxBTN = $(boxBTN);  // перевожу вышенаписанную переменную в jQuery обьект (для того,
    // чтобы этот скрытый блок можно было выбрать, тоесть взаимодействовать с ним через jQuery селлектор)
    
    elementBoxBTN.css({   // дальше задаю позиционирование для данного jQuery обьекта (скрытого блока)
        position: "absolute",
        top: 42,                                            
        left: 70,
        
        
    });
    $(".hidden-box-2").mouseover(function() {
        $(".hidden-box-2").show();            // запретить скрывать если указатель на блоке
    });
    
    
});

// hidden-box 3

$(function() {
    $(".box__btn-3").mouseenter(function(){
        if($(".hidden-box-3").is(":hidden")) {
            $(".hidden-box-3").slideDown(500); // 500 означает время - оно задает имеено плавное появление
            // после duration можно написать еще одно значение - функию, котрая запустится после завершения анимации
        }  
                                       
        else {
            $(".box__btn-3, .hidden-box-3").mouseleave(function(){
                $(".hidden-box-3").hide();
            });
        }
    });
});

$(function() {
    let boxBTN = '.hidden-box-3';  // сохраняю скрытый блок в переменной
    let elementBoxBTN = $(boxBTN);  // перевожу вышенаписанную переменную в jQuery обьект (для того,
    // чтобы этот скрытый блок можно было выбрать, тоесть взаимодействовать с ним через jQuery селлектор)
    
    elementBoxBTN.css({   // дальше задаю позиционирование для данного jQuery обьекта (скрытого блока)
        position: "absolute",
        top: 42,                                            
        right: -50,
        
        
    });
    $(".hidden-box-3").mouseover(function() {
        $(".hidden-box-3").show();            // запретить скрывать если указатель на блоке
    });
    
    
});




// продолжать писать и решать возникающие проблемы, поиграться еще с ищезновением

// slider area

$(document).ready(function(){   // эта запись означает - когда документ готов, выполнить функцию, которая написана в теле 
    $('.main__slide-show').slick({ // дальше внутри можно более детально настроить слайдер, например вкл\выкл стрелки и точки и т.д.
        arrows: false, // этим действием я выключил стрелки смены слайда (все эти функции прописаны в подключенно фалйле slick.min.js)
        dots: true,
        // slidesToShow: 2  // количество слайдовЮ которое будет показываться за раз
        speed: 1000, // скорость переключения между слайдами
        autoplay: true 
    });
}); // после этого действия в силу вступает подключенный ранее файл slick.min, в котором написана сама оболочка слайда
// ну и на данном этапе перехожу в CSS для создания обрамления самого слайда
