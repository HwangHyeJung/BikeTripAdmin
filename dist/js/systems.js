$(document).ready(function (e) {

    // 플러스 버튼
    $("#plus_btn").click(function () {
        var code_val = '<tr><td><input type="radio" name="select_code" value="1" class="align-middle mt-2"></td>';
        code_val += '<td><input type="text" class="form-control id="subcode_name"></td>"';
        code_val += '<td><input type="text" class="form-control" id="subcode"></td><td></td></tr>';

        $("#code_table > tbody:last").append(code_val);
    });


    // 코드 UP, DOWN, DEL 버튼
    $("#code_up").click(function () {
        var p = $('input[name="select_code"]:checked').parent().parent();
        var num = p.index();

        if (num > 1) moveUp(p);
    });
    $("#code_down").click(function () {
        var p = $('input[name="select_code"]:checked').parent().parent();
        moveDown(p);
    });
    $("#code_del").click(function () {
        var p = $('input[name="select_code"]:checked').parent().parent();
        p.fadeOut(function () {
            p.remove();
        })
    });

    var moveUp = function (line) {
        line.insertBefore(line.prev());
    }
    var moveDown = function (line) {
        line.insertAfter(line.next());
    }
});


$('#managerForm').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: 'required',
        status: 'required',
        authority: 'required',
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
        name: '이름을 입력해 주세요!',
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

$('#managerModify').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: 'required',
        status: 'required',
        authority: 'required'
    },
    messages: {
        email: {
            required: '이메일을 입력해 주세요!',
            email: '이메일 형식을 확인해 주세요!'
        },
        name: '이름을 입력해 주세요!'
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

$('#codeForm').validate({
    rules: {
        code_name: 'required',
        code: 'required'
    },
    messages: {
        code_name: '코드명을 입력해 주세요!',
        code: '코드를 입력해 주세요!'
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

