const $ = global.jQuery;

jQuery(document).ready(function () {
    $('body').on('keydown', function (e) {

        if (e.keyCode == 9) {

            var $tab = $("ul#formtab li");

            var $currentTab = $("ul#formtab li.active");

            var $next = $tab.eq($tab.index($currentTab) + 1);

            if (!$next.length) {
                $next = $tab.eq(0);
            }

            $next.find("a").tab("show");
            return false;
        }

    });
});
