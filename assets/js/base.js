const Alert = require('./Components/Alert')
const RestfulApiFormHandler = require('./Components/RestfulApiFormHandler')
import "core-js";

$(document).ready(function() {
    $("#checkAll").click(function() {
        var check = $(this).prop('checked');
        if (check == true) {
            $('.checkbox').prop('checked', true);
        }
        else {
            $('.checkbox').prop('checked', false);
        }
    });

    $(document).on('click', '.listCommentBtn', function() {
        $(this).children('.fa-comment-o, .fa-comment').
            toggleClass("fa-comment-o fa-comment");

        var className = $(this).children().attr('class');
        if (className == 'fa fa-comment') {
            $(this).parent().parent().next().show();
            $(this).parent().parent().next().children().css('border-top', '0');
        }
        else {
            $(this).parent().parent().next().hide();
        }
    });

    $(function() {
        $('#fadeSuccess').delay(500).fadeIn('normal', function() {
            $(this).delay(1500).fadeOut();
        });
        $('#fadeError').delay(500).fadeIn('normal', function() {
            $(this).delay(1500).fadeOut();
        });
    });

    //delete arrayCollection

})

