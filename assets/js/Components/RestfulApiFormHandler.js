require('babel-polyfill');

class RestfulApiFormHandler {

    constructor(alert){
        this.alert = alert;
    }

    setAfterSuccessCallBack(afterSuccessCallBack){

        this._afterSuccessCallBack = afterSuccessCallBack
    }

    setAfterErrorCallBack(afterErrorCallBack) {
        this._afterErrorCallBack = afterErrorCallBack
    }

    setUpForm($form, $submitButton) {
        if (!$form){
            return;
        }
        this.$form = $form;

        if ($submitButton){
            let self = this;
            this.$submitButton = $submitButton;
            this.$submitButton.on('click',function() {
                self.$form.submit();
            })
        }else{
            this.$submitButton = this.$form.find("button[type=submit]");
        }

        this.$form.on(
            'submit',
            this.handleNewFormSubmit.bind(this)
        );
    }

    handleNewFormSubmit(e) {
        e.preventDefault();
        var $form = $(e.currentTarget);
        var formData = this.getDataFromForm($form)
        this._save(formData);
    }

    getDataFromForm($form){
        let formData ={};
        let self = this;
        $.each($form.serializeArray(), function(key, fieldData) {
            formData[fieldData.name] = fieldData.value;
            var token = self.$form.find('input[name*=_token]').
                val();
            token = token ? token : $("head").data("csrf-token");
            formData['_token'] = token;
        });
        return formData;
    }

    _save(formData) {
        this.$submitButton.button('loading');
        $.ajax({
            url: this.$form.attr("action"),
            method: this.$form.attr("method"),
            data: JSON.stringify(formData),
            success: this._saveSuccessCallBack.bind(this),
            error: this._saveLogErrorCallBack.bind(this)
        });
    }

    _saveSuccessCallBack(data) {
        this.alert.addSuccessAlert("Success");
        this.$submitButton.button('reset');
        this.cleanErrors();
        if (typeof this._afterSuccessCallBack ==="function"){
            this._afterSuccessCallBack();
        }
    }

    _saveLogErrorCallBack(jqXHR) {
        this.$form.find('.js-field-error').remove();
        this.$form.find('.form-group').removeClass('has-error');
        this.$submitButton.button('reset');
        this.cleanErrors();

        try {
            var errorData = JSON.parse(jqXHR.responseText)["errors"];
        } catch (e) {
            var errorData = "Error " + ":" + jqXHR.status;
        }

        if (typeof errorData == "string") {
            var $wrapper = this.$form.closest('div');
            var $error = $('<span class="js-field-error help-block"></span>');
            $error.html(errorData);
            $wrapper.append($error);
            $wrapper.addClass('has-error');
            this.$submitButton.button('reset');
        }

        this.$form.find('input').
            each(function(key, value) {
                let fieldName = $(value).attr("name");
                var $wrapper = $(this).closest('div');
                if (errorData
                    && errorData[fieldName]) {
                    var error = errorData[fieldName];
                } else {
                    return;
                }
                var $error = $(
                    '<span class="js-field-error help-block"></span>'
                );
                $error.html(error);
                $wrapper.append($error);
                $wrapper.addClass('has-error');
                this.$submitButton.button('reset');
            });

        if (typeof this._afterErrorCallBack === "function") {
            this._afterErrorCallBack();
        }
    }

    cleanErrors() {
        $(".js-field-error").remove();
        $(".has-error").removeClass("has-error");
    }
}

module.exports = RestfulApiFormHandler;