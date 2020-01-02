$(document).ready(function (e) {
    // 모달 박스 가져오기
    $("#spot-modal").load("modal/spot_modal.html");
    $("#travel-modal").load("modal/travel_modal.html");
    $("#path-modal").load("modal/path_modal.html");

    // 여행지 등록 버튼
    $("#travel_add").click(function () {
        var travel_val = $("#travel").val();
        if (travel_val != "") {
            var travel_list = '<div class="form-group row">';
            travel_list += '<div class="col-md-4 ml-5">';
            travel_list += '<input type="radio" name="travel_num" id="travel_num" value="1" class="mr-3"><a href="contents/travel_detail.html">';
            travel_list += travel_val
            travel_list += '</a></div>';
            travel_list += '<div class="col-md-6">';
            travel_list += '<input type="text" name="s_date" value="2020.01.01" size="11" maxlength="11">일 ';
            travel_list += '<input type="text" name="s_hour" value="00" size="2" maxlength="2">시 ';
            travel_list += '<input type="text" name="s_min" value="00" size="2" maxlength="2">';
            travel_list += '<span class="mr-2"> 분</span><span class="mr-2">~</span>';
            travel_list += '<input type="text" name="e_date" value="2020.01.01" size="11" maxlength="11">일 ';
            travel_list += '<input type="text" name="e_hour" value="23" size="2" maxlength="2">시 ';
            travel_list += '<input type="text" name="e_min" value="59" size="2" maxlength="2"> 분';
            travel_list += '</div></div>';

            $("#travel_list").append(travel_list);
            $("#travel").val("");
        }
        else {
            alert("여행지를 검색해 주세요!");
        }
    });

    // 경로 등록 버튼
    $("#path_add").click(function () {
        var travel_val = $("#path").val();
        if (travel_val != "") {
            var travel_list = '<div class="form-group row">';
            travel_list += '<div class="col-md-4 ml-5">';
            travel_list += '<input type="radio" name="path_num" id="path_num" value="1" class="mr-3"><a href="path/path_detail.html">';
            travel_list += travel_val
            travel_list += '</a></div>';
            travel_list += '<div class="col-md-6">';
            travel_list += '<input type="text" name="s_date" value="2020.01.01" size="11" maxlength="11">일 ';
            travel_list += '<input type="text" name="s_hour" value="00" size="2" maxlength="2">시 ';
            travel_list += '<input type="text" name="s_min" value="00" size="2" maxlength="2">';
            travel_list += '<span class="mr-2"> 분 </span><span class="mr-2">~ </span>';
            travel_list += '<input type="text" name="e_date" value="2020.01.01" size="11" maxlength="11">일 ';
            travel_list += '<input type="text" name="e_hour" value="23" size="2" maxlength="2">시 ';
            travel_list += '<input type="text" name="e_min" value="59" size="2" maxlength="2"> 분';
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
            place_list += '<div class="col-md-4 ml-5">';
            place_list += '<input type="radio" name="place_num" id="place_num" value="1" class="mr-3"><a href="place/place_detail.html">';
            place_list += place_val
            place_list += '</a></div>';
            place_list += '<div class="col-md-6">';
            place_list += '<input type="text" name="s_date" value="2020.01.01" size="11" maxlength="11">일 ';
            place_list += '<input type="text" name="s_hour" value="00" size="2" maxlength="2">시 ';
            place_list += '<input type="text" name="s_min" value="00" size="2" maxlength="2">';
            place_list += '<span class="mr-2"> 분 </span><span class="mr-2">~ </span>';
            place_list += '<input type="text" name="e_date" value="2020.01.01" size="11" maxlength="11">일 ';
            place_list += '<input type="text" name="e_hour" value="23" size="2" maxlength="2">시 ';
            place_list += '<input type="text" name="e_min" value="59" size="2" maxlength="2"> 분';
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

