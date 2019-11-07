import '../../css/Componets/PopOverDiv.css'

class PopOverDiv {
    constructor(data,trigger, popOverDivId) {

        $("body").on('mouseover', trigger, function(e) {
            var $popOverDiv = $(
                '<div class="pop-over-div" id="pop-' + popOverDivId +
                '"></div>');
            $("body").append($popOverDiv)

            var $popOverDiv = $('div#pop-' + popOverDivId);
            var $div = $(e.currentTarget).find(data);
            if ($div.length > 0) {
                $popOverDiv.html($div.html());

                $popOverDiv.css("top",
                    $(this).offset().top - $popOverDiv.height());
                $popOverDiv.css("left", $(this).offset().left -
                    $popOverDiv.width()/2 + 20);
                $popOverDiv.fadeIn("fast");
            }
        })

        $("body").on('mouseout', trigger, function() {
            $('.pop-over-div').html('');
            $('.pop-over-div').remove();
        })
    }


}

export default PopOverDiv;