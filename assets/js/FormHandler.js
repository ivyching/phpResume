class FormHandler {
    getDataFromForm($form) {
        let formData = {};
        let self = this;
        $.each($form.serializeArray(), function(key, fieldData) {
            formData[fieldData.name] = fieldData.value;
            var token = $form.find('input[name*=_token]').
                val();
            token = token ? token : $("head").data("csrf-token");
            formData['_token'] = token;
        });
        return formData;
    }
}

export default FormHandler;