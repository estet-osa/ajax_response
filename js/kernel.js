window.onload = function(){

    //Initiate query input
    var query = document.getElementById('query');

    document.getElementById('query').addEventListener('keydown', response, false);

}



//Cross Ajax object
function createAjax(){
    (typeof(XMLHttpRequest) == 'undefined') ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
}

//send data on server
function response(queryString){

    console.log(query.value);

    //form the data object
    var data = {
        queryString : queryString
    };

    //form the _POST
    var post = 'data='+JSON.stringify(data);

    //var h=createAjax();
    //h.open('POST', '/query', true);
    //h.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //h.send(post);
    //h.onreadystatechange = function(){
    //
    //    if(h.readyState == 4){
    //
    //        if(h.responseText.trim() === "ok"){
    //
    //            //parseQuery(JSON.parse(h.responseText));
    //            parseQuery(h.responseText);
    //
    //
    //
    //        }
    //    }
    //}


}

//Parse response from server
function parseQuery(queryResponse){

    console.log(queryResponse);


}





//$(document).ready(function(){
//
////Initiate vars
//    document.getElementById('shadow').style.visibility = 'hidden';
//    document.getElementById("circle_wrapper").style.display = 'none';
//
//    window.addEventListener("wheel", onwheel, false);
//
////Default request string
//    document.request = 'Заказ обратного звонка!';
//
////Плавный скролинг на jquery
//    $('a[href^="#"]').click(function(){
//        elementClick = $(this).attr("href");
//        destination = $(elementClick).offset().top;
//        if($.browser.safari){
//            $('body').animate( { scrollTop: destination }, 1100 );
//        }else{
//            $('html').animate( { scrollTop: destination }, 1100 );
//        }
//        return false;
//    });
//
//
//    document.getElementById('menu_btn').addEventListener('click', switch_menu, false);
//
//    document.getElementById('woman').addEventListener('mousemove', show_girl, false);
////Показываем лупу
//    document.getElementById('woman').addEventListener('mouseover', function(){
//        document.getElementById('second_woman').style.opacity = '1';
//    }, false);
////Прячем лупу
//    document.getElementById('woman').addEventListener('mouseout', function(){
//        document.getElementById('second_woman').style.opacity = '0';
//    }, false);
//
//    document.getElementById('man').addEventListener('mousemove', show_man, false);
////Прячем лупу
//    document.getElementById('man').addEventListener('mouseout', function(){
//        document.getElementById('second_man').style.opacity = '0';
//    }, false);
////Показываем лупу
//    document.getElementById('man').addEventListener('mouseover', function(){
//        document.getElementById('second_man').style.opacity = '1';
//    }, false);
//
////Close all modals
//    document.getElementById('shadow').addEventListener('click', close_modals, false);
//
//    document.getElementById('modal_btn').addEventListener('click', function(){
//        send_mail(document.getElementById('name'), document.getElementById('phone'));
//    }, false);
//
//
////Footer action event
//    document.getElementById('footer').addEventListener('mousemove', eagle_move, false);
//    setInterval(flashbang, Math.random() * (3000 - 2000) + 2000);
//
//});

/*
 $(document).ready(function() {
 if(navigator.userAgent.match(/(iPhone|iPad|iPod|Macintosh)/i)) {
 setTimeout(function() {
 location.href = '/mobile';
 }, 4000);
 };
 });
 */

function onwheel(event){
    var e = event || window.event;

// wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta;

    var list = document.getElementById('wizard_local_list');
    var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

//Элемент с другим списком
    var well = document.getElementById('wizard_local_list');

    if((parseInt(well.offsetTop) - 800) < scrollTop){
        if(parseInt(document.body.clientWidth) > 1000){
            setTimeout(function(){well.children[0].style.margin = '30px 0 55px';well.children[0].style.opacity = '1';}, 0);
            setTimeout(function(){well.children[1].style.margin = '30px 0 55px';well.children[1].style.opacity = '1';}, 500);
            setTimeout(function(){well.children[2].style.margin = '30px 0 55px';well.children[2].style.opacity = '1';}, 1100);
        }else{
            setTimeout(function(){well.children[0].style.margin = '30px auto 55px';well.children[0].style.opacity = '1';}, 0);
            setTimeout(function(){well.children[1].style.margin = '30px auto 55px';well.children[1].style.opacity = '1';}, 500);
            setTimeout(function(){well.children[2].style.margin = '30px auto 55px';well.children[2].style.opacity = '1';}, 1100);
        }
    }

    //well.innerHTML = delta + "<br>" + scrollTop + "<br> Положение блока - " + document.getElementById('wizard_scroll').offsetTop;

}





//Показываем татуировки на девушке
function show_girl(event){
    var e = event || window.event;

//Инициируем окружность
    var circle = document.getElementById('second_woman');

    if(e.target.className == 'point'){
        circle.style.opacity = '0';
    }else circle.style.opacity = '1';

    var bg = document.getElementById('woman');
    var circle = document.getElementById('second_woman');

    var middleCircleWidth = circle.offsetWidth / 2;
    var middleCircleHeight = circle.offsetHeight / 2;

    var left = event.pageX - bg.offsetLeft - middleCircleWidth;
    var top = event.pageY - bg.offsetTop - middleCircleHeight;


    if(left < -middleCircleWidth)
        left = -middleCircleWidth;
    else if(left > bg.offsetWidth - middleCircleWidth)
        left = bg.offsetWidth - middleCircleWidth;

    if(top < -middleCircleHeight)
        top = -middleCircleHeight;
    else if(top > bg.offsetHeight - middleCircleHeight)
        top = bg.offsetHeight - middleCircleHeight;

    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
    circle.style.backgroundPosition = (-left) + 'px ' + (-top) + 'px';

}


//Eagle move
function eagle_move(event){
    var eagle = document.getElementById('eagle');
    var rock =  document.getElementById('footer');

    //Initiate clouds
    var cloud1 = document.getElementById('cloud1');
    var cloud2 = document.getElementById('cloud2');
    var cloud3 = document.getElementById('cloud3');

    eagle.style.opacity = '1';
    eagle.style.left = (event.pageX / 20) + 'px';
    eagle.style.top = (parseInt(event.clientY) / 20) + 'px';

    //Двигаем облака
    cloud1.style.marginLeft =  (-parseInt(event.clientX) / 40) + 'px';
    cloud2.style.marginLeft =  (parseInt(event.clientX) / 130) + 'px';
    cloud3.style.marginRight =  (-parseInt(event.clientX) / 130) + 'px';


    //console.log('PAGE-Y' + event.clientY);
    //console.log('Это положение на странице - ' + eagle.offsetWidth);

}

function flashbang(){

//Initiate vars
    var flash_switch = [true, false];

    var current_litning = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    document.getElementById('cloud' + current_litning).children[1].style.opacity = '1';
    document.getElementById('lightning').style.opacity = '0.8';

    setTimeout(function(){
        document.getElementById('lightning').style.opacity = '0';
        document.getElementById('cloud' + current_litning).children[1].style.opacity = '0';
    },500);

}



//Switch main menu
function switch_menu(){

//Initiate vars
    var menu = document.getElementById('menu');

    if(menu.style.height != '220px')
        menu.style.height = '220px';
    else menu.style.height = '35px';

}





//Прячем блок при наведении
function close_man_pointer_popup(elem){

//Получаем модальное окно точки
    var popup = elem.parentNode.nextElementSibling;

//Initiate vars
    var cirlcle = document.getElementById('second_woman');
    cirlcle.style.opacity = '1';

//Если текущее модальное окно не свернуто, то при убирании курсора
//не сворачиваем pointer

    if(popup.clientHeight == 0){

        elem.style.OTransform = 'rotate(-45deg) scale(1, 1)';
        elem.style.MozTransform = 'rotate(-45deg) scale(1, 1)';
        elem.style.MsTransform = 'rotate(-45deg) scale(1, 1)';
        elem.style.transform = 'rotate(-45deg) scale(1, 1)';

    }

}




//Close main modal
function close_main_modal(){

//Initiate vars
    var modal = document.getElementById('request_modal_wrapper');
    var shadow = document.getElementById('shadow');

    shadow.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';

}

//Закрываем модальное после отправки письма
function close_done_modal(){
    var modal = document.getElementById('circle_wrapper');
    var shadow = document.getElementById('shadow');

    shadow.style.visibility = 'hidden';
    modal.style.display = 'none';

}

//Зактываем все модальные окна
function close_modals(event){

//Закрываем основное модальное окно
    close_main_modal();

//Закрываем модальное окно с видео
    close_video_modal();

//Закрываем модаль, которая учавсвтут после завершения сообщения
    close_the_modal();

}

//Прячем модальное окно
function close_the_modal(){
    var modal = document.getElementById('request_modal_wrapper');
//var modal_two = document.getElementById('gallery_block');
    var doneModal = document.getElementById('circle_wrapper');
    var shadow = document.getElementById('shadow');

    //modal_two.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';
    doneModal.style.display = 'none';
    shadow.style.visibility = 'hidden';
}








//Прячем модальное окно
function close_the_modal(){
    var modal = document.getElementById('request_modal_wrapper');
    var doneModal = document.getElementById('circle_wrapper');
    var shadow = document.getElementById('shadow');

    modal.style.visibility = 'hidden';
    doneModal.style.display = 'none';
    shadow.style.visibility = 'hidden';
}






































































