document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.switch').forEach(trigger => {
        trigger.addEventListener('click', function() {
            this.x = ((this.x || 0) + 1) % 2;
            if (this.x) {
                document.querySelectorAll('.drop_img_2, .drop_head_2, .four_1_2, .zero_2, .four_2_2, .circ_abs_404_2, .circk_404_black, .vert_2, .hor_2, .bul_black, .sqare_1_2, .cover_circ, .logo_black, .sqare_light, .circle_grid_2,.sqare_1_2, .line_diog_new, .circle_4_2, .line_dig_1_new, .line_abs_circle_2, .circle_abs_2, .circ_abs_team_2, .ar_abs_team_2, .scroll_square_2, .email_logo_2, .logo_footer_2,.cerdro_logo_2').forEach(target => target.classList.add('on'));
                document.querySelectorAll('.drop_img, .four_1, .zero,.four_2, .new_cover_blot,.blur_add,.blur_404, .circk_404, .circ_abs_404, .blot_pp, .hor, .vert,.bul, .sqare_1, .logo, .sqare, .new_blur, .blur_circle_wr, .blot_blur_box_3, .blot_blur_box, .half_aqare, .blot_blur_3, .circle_grid, .sqare_1, .line_diog_2, .line_dig_1, .circle_4, .line_abs_circle, .circle_abs, .circ_abs_team, .scroll_square, .ar_abs_team, .email_logo, .logo_footer, .cerdro_logo').forEach(target => target.classList.add('off'));
                document.querySelectorAll('.cursor_invert, .social_link, .line_cover, .line_abs_404, .line_abs_404_2, .line_pp, .dopbox_wrap, .new_drop, .drop_head, .drop_line, .line_nav, body, .big_tx_wrap, .big_tx, .semi_64.green, .semi_64.blue, .swiper-slide, .card_wr, .glass_sec_div, .reg_32, .head_2.green, .lines_wrap, .vert_line_bg, .circle_bottom, .line_hor_center, .line_90, .line_yggy, .line, .cont_line_100, .cont_line_100.two, .input, .button, .line_grid, .splide__slide-mob, .new-glass-div, .blog__card-seperator').forEach(target => target.classList.add('light'));
                document.querySelectorAll('.new_cover_blot_mob').forEach(target => target.classList.add('mob_off'));
                document.querySelectorAll('.burger').forEach(target => target.classList.add('light_off'));
                document.querySelectorAll('.nav-link-down, .nav-link, .new_maoil_link').forEach(target => target.classList.add('new_light'));
                document.querySelectorAll('.white_stroke').forEach(target => target.classList.add('black_stroke'));
                document.querySelectorAll('.switch_wrap').forEach(target => target.classList.add('bt_light'));
            } else {
                document.querySelectorAll('.drop_img_2, .drop_head_2, .four_1_2, .zero_2, .four_2_2, .circ_abs_404_2, .circk_404_black, .vert_2, .hor_2, .bul_black, .sqare_1_2, .cover_circ, .logo_black, .sqare_light, .circle_grid_2,.sqare_1_2, .line_diog_new, .circle_4_2, .line_dig_1_new, .line_abs_circle_2, .circle_abs_2, .circ_abs_team_2, .ar_abs_team_2, .scroll_square_2, .email_logo_2, .logo_footer_2,.cerdro_logo_2').forEach(target => target.classList.remove('on'));
                document.querySelectorAll('.drop_img, .four_1, .zero,.four_2, .new_cover_blot,.blur_add,.blur_404, .circk_404, .circ_abs_404, .blot_pp, .hor, .vert,.bul, .sqare_1, .logo, .sqare, .new_blur, .blur_circle_wr, .blot_blur_box_3, .blot_blur_box, .half_aqare, .blot_blur_3, .circle_grid, .sqare_1, .line_diog_2, .line_dig_1, .circle_4, .line_abs_circle, .circle_abs, .circ_abs_team, .scroll_square, .ar_abs_team, .email_logo, .logo_footer, .cerdro_logo, .blog__card-seperator').forEach(target => target.classList.remove('off'));
                document.querySelectorAll('.cursor_invert, .social_link, .line_cover, .line_abs_404, .line_abs_404_2, .line_pp, .dopbox_wrap, .new_drop, .drop_head, .drop_line, .line_nav, body, .big_tx_wrap, .big_tx, .semi_64.green, .semi_64.blue, .splide-slide.swiper-slide, .card_wr, .glass_sec_div, .reg_32, .head_2.green, .lines_wrap, .vert_line_bg, .circle_bottom, .line_hor_center, .line_90, .line_yggy, .line, .cont_line_100, .cont_line_100.two, .input, .button, .line_grid, .splide__slide-mob, .new-glass-div').forEach(target => target.classList.remove('light'));
                document.querySelectorAll('.switch_wrap').forEach(target => target.classList.remove('bt_light'));
                document.querySelectorAll('.white_stroke').forEach(target => target.classList.remove('black_stroke'));
                document.querySelectorAll('.new_cover_blot_mob').forEach(target => target.classList.remove('mob_off'));
                document.querySelectorAll('.nav-link-down, .nav-link, .new_maoil_link').forEach(target => target.classList.remove('new_light'));
                document.querySelectorAll('.burger').forEach(target => target.classList.remove('light_off'));
            }
        });
    });
});
