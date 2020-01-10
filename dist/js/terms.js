$('#termsForm').validate({
    rules: {
        title: 'required',
        editor: 'required',
    },
    messages: {
        title: '항목을 입력해 주세요!',
        editor: '내용을 입력해 주세요!',
    },
    errorElement: 'em',
    errorPlacement: (error, element) => {
        error.addClass('invalid-feedback');

        if (element.prop('type') === 'checkbox') {
            error.insertAfter(element.parent('label'));
        } else {
            error.insertAfter(element);
        }
    },
    // eslint-disable-next-line object-shorthand
    highlight: function (element) {
        $(element).addClass('is-invalid').removeClass('is-valid');
    },
    // eslint-disable-next-line object-shorthand
    unhighlight: function (element) {
        $(element).addClass('is-valid').removeClass('is-invalid');
    }

});