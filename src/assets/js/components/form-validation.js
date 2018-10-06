    import $ from 'jquery';
    import validate from 'jquery-validation';

    const $form = $('.JQValidation');
    const $phone = $('#phone');

    const $popupWrap = $('.popup-wrap');
    const $popup = $('.popup');
    const $close = $('.popup__close');


    $form.on('submit', (e) => {
        e.preventDefault();
    });

    function openPopup() {
        $popupWrap.css('display', 'block');
        $popup.css('display', 'flex');

        $close.on('click', () => {
            $popupWrap.css('display', 'none');
            $popup.css('display', 'none');
        });

        $popupWrap.on('click', () => {
            $popupWrap.css('display', 'none');
            $popup.css('display', 'none');
        });
    };

    $.validator.addMethod("passwordText", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z]).*$/.test(value);
    }, "Только цифры и буквы");

    $.validator.addMethod("emailText", function (value, element) {
        return this.optional(element) || /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(value);
    }, 'Некорректный адрес');

    $form.validate({

        debug: true,
        
        errorElement: 'div',

        errorClass: 'field-error',

        validClass: 'field-valid',

        ignoreElement: '.field-ignore',

        submitHandler: function (form, event) {
            /*
            openPopup();
            $form[0].reset();
            $('.form__input').removeClass('form__input_valid');
            */
            console.log('Форма успешно отправлена!');
        },

        invalidHandler: function (event, validator) {
            console.warn('Форма заполнена с ошибками!');
        },

        //Обработчик размеения элемента с сообщением
        //Переносим сообщение в нужное место
        /*
        errorPlacement: ($error, $el) => {
            $error
                .appendTo($(''))
                .addClass('input__error_element');
        }
        */
        rules: {
            username: {
                required: true,
                minlength: 4,
            },
            password: {
                required: true,
                passwordText: true,
                minlength: 6,
            },
            returnPassword: {
                required: true,
                passwordText: true,
                minlength: 6,
                equalTo: '#password',
            },
            email: {
                required: true,
                emailText: true,
                minlength: 6,
            },
            phone: {
                required: true,
                digits: true,
                minlength: 11,
            },
        },

        messages: {
            username: {
                required: 'Обязательное поле',
                minlength: 'Короче 4 символов',
            },
            password: {
                required: 'Обязательное поле',
                minlength: 'Короче 6 символов',
            },
            returnPassword: {
                required: 'Обязательное поле',
                minlength: 'Короче 6 символов',
                equalTo: 'Пароли не совпадают',
            },
            email: {
                required: 'Обязательное поле',
                minlength: 'Короче 5 символов',
            },
            phone: {
                required: 'Обязательное поле',
                minlength: 'Короче 11 символов',
                digits: 'Только цифры'
            },
        }
    });
