'use strict';
const $ = global.jQuery;

$(document).ready(function() {
    $('body').on('keydown', function(e) {
        if (e.keyCode == 13) {
            var $focusable = getFocusableElement();

            if ($focusable.filter(e.target).length) {
                focusNextFiled($(e.target));
                return false;
            }
            if ($(e.target).is("span.select2-container *")){
                let $select = $(':focus').closest(".select2").siblings("select");
                focusNextFiled($select);
                return false
            }

            var $focused = $(':focus');
            if (!$focused.length) {
                var $focusable = getFocusableElement();
                $focusable.eq(0).focus();
                return false;
            }
            return false;
        }
    });
});

function focusNextFiled($self) {
    var $form = $self.closest('form');
    var $focusable = getFocusableElement();

    var $next = $focusable.eq($focusable.index($self) + 1);
    if ($next.length) {
        if ($next.is("select.select2,select.select2-nullable")) {
            if ($next.siblings("span.select2").is(":visible")) {
                $next.select2('open');
            }
        }
        else {
            $next.focus();
        }
    }

    return false;
}

function getFocusableElement() {
    return $('form').find(
        'input,select,textarea'
    ).filter(":enabled").filter(function() {
        if ($(this).is(".select2,.select2-nullable")) {
            return $(this).parent().is(":visible")
        }
        else {
            return $(this).is(":visible") &&
                $(this).not(".select2-search__field");
        }
    });
}

module.exports = null;