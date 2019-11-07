const $ = global.jQuery;

//自動找畫面上的input[name*=supplierCode] 加上supplier下拉
(function (windows, $, Routing) {
    class SupplierAutoComplete{

        constructor(){
            const $supplierInput = $(this._selector.supplierInputSelector)
            $supplierInput.before(this._html.supplierDispalyHtml);

            if ($supplierInput.attr("readonly") == "readonly") {
                $(this._selector.supplierDispalySelector).attr("readonly", true);
            }

            if ($supplierInput.attr("disabled") == "disabled") {
                $(this._selector.supplierDispalySelector).attr("disabled", true);
            }

            $supplierInput.hide();
            var self = this;
            $supplierInput.on('change', function () {

                if ($(self._selector.supplierInputSelector).val().length != 6) {
                    $(self._selector.supplierInputSelector).val('');
                    $(self._selector.supplierDispalySelector).val('');
                }
            });
            $(this._selector.supplierDispalySelector).on('change', function () {

                if ($(self._selector.supplierDispalySelector).val().length == 6) {
                    $.ajax({
                        url: self.path.inquerySuppliertUrl,
                        method: 'post',
                        data: {
                            supplierCode: $(self._selector.supplierDispalySelector).val()
                        },
                        success: self.InquerySuccessFunction.bind(self)
                    })
                } else if ($(self._selector.supplierDispalySelector).val().length < 6) {
                    $(self._selector.supplierInputSelector).val('');
                    $(self._selector.supplierDispalySelector).val('');
                }

            });

            if ($supplierInput.val()) {
                $.ajax({
                    url: this.path.inquerySuppliertUrl,
                    method: 'post',
                    data: {
                        supplierCode: $supplierInput.val()
                    },
                    success: this.InquerySuccessFunction.bind(this)
                })
            }

            $(this._selector.supplierDispalySelector).autocomplete({
                minLength: this.minLength,
                matchContains: this.matchContains,
                maxShowItems: this.maxShowItems,
                delay: this.delay,
                source: this.autoCompleteSourceFunction.bind(this),
                select: this.autoCompleteSelectFunction.bind(this)
            });

        }

        get path() {
            return {
                inquerySuppliertUrl: Routing.generate('inquerySupplier'),
                inquerySupplierListUrl: Routing.generate('inquerySupplierList'),
            }
        }
        get _selector() {
            return {
                supplierDispalySelector: 'input.supplierDisplay',
                supplierInputSelector: 'input[name*=supplierCode]',
            }
        }

        get _html(){
            return {
                supplierDispalyHtml: '<input type="text" class="supplierDisplay form-control" maxlength="6">',
            }
        }

        get minLength(){
            return 0;
        }  //最短觸發字串長度
        get matchContains(){
            return true;
        }  //是否模糊比對
        get maxShowItems(){
            return 5;
        } //option個數
        get delay(){
            return 1000;
        } //延遲


        InquerySuccessFunction (reArr) {
            if (reArr.supplierCode) {
                $(this._selector.supplierDispalySelector).val(reArr.supplierCode + ' ' + reArr.Name);
                $(this._selector.supplierInputSelector).val(reArr.supplierCode);
            } else {
                $(this._selector.supplierInputSelector).val('');
                $(this._selector.supplierDispalySelector).val('');
            }
        }

        autoCompleteSourceFunction(request, response) {

            $.ajax({
                url: this.path.inquerySupplierListUrl,
                type: 'POST',
                dataType: "json",
                data: {
                    supplierCode: request.term
                },
                success: function (data) {
                    response($.map(data, function (item) {
                        var result = {};
                        for (var key in item) {
                            result[key] = item[key];
                        }

                        result.label = item.supplierCode + ' ' + item.Name;
                        result.value = item.supplierCode + ' ' + item.Name;

                        return result;
                    }));
                }
            });
        }
        autoCompleteSelectFunction (event, ui) {
            //選項被點擊後行為
            var item = ui.item;
            const $supplierDisplay = $(this._selector.supplierDispalySelector);
            $supplierDisplay.siblings(this._selector.supplierInputSelector).val(item.supplierCode);
        }
    }

    windows.SupplierAutoComplete = SupplierAutoComplete;

})(window, jQuery, Routing);