$(document).ready(function (e) {
    // 모달 박스 가져오기
    $("#path-modal").load("modal/path_modal.html");
    $("#travel-modal").load("modal/travel_modal.html");
    // $("#api-modal").load("modal/api_modal.html");

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

    // 여행지 등록 버튼
    $("#travel_add").click(function () {
        var travel_val = $("#travel").val();
        if (travel_val != "") {
            var travel_list = '<div class="form-group row">';
            travel_list += '<div class="col-md-1 align-self-center text-right"></div>';
            travel_list += '<div class="col-md-11">';
            travel_list += '<input type="radio" name="travel_num" id="travel_num" class="mr-3">';
            travel_list += travel_val
            travel_list += '</div></div>';

            $("#travel_list").append(travel_list);
            $("#travel").val("");
        }
        else {
            alert("여행지를 검색해 주세요!");
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
    // 여행지 UP, DOWN, DEL 버튼
    $("#travel_up").click(function () {
        var node = $('input[name="travel_num"]:checked').parent().parent();
        moveUp(node);
    });
    $("#travel_down").click(function () {
        var node = $('input[name="travel_num"]:checked').parent().parent();
        moveDown(node);
    });
    $("#travel_del").click(function () {
        var node = $('input[name="travel_num"]:checked').parent().parent();
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

    // 이미지 파일
    $("input[type='file']").change(function (e) {

        var files = e.target.files;
        var arr = Array.prototype.slice.call(files);

        //업로드 가능 파일인지 체크
        for (var i = 0; i < files.length; i++) {
            if (!checkExtension(files[i].name, files[i].size)) {
                return false;
            }
        }

        preview(arr);


    });

    function checkExtension(fileName, fileSize) {

        var regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");
        var maxSize = 20971520;  //20MB

        if (fileSize >= maxSize) {
            alert('파일 사이즈 초과');
            // $("input[type='file']").val("");  //파일 초기화
            return false;
        }

        if (regex.test(fileName)) {
            alert('업로드 불가능한 파일이 있습니다.');
            // $("input[type='file']").val("");  //파일 초기화
            return false;
        }
        return true;
    }

    function preview(arr) {
        arr.forEach(function (f) {

            var img_html = '<div class="card" style="width: 18rem;">';

            //이미지 파일 미리보기
            if (f.type.match('image.*')) {
                var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성

                reader.onload = function (e) { //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
                    img_html += '<img src="' + e.target.result + '" class="card-img-top img-thumbnail">';
                    img_html += '<div class="card-body">';
                    img_html += '<p class="card-text">' + f.name + '</p>';
                    img_html += '<p class="card-text text-right">';
                    img_html += '<button type="button" class="btn btn-outline-danger x-btn lm-2">삭제</button>';
                    img_html += '</p></div></div>';

                    $(img_html).appendTo('#img_list');
                }
                reader.readAsDataURL(f);
            } else {
                alert("이미지 파일이 아닙니다.");
            }
        });//arr.forEach
    }

    // 이미지 삭제
    $("#img_list").on("click", ".x-btn", function () {
        $(this).parent().parent().parent().remove();
    });
});

$('#travelForm').validate({
    rules: {
        shop: 'required',
        category: 'required',
        open: 'required',
        tel: 'required',
        facility: 'required',
        location: 'required'
    },
    messages: {
        shop: '상호명을 입력해 주세요!',
        category: '카테고리를 선택해 주세요!',
        open: '운영시간을 입력해 주세요!',
        tel: '전화번호를 입력해 주세요!',
        facility: '편의시설을 입력해 주세요!',
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