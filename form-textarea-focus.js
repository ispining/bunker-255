$('.input').focus(function() {
    $(this).closest('.area_wr').find('.field_line_2').click();
});
$('.input').focusout(function() {
    $(this).closest('.area_wr').find('.field_line_2').click();
});

$('.input').change(function() {
    if ($(this).val().length > 0) {
        $(this).closest('.area_wr').find('.field_line_2').addClass('full-opacity');
    } else {
        $(this).closest('.area_wr').find('.field_line_2').removeClass('full-opacity');
    }
});
