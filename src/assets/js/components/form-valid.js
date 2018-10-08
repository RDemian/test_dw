const init = () => {
    
    const $form = $('.JQValidation');
    const $phone = $('#phone');

    const $popupWrap = $('.popup-wrap');
    const $popup = $('.popup');
    const $close = $('.popup__close');


    $form.on('submit', (e) => {
        e.preventDefault();
    });

    $('.js-upload').on("change", function(e) {
        var label = $('.js-label-upload');
        //console.log(e);
        label.html(e.target.value);
        /*
        var currentUpload = $(this);
        var label = currentUpload.prev()
            , labelVal = label.html()
            , errorLabelSize = currentUpload.parent().next()
            , errorLabelFormat = currentUpload.parent().next().next();
        if (this.files[0].size > 10485760)
            errorLabelSize.show(),
            this.value = "";
        else if ("image/jpeg" !== this.files[0].type && "image/png" !== this.files[0].type)
            errorLabelFormat.show(),
            this.value = "";
        else {
            errorLabelSize.hide(),
            errorLabelFormat.hide();
            var fileName = "";
            fileName = this.files && this.files.length > 1 ? (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : e.target.value.split("\\").pop(),
            fileName ? label.html(fileName) : label.html(labelVal)
        }
        */
    })
    
    
    $('#regform-phone').mask("+7 (000) 000-00-00");
    /*
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
    */
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
        errorPlacement: function(error, element) {
            //errorPlacement: (error, element) => {    
                //$error.appendTo( $element.parent() );
                error.appendTo(element.parent());
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
                //digits: true,
                minlength: 11,
            },
        },

        messages: {
            regform_agree: {
                required: 'требуется согласие',
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

};

export default {
    init,
};
