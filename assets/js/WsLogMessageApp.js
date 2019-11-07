const $ = global.jQuery;

(function (windows, $, Routing) {
    class WsLogMessageApp {
        constructor(guid) {
            var self = this;
            this.guid = guid;

            $(this._selector.memoPanel).on('click', this._selector.timelineMemoButton, this.timelineMemoDisplay.bind(this));
            $(this._selector.memoPanel).on('click', this._selector.memoSaveButton, this.memoSave.bind(this));
            $(this._selector.memoPanel).on('click', this._selector.jsdeleteButton, this.handleMemoDelete.bind(this))
            $(this._selector.memoPanel).on('click', this._selector.showMessage, this.showMessage.bind(this))
            setInterval(this.refreshWsLogMessage.bind(this), 10000);
        }

        get _selector() {
            return {
                memoPanel: "div#memoPanel",
                memoMessgeDiv: "div#memoMessgeDiv",
                timelineMemoButton: "button#timelineMemo",
                timelineMemoClick: ".timelineMemoClick",
                memoSaveButton: "button#memoSave",
                logMessageBody: "textarea#logMessageBody",
                guidInput: "input#pc01_form_guid",
                memoMessageBody: "#memoMessageBody",
                jsdeleteButton: ".js-delete-memo-log",
                refreshTime: "#refresh-time",
                showMessage: "#showMessage"
            };
        }

        get translation() {
            return this._translation;
        }

        set translation(translation){
            this._translation = translation;
        }

        get guid() {
            return this._guid;
        }

        set guid(guid) {
            this._guid = guid;
        }

        showMessage(e) {
            var $btn = $(e.currentTarget);

            if ($btn.data("show")) {
                $btn.html('<i class="fa fa-chevron-down"></i> ' + this.translation.messageShowmore);
                $(this._selector.memoMessageBody + ' >  li').each(function (index, value) {
                    if (index > 10) {
                        $(value).slideUp();
                    }
                })
                $btn.data("show", false);
            } else {
                $btn.html('<i class="fa fa-chevron-up"></i> ' + this.translation.messageHide);
                $(this._selector.memoMessageBody + ' >  li').slideDown('slow');
                $btn.data("show", true)
            }
        }

        refreshWsLogMessage() {
            let data = {
                refreshTime: $(this._selector.refreshTime).html() ? $(this._selector.refreshTime).html().trim() : "",
                guid: this._guid
            };
            var self = this;

            var date = new Date();
            var dateFormat =
                date.getFullYear() + "-" +
                ("0" + (date.getMonth()+1)).slice(-2) + "-" +
                ("0" + date.getDate()).slice(-2) + " " +
                ("0" + date.getHours()).slice(-2) + ":" +
                ("0" + date.getMinutes()).slice(-2) + ":" +
                ("0" + date.getSeconds()).slice(-2);

            var dateString = dateFormat;
            $(this._selector.refreshTime).html(dateString);
            $.ajax({
                url: Routing.generate('LogMessage_Refresh'),
                method: 'POST',
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (data) {
                    $.each(data, function (key, value) {
                        self._addRow(value);
                    });
                },
                error: function () {

                }
            });
        }

        timelineMemoDisplay(e) {
            if ($(e.currentTarget).hasClass("active")) {
                $(e.currentTarget).removeClass("active");
                $(this._selector.timelineMemoClick).fadeOut();
            } else {
                $(e.currentTarget).addClass("active");
                $(this._selector.timelineMemoClick).fadeIn();
            }
        }

        memoSave(e) {
            var data = {
                messageBodyHtml: $(this._selector.logMessageBody).val(),
                guid: this._guid
            };
            var self = this;

            $.ajax({
                url: Routing.generate('LogMessage_Add'),
                method: 'POST',
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (data) {
                    $(self._selector.timelineMemoClick).removeClass("has-error");
                    self.refreshWsLogMessage();
                    self._clearForm();
                },
                error: function (jqXHR, exception) {
                    $(self._selector.timelineMemoClick).addClass("has-error");
                    var errorData = JSON.parse(jqXHR.responseText);
                    $(self._selector.logMessageBody).siblings(".help-block").html(errorData.errors);
                }
            });
        }

        _clearForm() {
            $(this._selector.logMessageBody).val("");
            $(this._selector.logMessageBody).siblings(".help-block").html("");
        }

        _addRow(data) {
            var createdTime = data.createdTime.substr(0,4) - 1911;
            createdTime = createdTime + '-' + data.createdTime.substr(5,20);
            var html =
                '<li>' +
                '   <div class="smart-timeline-icon">' +
                '       <i class="fa fa-file-text"></i>' +
                '   </div>' +
                '   <div class="smart-timeline-time">' +
                '       <small>' + createdTime + '</small>' +
                '   </div>' +
                '   <div class="smart-timeline-content">' +
                '       <p class="memo-delete-btn">'
            ;

            if (data.deleteable) {
                html +=
                    '           <button type="button" class="btn btn-xs btn-danger js-delete-memo-log" data-sn="' + data.sn + '">' +
                    '               <i class="fa fa-trash-o"></i>' +
                    '           </button>';
            }

            data.messageBodyHtml = this.escapeHtml(data.messageBodyHtml);

            html +=
                '       </p>' +
                '       <p>' +
                '           ' + data.createdUid + '' +
                '       </p>' +
                '       <p>' +
                '           ' + data.messageBodyHtml + '' +
                '       </p>' +
                '   </div>' +
                '</li>'
            ;
            $(this._selector.memoMessageBody).prepend(html);
        }

        escapeHtml(text) {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        _mapErrorsToForm(errorData) {
            console.log(errorData);
        }

        handleMemoDelete(e) {
            var sn = $(this._selector.jsdeleteButton).data("sn");
            var $link = $(e.currentTarget);
            var self = this;
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        url: Routing.generate('LogMessage_Delete'),
                        method: 'POST',
                        dataType: 'json',
                        contentType: "application/json",
                        data: JSON.stringify({sn: sn}),
                        success: function () {
                            swal(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            self._deleteRow($link);
                        },
                        error: function (jqXHR, exception) {
                            var errorData = JSON.parse(jqXHR.responseText);
                            alert(errorData.errors);
                        }
                    });
                }
            });
        }

        _deleteRow($link) {
            let $parent = $link.closest("li");
            $parent.remove();
        }
    }

    windows.WsLogMessageApp = WsLogMessageApp;
})(window, jQuery, Routing);