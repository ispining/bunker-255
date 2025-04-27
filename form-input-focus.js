$('.input').focus(function() {
    $(this).closest('.input_wr').find('.field_line').click();
});
$('.input').focusout(function() {
    $(this).closest('.input_wr').find('.field_line').click();
});

$('.input').change(function() {
    if ($(this).val().length > 0) {
        $(this).closest('.input_wr').find('.field_line').addClass('full-opacity');
    } else {
        $(this).closest('.input_wr').find('.field_line').removeClass('full-opacity');
    }
});
