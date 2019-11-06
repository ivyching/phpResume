const $ = global.jQuery;

//用webpack es6 不會的話 去看knp教學
(function (window, $) {

    class CalculateProcess {
        constructor() {
            this._selectorOfRequiredFormat = {
            };
        }

        //要被自動format的input {selector:小數點後幾位}
        get selectorOfRequiredFormat() {
            return this._selectorOfRequiredFormat
        }

        set selectorOfRequiredFormat(selectorOfRequiredFormat) {
            this._selectorOfRequiredFormat = selectorOfRequiredFormat;
        }

        handleFieldFormat(){
            var self = this;
            $.each(this.selectorOfRequiredFormat, function(index, value) {
                $('body').off('change', index).on('change', index, function(e){
                    self._valueNumberformat.apply(self, [e, value]);
                });
            });
        }

        //private
        _valueNumberformat(e, Bits) {
            var Number = $(e.currentTarget).val();
            Number = this.unFormatNumber(Number);
            Number = this.formatNumber(Number, Bits);
            $(e.currentTarget).val(Number);
        }

        //format數字
        formatNumber(number, Bits) {
            number = parseFloat(number);
            if (isNaN(number)) {
                return null;
            }
            Bits = Bits == undefined ? 2 : Bits;
            let pow = Math.pow(10, Bits);

            number = Math.round(number*pow)/pow;

            return number.toLocaleString('en-US', {minimumFractionDigits: Bits});
        }

        //unformat數字
        unFormatNumber(str) {
            if (typeof str === 'number') {
                str = str.toString();
            }
            if (typeof str !== 'string') {
                return str;
            }
            return parseFloat(str.replace(/,/g, ""));
        }

    }

    window.CalculateProcess = CalculateProcess;
})(window, jQuery);