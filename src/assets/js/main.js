const init = () => {

    "use strict";
    
    $(".js-field").on("focusin", function () {
        $(this).next(".js-label").addClass("regform__label_active")
    });

    $(".js-field").on("focusout", function () {
        this.value || $(this).next(".js-label").removeClass("regform__label_active")
    });

    $("label").click(function () {
        $(this).prev().focus()
    });
    
};

export default {
    init,
};

