$(function() {

    $('.input').each(function() {
        changeState($(this));
    });

    $('.input').on('focusout', function() {
        changeState($(this));
    });

    function changeState($formControl) {
        if ($formControl.val().length > 0) {
            $formControl.prev().addClass('labelup');
        } else {
            $formControl.prev().removeClass('labelup');
        }
        $('.input').on('focusin', function() {
            $(this).prev().addClass('labelup');
        });
    }
});
