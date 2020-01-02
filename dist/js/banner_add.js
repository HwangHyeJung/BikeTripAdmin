$(document).ready(function (e) {

    $("input[type='file']").change(function (e) {

        //div 내용 비워주기
        $('#preview').empty();

        var files = e.target.files;
        var arr = Array.prototype.slice.call(files);

        //업로드 가능 파일인지 체크
        for (var i = 0; i < files.length; i++) {
            if (!checkExtension(files[i].name, files[i].size)) {
                return false;
            }
        }

        preview(arr);


    });//file change

    function checkExtension(fileName, fileSize) {

        var regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");
        var maxSize = 20971520;  //20MB

        if (fileSize >= maxSize) {
            alert('파일 사이즈 초과');
            $("input[type='file']").val("");  //파일 초기화
            return false;
        }

        if (regex.test(fileName)) {
            alert('업로드 불가능한 파일이 있습니다.');
            $("input[type='file']").val("");  //파일 초기화
            return false;
        }
        return true;
    }

    function preview(arr) {
        arr.forEach(function (f) {

            var img_html = '<div class="card" style="width: 40rem;">';

            //이미지 파일 미리보기
            if (f.type.match('image.*')) {
                var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성

                reader.onload = function (e) { //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
                    img_html += '<img src="' + e.target.result + '" class="card-img-top img-thumbnail">';
                    img_html += '<div class="card-body">';
                    img_html += '<p class="card-text">' + f.name + '</p>';
                    img_html += '</div></div>';

                    $(img_html).appendTo('#preview');
                }
                reader.readAsDataURL(f);
            } else {
                alert("이미지 파일이 아닙니다.");
            }
        });//arr.forEach
    }

});

$('#bannerForm').validate({
    rules: {
        banner: 'required',
        imageFile: 'required',
        editor: 'required',
        url: 'required',
        flatform: 'required',
        target: 'required',
        status: 'required'
    },
    messages: {
        banner: '배너명을 입력해 주세요!',
        imageFile: '이미지파일을 선택해 주세요!',
        editor: '본문을 입력해 주세요!',
        url: '타겟 URL을 입력해 주세요!',
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