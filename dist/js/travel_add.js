$(document).ready(function (e) {
    // 모달 박스 가져오기
    $("#spot-modal").load("modal/spot_modal.html");
    $("#path-modal").load("modal/path_modal.html");

    // 카테고리 플러스 버튼
    $("#plus_btn").click(function () {
        var category_val = '<div class="form-row"><div class="form-group col-md-6">';
        category_val += '<select id="category1" class="form-control" name="category1">';
        category_val += '<option value="">선택</option>';
        category_val += '<option value="load">로드</option>';
        category_val += '<option value="mountainLoad">산악</option>';
        category_val += '<option value="sea">바다</option>';
        category_val += '<option value="mountain">산</option>';
        category_val += '<option value="river">강변</option>';
        category_val += '</select></div>';
        category_val += '<div class="form-group col-md-6">';
        category_val += '<i class="icon-danger cil-x-circle align-middle x-btn" style="cursor: pointer;"></i>';
        category_val += '</div></div>';

        $("#category_list").append(category_val);
    });

    // 카테고리 삭제
    $("#category_list").on("click", ".x-btn", function () {
        $(this).parent().parent().remove();
    });

    // 경로 등록 버튼
    $("#path_add").click(function () {
        var travel_val = $("#path").val();
        if (travel_val != "") {
            var travel_list = '<div class="form-group row">';
            travel_list += '<div class="col-md-1 align-self-center text-right"></div>';
            travel_list += '<div class="col-md-11">';
            travel_list += '<input type="radio" name="path_num" id="path_num" class="mr-3">';
            travel_list += travel_val
            travel_list += '</div></div>';

            $("#path_list").append(travel_list);
            $("#path").val("");
        }
        else {
            alert("경로를 검색해 주세요!");
        }
    });

    // 장소 등록 버튼
    $("#place_add").click(function () {
        var place_val = $("#place").val();
        if (place_val != "") {
            var place_list = '<div class="form-group row">';
            place_list += '<div class="col-md-1 align-self-center text-right"></div>';
            place_list += '<div class="col-md-11">';
            place_list += '<input type="radio" name="place_num" id="place_num" class="mr-3">';
            place_list += place_val
            place_list += '</div></div>';

            $("#place_list").append(place_list);
            $("#place").val("");
        }
        else {
            alert("장소를 검색해 주세요!");
        }
    });

    // 경로 UP, DOWN, DEL 버튼
    $("#path_up").click(function () {
        var node = $('input[name="path_num"]:checked').parent().parent();
        moveUp(node);
    });
    $("#path_down").click(function () {
        var node = $('input[name="path_num"]:checked').parent().parent();
        moveDown(node);
    });
    $("#path_del").click(function () {
        var node = $('input[name="path_num"]:checked').parent().parent();
        node.fadeOut(function () {
            node.remove();
        })
    });
    // 장소 UP, DOWN, DEL 버튼
    $("#place_up").click(function () {
        var node = $('input[name="place_num"]:checked').parent().parent();
        moveUp(node);
    });
    $("#place_down").click(function () {
        var node = $('input[name="place_num"]:checked').parent().parent();
        moveDown(node);
    });
    $("#place_del").click(function () {
        var node = $('input[name="place_num"]:checked').parent().parent();
        node.fadeOut(function () {
            node.remove();
        })
    });

    var moveUp = function (line) {
        line.insertBefore(line.prev());
    }
    var moveDown = function (line) {
        line.insertAfter(line.next());
    }

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