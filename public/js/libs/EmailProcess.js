(function (window, $) {
    class  EmailProcess {
        constructor($emailbody, $form) {

            this.$form = $form;
            this.$emailbody = $emailbody;

            $(this._selector.select2).each(function () {
                var $this = $(this),
                    width = $this.attr('data-select-width') || '100%';
                //, _showSearchInput = $this.attr('data-select-search') === 'true';
                $this.select2({
                    //showSearchInput : _showSearchInput,
                    allowClear: true,
                    width: width
                });

                //clear memory reference
                $this = null;
            });

            this.$emailbody.summernote({
                height: '500px',
                focus: false,
                tabsize: 2
            });

            $(this._selector.mailButton).on('click', this.mailButtonClick.bind(this));

            this.$form.on('click', this._selector.previewButton, function (e) {
                window.open($(e.currentTarget).data("location"), "_blank");
            });

            this.$form.on('click', this._selector.sendButton, this.sendButtonClick.bind(this));
        }

        get _selector(){
            return{
                select2 : 'select.select2',
                    mailButton: "button#EmailButton",
                previewButton: "button#previewPDF",
                sendButton: "#send",
            };
        }

        get _html(){
            return{

            };
        }
        set _translation(arr){
            this.tranlatation = arr;
        }

        get _translation(){
            return this.tranlatation;
        }

        mailButtonClick (e) {
            var $btn = $(e.currentTarget);
            $btn.button('loading');
            var self = this;
            $.ajax({
                url: self.$form.data("generatepath"),
                method: 'POST',
                success: function (data) {
                    self.$form.find("[name=filename]").val(data['filename']);
                    $('#emailModal').modal('show');
                    var path = $("button#previewPDF").data("targetpath");
                    $("button#previewPDF").data("location", path + '/' + data['filename']);
                    $btn.button('reset');
                },
                error: function (jqXHR) {
                    window.addDangerAlert(self._translation.danger);
                    $btn.button('reset');
                }
            });
        }
        sendButtonClick (e) {
            e.preventDefault();
            var $btn = $(e.currentTarget);
            $btn.button('loading');

            var formData = this.getFormData();
            var self = this;
            $.ajax({
                url: self.$form.attr("action"),
                method: 'POST',
                data: JSON.stringify(formData),
                success: function (data) {
                    self.$form[0].reset();
                    $('#emailModal').modal('toggle');
                    window.addSuccessAlert(self._translation.success);
                    self.$form.find('.js-field-error').remove();
                    self.$form.find('.form-group').removeClass('has-error');
                    self.$form.find("select").trigger("change");
                    $btn.button('reset');
                },
                error: function (jqXHR) {
                    window.addDangerAlert(self._translation.danger);
                    self.$form.find('.js-field-error').remove();
                    self.$form.find('.form-group').removeClass('has-error');

                    try {
                        var errorData = JSON.parse(jqXHR.responseText);
                    } catch (e) {
                        $('#emailModal').modal('toggle');
                        return;
                    }

                    self.$form.find(':input').each(function () {
                        var fieldName = $(this).attr('name');
                        var $wrapper = $(this).closest('div');
                        if (!errorData[fieldName]) {
                            return;
                        }

                        var $error = $('<span class="js-field-error help-block"></span>');
                        $error.html(errorData[fieldName]);
                        $wrapper.append($error);
                        $wrapper.addClass('has-error');
                        $btn.button('reset');
                    });

                }
            });

        }
        getFormData(){
            var formData = {
                address: []
            };

            $.each(this.$form.serializeArray(), function (key, fieldData) {
                if (fieldData.name == "address") {
                    formData[fieldData.name].push(fieldData.value);
                } else {
                    formData[fieldData.name] = fieldData.value;
                }
            });

            var html = $("div.note-editable.panel-body").html();
            formData['emailbody'] = html;
            return formData;
        }


    }

    window.EmailProcess = EmailProcess;

})(window, jQuery);