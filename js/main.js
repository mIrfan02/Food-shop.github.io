jQuery(function ($) {
    "use strict";

    /* Window Load ---------------------- */

    $(window).on('load', function () {

        setTimeout(function(){
            $(".site-preload").fadeOut();
        },5500);


    });


    /* Document Ready ------------------- */

    $(document).ready(function () {




        AOS.init({
            duration: 1000
        });



        $('#burger-btn').on('click', function (e) {
            e.preventDefault();
            $('.burger-session').fadeIn();
        });

        $('#burger-btn').on('click', function (e) {
            e.preventDefault();
            $('.pizza-session').fadeOut();
        });

        $('#burger-btn').on('click', function (e) {
            e.preventDefault();
            $('.salad-session').fadeOut();
        });

        $('#burger-btn').on('click', function (e) {
            e.preventDefault();
            $('.soup-session').fadeOut();
        });
        $('#burger-btn').on('click', function (e) {
            e.preventDefault();
            $('.drink-session').fadeOut();
        });













        $('#btn-pizza').on('click', function (e) {
            e.preventDefault();
            $('.pizza-session').fadeIn();
        });

        $('#btn-pizza').on('click', function (e) {
            e.preventDefault();
            $('.burger-session').fadeOut();
        });

        $('#btn-pizza').on('click', function (e) {
            e.preventDefault();
            $('.salad-session').fadeOut();
        });

        $('#btn-pizza').on('click', function (e) {
            e.preventDefault();
            $('.soup-session').fadeOut();
        });
        $('#btn-pizza').on('click', function (e) {
            e.preventDefault();
            $('.drink-session').fadeOut();
        });







        $('#salad-btn').on('click', function (e) {
            e.preventDefault();
            $('.salad-session').fadeIn();
        });

        $('#salad-btn').on('click', function (e) {
            e.preventDefault();
            $('.pizza-session').fadeOut();
        });


        $('#salad-btn').on('click', function (e) {
            e.preventDefault();
            $('.burger-session').fadeOut();
        });

        $('#salad-btn').on('click', function (e) {
            e.preventDefault();
            $('.soup-session').fadeOut();
        });

        $('#salad-btn').on('click', function (e) {
            e.preventDefault();
            $('.drink-session').fadeOut();
        });












        $('#soup-btn').on('click', function (e) {
            e.preventDefault();
            $('.soup-session').fadeIn();

        });

        $('#soup-btn').on('click', function (e) {
            e.preventDefault();
            $('.pizza-session').fadeOut();
        });


        $('#soup-btn').on('click', function (e) {
            e.preventDefault();
            $('.burger-session').fadeOut();
        });

        $('#soup-btn').on('click', function (e) {
            e.preventDefault();
            $('.salad-session').fadeOut();
        });
        $('#soup-btn').on('click', function (e) {
            e.preventDefault();
            $('.drink-session').fadeOut();
        });







        $('#drnks-btn').on('click', function (e) {
            e.preventDefault();
            $('.drink-session').fadeIn();
        });

        $('#drnks-btn').on('click', function (e) {
            e.preventDefault();
            $('.pizza-session').fadeOut();
        });


        $('#drnks-btn').on('click', function (e) {
            e.preventDefault();
            $('.burger-session').fadeOut();
        });

        $('#drnks-btn').on('click', function (e) {
            e.preventDefault();
            $('.soup-session').fadeOut();
        });





















        $(".smooth-scroll").click(function (e) {
            e.preventDefault();
            let target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50
            }, 2000);
        });




    });
    /* Window Scroll -------------------- */

   



    /* Window Resize -------------------- */

    $(window).on('resize', function () {


    });

});