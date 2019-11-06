'use strict';

const moment = require('moment');
require('moment-timezone');

class TimeZone {
    constructor($wrapper, formHandler,currentTimeZone,timezones){
        if (!$wrapper.length) {
            return;
        }

        this.$wrapper = $wrapper;
        this.currentTimeZone = currentTimeZone;
        this.timezones = timezones;
        this.formHandler = formHandler;
        this.currentTimeZone = currentTimeZone;

        setInterval(
            this.showCurrentTime.bind(this, this.$wrapper)
            ,500
        )

        const currencySelect = this.selectDiv(this.timezones, this.currentTimeZone);
        const body = this.formHtml(currencySelect)

        $('body').append($(this.modal(body)));
        this.$modal = $("#timeModel");
        let self = this;
        this.$wrapper.on('click',function() {
            self.$modal.modal("toggle");
        })

        if (this.formHandler){
            this.formHandler.setAfterSuccessCallBack(
                this.AfterSuccessCallBack.bind(this)
            );
            this.formHandler.setUpForm($("form#timezone"), $("#timezone-save"))
        }

    }

    AfterSuccessCallBack() {
        this.$modal.modal("hide");
        this.currentTimeZone =
            this.$modal.find("select option:selected").data("timezone");
    }

    spanTimeNow(time){
        return `
            <span id="TimeText">
                ${ time }
            </span>
        `;
    }

    formHtml(currencySelect){
        let path = Routing.generate('changeTimeZone');

        return`
            <form id="timezone" action="${ path }" method="patch">
               ${ currencySelect }
            </form>
        `;
    }

    selectDiv(timezones , currentTimeZone){

        const outGroup = (options, label) => `
                <optgroup label="${ label }">
                    ${ options }
                </optgroup>
        `;

        const optionSelected = (timezone) => `
            <option 
                value="${ timezone.id }" 
                selected="selected" 
                data-timezone="${timezone.timeZone}"
            >
                ${ timezone.name } (UTC${ timezone.equationOfTime }) 
            </option>
        `;

        const option = (timezone) => `
            <option 
                value="${timezone.id}" 
                
                data-timezone="${timezone.timeZone}"
            >
                ${ timezone.name } (UTC${ timezone.equationOfTime }) 
            </option>
        `;

        var timeZoneArr = {};
        for (let timezone of timezones){

            if (timezone.country) {
                if (!timeZoneArr[timezone.country]){
                    timeZoneArr[timezone.country] = [];
                }
                timeZoneArr[timezone.country].push(timezone);
            }else{
                if (!timeZoneArr["other"]){
                    timeZoneArr["other"] = []
                }
                timeZoneArr["other"].push(timezone);
            }

        }

        let content = '';
        for (var key of Object.keys(timeZoneArr)){
            var optionStr = ''
            for (let timeZone of timeZoneArr[key]){
                if (timeZone.timeZone == currentTimeZone){
                    optionStr += optionSelected(timeZone);
                }else{
                    optionStr += option(timeZone);
                }
            }
            let Area = outGroup(optionStr, key);
            content += Area;
        }

        return `
            <select id="timezone" name="timezone" class="form-control">
               ${ content }
            </select>
        `;
    }

    modal(body){
        return `
            <div id="timeModel" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">TimeZone Setting</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ${ body }
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="timezone-save" 
                            class="btn btn-primary">Save 
                            changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    showCurrentTime($wrapper){
        var now = moment();
        now = now.tz(this.currentTimeZone);
        var time = now.format('a hh:mm:ss z');

        $("#TimeText").remove();
        $wrapper.append(this.spanTimeNow(time))
    }
}

module.exports = TimeZone;