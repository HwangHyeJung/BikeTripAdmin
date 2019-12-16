/**
 * Written by MichelleHwang (2019.12.14.)
**/

// $.validator.setDefaults({
//     submitHandler: () => {
//         alert('submit~~');
//     }
// });

$('#loginForm').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        passwd: {
            required: true,
            minlength: 5
        }
    },
    messages: {
        email: {
            required: '이메일을 입력해 주세요.',
            email: '메일형식을 확인해 주세요.'
        },
        passwd: {
            required: '패스워드를 입력해 주세요.',
            minlength: '패스워드는 5자리 이상입니다.'
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

// $("#loginForm").validate({
//     submitHandler: function (form) {
//         form.submit();
//     }
// });

$('#travelForm').validate({
    rules: {
        title: 'required',
        summary1: 'required',
        summary2: 'required',
        imageFile: 'required',
        category1: 'required',
        tag: 'required',
        location: 'required'
    },
    messages: {
        title: '제목을 입력해 주세요!',
        summary1: '한줄요약을 입력해 주세요!',
        summary2: '요약을 입력해 주세요!',
        imageFile: '이미지파일을 선택해 주세요.',
        category1: '카테고리는 하나이상 선택해 주세요.',
        tag: '태그를 입력해 주세요',
        location: '위치를 선택해 주세요.'
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