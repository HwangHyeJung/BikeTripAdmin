$(document).ready(function (e) {
    // 모달 박스 가져오기
    $("#path-editor-modal").load("modal/path_editor_modal.html");
    $("#spot-modal").load("modal/spot_modal.html");
    $("#travel-modal").load("modal/travel_modal.html");

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

    // 여행지 UP, DOWN, DEL 버튼
    $("#travel_up").click(function () {
        var p = $('input[name="travel_num"]:checked').parent().parent();
        moveUp(p);
    });
    $("#travel_down").click(function () {
        var p = $('input[name="travel_num"]:checked').parent().parent();
        moveDown(p);
    });
    $("#travel_del").click(function () {
        var p = $('input[name="travel_num"]:checked').parent().parent();
        p.fadeOut(function () {
            p.remove();
        })
    });
    // 장소 UP, DOWN, DEL 버튼
    $("#place_up").click(function () {
        var p = $('input[name="place_num"]:checked').parent().parent();
        moveUp(p);
    });
    $("#place_down").click(function () {
        var p = $('input[name="place_num"]:checked').parent().parent();
        moveDown(p);
    });
    $("#place_del").click(function () {
        var p = $('input[name="place_num"]:checked').parent().parent();
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


$('#pathForm').validate({
    rules: {
        title: 'required',
        time: 'required',
        category1: 'required',
        tag: 'required',
        route: 'required'
    },
    messages: {
        title: '제목을 입력해 주세요!',
        time: '시간을 입력해 주세요!',
        category1: '카테고리는 하나이상 선택해 주세요!',
        tag: '태그를 입력해 주세요!',
        route: '경로를 입력해 주세요!'
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