class Alert {
    constructor(){
        global.addSuccessAlert = this.addSuccessAlert;
        global.addDangerAlert = this.addDangerAlert;
    }
    addSuccessAlert(message) {
        var success =
            '   <div class="alert alert-success" id="fadeSuccess">' +
            message +
            '   </div>';
        $("#logo-group").prepend(
            $(success)
        );
        $('#fadeSuccess').delay(500).fadeIn('normal', function() {
            $(this).delay(1500).fadeOut();
        });
    }

    addDangerAlert(message) {
        var error =
            '   <div class="alert alert-danger" id="fadeError">' +
            message +
            '   </div>';
        $("#logo-group").prepend(
            $(error)
        );
        $('#fadeError').delay(500).fadeIn('normal', function() {
            $(this).delay(1500).fadeOut();
        });
    }
}

module.exports = Alert;