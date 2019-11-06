const $ = global.jQuery;

//用ean和supplierCode找商品
(function (windows, $, Routing) {
    class ProductInquireProcess {
        constructor(calculateProcess) {
            $('table').on('change', this._selector.eanSelector, this.eanChangeFunction.bind(this));

            this.calculateProcess = calculateProcess;
        }


        get _selector() {
            return {
                eanSelector: "input[name*='ean']",
                catSelector: "input[name*='cat']",
                itemNameSelector: "input[name*='itemName']",
                liSelector: 'tr.li',
                qtySelector: "input[name *= 'qty']",
                finalPriceSelector: "input[name*='finalPrice']",
                approvePriceSelector: "input[name*='approvePrice']"

            };
        }

        get ajaxMethod() {
            return 'post';
        }

        get path() {
            return {
                Product: Routing.generate('product')
            }
        }

        eanChangeFunction(e) {
            self = this;

            $.ajax({
                url: this.path.Product,
                data: {
                    'ean': $(e.target).val(),
                    'supplierCode': $("input[name*=supplierCode]").val()
                },
                method: this.ajaxMethod,
                success: function (data) {
                    self.eanchangeSuccess.call(self, e, data);
                },
            })
        }

        eanchangeSuccess(e, data) {
            if (Object.keys(data).length > 0) {
                let $row = $(e.currentTarget).closest(this._selector.liSelector);
                $row.find(this._selector.catSelector).val(data.CAT);
                $row.find(this._selector.itemNameSelector).val(data.posName);
                let $Qty = $row.find(this._selector.qtySelector);
                if ($Qty.val().length == 0 || $Qty.val() == 0) {
                    $Qty.val(1);
                }

                $row.find(this._selector.finalPriceSelector).val(this.calculateProcess.formatNumber(data.supplierPrice, 2));
                $row.find(this._selector.approvePriceSelector).val(this.calculateProcess.formatNumber(data.supplierPrice, 2));
            } else {
                $(e.currentTarget).val("");
                let $row = $(e.currentTarget).closest(this._selector.liSelector);
                $row.find(this._selector.catSelector).val("");
                $row.find(this._selector.itemNameSelector).val("");
                $row.find(this._selector.qtySelector).val("");
                $row.find(this._selector.finalPriceSelector).val("");
                $row.find(this._selector.approvePriceSelector).val("");
            }
            if (this.calculateProcess.calculateSubtotal !== undefined) {
                this.calculateProcess.calculateSubtotal();
            }
        }

    }

    windows.ProductInquireProcess = ProductInquireProcess;

})(window, jQuery, Routing);