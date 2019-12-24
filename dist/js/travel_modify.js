
$(document).ready(function (e) {
    // 모달 박스 가져오기
    $("#spot-modal").load("modal/spot_modal.html");
    $("#path-modal").load("modal/path_modal.html");

    $("input[type='file']").change(function (e) {

        // $("#modal").load("/modal/spot_modal.html");

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

            //파일명이 길면 파일명...으로 처리
            var fileName = f.name;
            if (fileName.length > 30) {
                fileName = fileName.substring(0, 30) + "...";
            }

            //div에 이미지 추가
            var str = '<div>';
            str += '<h5>' + fileName + '</h5>';
            //str += '<span>' + fileName + '</span><br>';

            //이미지 파일 미리보기
            if (f.type.match('image.*')) {
                var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성
                reader.onload = function (e) { //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
                    //str += '<button type="button" class="delBtn" value="'+f.name+'" style="background: red">x</button><br>';
                    str += '<img src="' + e.target.result + '" title="' + f.name + '" class=\"img-fluid img-thumbnail\" />';
                    str += '</div>';
                    $(str).appendTo('#preview');
                }
                reader.readAsDataURL(f);
            } else {
                str += '<svg class="c-icon-3xl"><use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-image-broken"></use></svg>';
                $(str).appendTo('#preview');
            }
        });//arr.forEach
    }
});

$('#plus_btn').click(function () {
    alert('추가');
});

$('#x_btn').click(function () {
    alert('삭제');
});

// validation check
$('#travelModiForm').validate({
    rules: {
        title: 'required',
        summary1: 'required',
        summary2: 'required',
        category1: 'required',
        tag: 'required',
        location: 'required'
    },
    messages: {
        title: '제목을 입력해 주세요!',
        summary1: '한줄요약을 입력해 주세요!',
        summary2: '요약을 입력해 주세요!',
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