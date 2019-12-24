
$('#userForm').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        tel: 'required',
        birthday: 'required',
        nick: 'required',
        status: 'required',
        password: 'required',
        confirm_password: {
            required: true,
            equalTo: "#password"
        }
    },
    messages: {
        email: {
            required: '이메일을 입력해 주세요!',
            email: '이메일 형식을 확인해 주세요!'
        },
        tel: '전화번호를 입력해 주세요!',
        birthday: '생년월일을 입력해 주세요!',
        nick: '닉네임을 입력해 주세요!',
        password: '패스워드를 입력해 주세요!',
        confirm_password: {
            required: '패스워드를 입력해 주세요!',
            equalTo: '입력한 패스워드가 일치하지 않습니다.'
        }
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