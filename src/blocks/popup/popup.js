$(document).ready(function(){
    var $buttonClose = $('.js-popup__close');

    $(document).on('click', ".js-popup__close", function(){
        $.magnificPopup.close();
    })
})
