$(document).ready(function () {
        $('.carousel__item').slick({
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
        });

        $('.reviews__cards').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            // centerMode: true
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 972,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                },

                {
                    breakpoint: 330,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }

            ]
        });

        $('#burger').click(function () {
            $('#menu').show()
        })
        $('#menu-close').click(function () {
            $('#menu').hide()
        })


        $('#fleet').click(function (event) {
            event.preventDefault();
            $('.carousel')[0].scrollIntoView({behavior: "smooth"});
        });

        $('#conditions').click(function (event) {
            event.preventDefault();
            $('.advantage')[0].scrollIntoView({behavior: "smooth"});
        });

        $('#contacts').click(function (event) {
            event.preventDefault();
            $('.contacts')[0].scrollIntoView({behavior: "smooth"});
        });

        $('#onUp').click(function () {
            $('.header')[0].scrollIntoView({behavior: "smooth"});
        });


        let select1 = $('#select_1');
        let select2 = $('#select_2');
        let begin = $('#begin');
        let end = $('#end');

        let yourName = $('#name');
        let yourPhone = $('#phone');
        let yourEmail = $('#email');
        let yName = $('#yourname');
        let yPhone = $('#yourphone');
        let fillout = $('#fillout')
        let rent = $('.carousel__item-block__button')
        let carLambAventSVJgreen = $('#car_1');
        let carLambAventSVJyellow = $('#car_2');
        let carLambAventSRoadster = $('#car_3');
        let carLambAventSVJRoadster = $('#car_4');
        let popupAnswerText1 = $('.popup__answer_1');
        let popupAnswerText2 = $('.popup__answer_2');
        let popupMiniForm = $('.popup__miniForm');
        let popupForm = $('.popup__form');
        let loader = $('.loader');


        fillout.click(function () {
            $('.popup__form__background, .popup__form').show();
        });

        rent.click((e) => {
            $('.popup__form__background, .popup__form').show();
        });

        carLambAventSVJgreen.click((e) => {
            select1.find('option').each(function () {
                let $this = $(this);
                if ($this.text() === 'Lamborghini Aventador SVJ green') {
                    $this.attr('selected', 'selected');
                    return false;
                }
            });
        });

        carLambAventSVJyellow.click(() => {
            select1.find('option').each(function () {
                let $this = $(this);
                if ($this.text() === 'Lamborghini Aventador SVJ yellow') {
                    $this.attr('selected', 'selected');
                    return false;
                }
            });
        });

        carLambAventSRoadster.click(() => {
            select1.find('option').each(function () {
                let $this = $(this);
                if ($this.text() === 'Lamborghini Aventador S Roadster') {
                    $this.attr('selected', 'selected');
                    return false;
                }
            });
        });
        carLambAventSVJRoadster.click(() => {
            select1.find('option').each(function () {
                let $this = $(this);
                if ($this.text() === 'Lamborghini Aventador SVJ Roadster') {
                    $this.attr('selected', 'selected');
                    return false;
                }
            });
        });


        $('#order').click(function () {
            $('.popup__miniForm__background,.popup__miniForm').show()
        })

        $('.popup__form-action_btn').css('margin-top', '30px').css('margin-bottom', '0')



        $(document).on("click", function (e) {
            let popup__form = $('.popup__form__background')
            if (popup__form.closest(e.target).length) {
                popup__form.hide();
            }
        });
        $(document).on("click", function (e) {
            let close = $('.popup__form-close')
            if (close.has(e.target).length) {
                $('.popup__form__background').hide();
            }
        });

        $(document).on("click", function (e) {
            let popupminiForm = $('.popup__miniForm__background')
            if (popupminiForm.closest(e.target).length) {
                popupminiForm.hide();
            }
        });
        $(document).on("click", function (e) {
            let popupMiniFormClose = $('.popup__miniForm-close')
            if (popupMiniFormClose.has(e.target).length) {
                $('.popup__miniForm__background').hide();
            }
        });


        yourPhone.mask("+7 (999) 999-99-99");
        yPhone.mask("+7 (999) 999-99-99");


        let showError = (input) => {
            input.next().show()
            input.css('border-color', 'red')

        }

        $('#form-button_send').click(function () {

            $('.popup__form-select, .popup__form-application-input, .popup__form-personal_info-input').css('border-color', 'rgb(70, 70, 70, 0.988)')
            $('.error-input').hide()

            let hasError = false;

            if (!select1.val()) {
                showError(select1)
                hasError = true;
            }

            if (!select2.val()) {
                showError(select2)
                hasError = true;
            }

            if (!begin.val()) {
                showError(begin)
                hasError = true;
            }
            if (!end.val()) {
                showError(end)
                hasError = true;
            }

            if (!yourName.val()) {
                showError(yourName)
                hasError = true;
            }

            if (!yourPhone.val()) {
                showError(yourPhone)
                hasError = true;
            }

            if (!yourEmail.val()) {
                showError(yourEmail)
                hasError = true;
            }


            if (!hasError) {
                loader.css('display', 'flex')
                $.ajax({
                    method: "POST",
                    url: "https://testologia.site/checkout",
                    data: {name: yourName.val(), phone: yourPhone.val(), email: yourEmail.val()}
                })
                    .done(function (msg) {
                        loader.hide()
                        if (msg.success) {
                            popupForm.css('display', 'none')
                            popupAnswerText1.css('display', 'block')
                        } else {
                            alert('Возникла ошибка при оформлении заказа, проверьте правильность заполнения полей')
                        }
                    });
            }
        });


        $('#form-button_order').click(function () {
            let hasError = false;

            $('.popup__form-personal_info-input').css('border-color', 'rgb(70, 70, 70, 0.988)')
            $('.error-input').hide()


            if (!yName.val()) {
                showError(yName)
                hasError = true;
            }

            if (!yPhone.val()) {
                showError(yPhone)
                hasError = true;
            }


            if (!hasError) {
                loader.css('display', 'block')
                $.ajax({
                    method: "POST",
                    url: "https://testologia.site/checkout",
                    data: {name: yName.val(), phone: yName.val()}
                })
                    .done(function (msg) {
                        loader.hide()
                        if (msg.success) {
                            popupMiniForm.css('display', 'none')
                            popupAnswerText2.css('display', 'block')
                        } else {
                            alert('Возникла ошибка при оформлении заказа, проверьте правильность заполнения полей')
                        }
                    });
            }
        });

    }
)
;





