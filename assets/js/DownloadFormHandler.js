import FormHandler from './FormHandler.js';

class DownloadFormHandler extends FormHandler{
    constructor(
        $form,
        $submitButton,
        path = undefined,
        parameter = []
    ) {
        super();
        var self = this;
        var formData = self.getDataFromForm($form);

        formData = $.extend(formData, parameter);

        var action = Routing.generate(path, formData);

        window.open( action , '_blank');
    }
}

window.DownloadFormHandler = DownloadFormHandler;

export default DownloadFormHandler;