//dxw-comment-length-limiter
$(document).ready(function() {
    function setCount(src, elem, limit) {
        var chars = src.value.length;
        if (chars > limit) {
            src.value = src.value.substr(0, limit);
            chars = limit;
            elem.parent().addClass('error');
        }
        else if (chars < limit) {
            elem.parent().removeClass('error');
        }
        elem.html( limit - chars );
    }
    limit = 1000;
    var elem = $("#comment-char-count");
    if(elem.length) {
        elem.show();
    }
    if ($("#comment").length) {
        setCount($("#comment")[0], elem, limit);
        $('#comment').on("keyup focus blur mouseup", function() {
            setCount($(this)[0], elem, limit);
        });
    }
});
