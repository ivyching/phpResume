class WaUserDictionary {
    constructor(button, field,oldField) {
        var self = this;
        this.field=field;
        this.button=button;
        this.oldField=oldField;
        $($(this.button).data("target")).on('click', this._selector.dictionarytab1, this._fieldDisplay.bind(this));
        $($(this.button).data("target")).on('click', this._selector.dictionarytab2, this._commonDisplay.bind(this));
        $($(this.button).data("target")).on('click', this._selector.newbutton, this._addNewLine.bind(this));
        $($(this.button).data("target")).on('click', this._selector.delete, this._deleteData.bind(this));
        $($(this.button).data("target")).on('click',this._selector.commondelete,this._deleteCommonData.bind(this));
        $($(this.button).data("target")).on('click',this._selector.addBtn,this._addText.bind(this));
        $($(this.button).data("target")).on('click',this._selector.addBtn,this._workflowOpinion.bind(this));

        $(button).click(function () {
            if(typeof oldField != "undefined") {
                $(self._selector.newline).val($('#'+oldField).val());
            }else {
                $(self._selector.newline).val($('#' + field).val());
            }
            $($(this).data("target")).modal();
            $($(this).data("target")).on('blur',self._fieldDisplay());
        });

        self._refreshNewLine();
        self._commonData();
    }

    get _selector() {
        return {
            mainmodal: "div.mainmodal",
            myModalDialog: "div.myModalDialog",
            messageDiv: "div.messageDiv",
            messageBody: "#messageBody",
            dictionarytab1: "a.tab1",
            dictionarytab2: "a.tab2",
            newDictionarBody: "tbody#newDictionaryBody",
            newline: "textarea#newline",
            newlineclass:"div#newlineclass",
            newbutton: "button#new",
            newMessageBody: "tbody#newMessageBody",
            delete: "button.delete",
            commondelete:"button.commondelete",
            tableroll:"table.tableroll",
            tableroll2:"table.tableroll2",
            addBtn:"span.addBtn"

        }
    }

    _addText(e) {
        var field = this.field;
        var oldField=this.oldField;

        var oldVal = $('#'+oldField).val();
        var data = e.currentTarget;
        var fieldData = data.innerText;
        var self=this;
        $('#'+oldField).val(oldVal+fieldData);
        $($(self.button).data("target")).modal("hide");

    }


    _fieldDisplay() {
        var self = this;
        $(this._selector.newDictionarBody).removeClass("hidden");
        $(this._selector.tableroll).removeClass("hidden");
        $(this._selector.tableroll2).addClass("hidden");
        $(this._selector.newlineclass).removeClass("hidden");
        $(this._selector.newMessageBody).addClass("hidden");
        $(this._selector.dictionarytab1).addClass("showTab1");


    }



    _commonDisplay() {
        $(this._selector.newlineclass).addClass("hidden");
        $(this._selector.tableroll).addClass("hidden");
        $(this._selector.tableroll2).removeClass("hidden");
        $(this._selector.newDictionarBody).addClass("hidden");
        $(this._selector.newMessageBody).removeClass("hidden");
        $(this._selector.dictionarytab1).removeClass("showTab1");
    }

    _refreshNewLine() {
        var data = {
            newDictionarBody: $(this._selector.newline).val()
        }

        var self = this;
        var table=$(self._selector.tableroll);
        var fieldName=this.field;
        $.ajax({
            url: Routing.generate('dictionary_refresh',{fieldName:this.field}),
            method: 'POST',
            datatype: 'json',
            contentType: 'application/json',
            success: function (data) {
                self._deleteRow(table);
                $.each(data, function (key, value) {
                    self._addRow(value['data'],value["id"]);
                });
            },
            error: function () {

            }
        });
    }

    _refreshByOne() {

        var data = {
            newDictionarBody: $($(this.button).data("target")).find(this._selector.newline).val()
        }

        var self = this;
        $.ajax({
            url: Routing.generate('dictionary_addOneRow'),
            method: 'POST',
            datatype: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data,this.field),
            success: function (data) {
                self._addRow(data["data"],data["id"]);
            },
            error: function () {

            }
        });
    }



    _addNewLine() {
        var data = {
            newDictionarBody: $($(this.button).data("target")).find(this._selector.newline).val(),
        };
        var self = this;
        $.ajax({
            url: Routing.generate('dictionary_add',{fieldName:self.field}),
            method: 'POST',
            datatype: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
                if(data=="error"){
                    swal({
                            title: "該筆資料已重複",
                        confirmButtonClass: 'btn btn-primary save',
                        buttonsStyling: false

                        }
                    )
                } else {
                    self._refreshByOne();
                    self._clear();
                }
            },
            error: function (/*jqXHR,exception*/) {

            }

        });
    }

    _addRow(data,id) {
        var html = '<tr><td  style="width: 100% ;"><span class="btn btn-default addBtn  " style="width: 100%;white-space:pre-wrap;text-align:left;" >' + data + '</span></td>'+'<td><button type="button" class="btn btn-cancel  delete" data-info='+id+' ><i class="glyphicon glyphicon-remove "></i></button></td></tr>'
        $($(this.button).data("target")).find(this._selector.newDictionarBody).prepend(html);
    }

    _addCommon(data,id) {
        var html = '<tr><td style="width: 100%"><span class="btn btn-default addBtn " style="width: 100%;white-space:pre-wrap;text-align:left;" ><b>' + data + '</b></span></td>' + '<td><button type="button" class="btn btn-cancel commondelete " data-info2='+id+' ><i class="glyphicon glyphicon-remove cancleRemove"></i></button></td></tr>'
        $($(this.button).data("target")).find(this._selector.newMessageBody).prepend(html);
    }

    _clear() {
        $($(this.button).data("target")).find(this._selector.newline).val("");
    }

    _commonData() {
        var self = this;
        var table=$(self._selector.tableroll2);
        $.ajax({
            url: Routing.generate('dictionary_common'),
            method: 'POST',
            datatype: 'json',
            contentType: 'application/json',
            success: function (data) {
                self._deleteRow(table);
                $.each(data, function (key, value) {
                    self._addCommon(value['data'],value["id"]);
                });
            },
            error: function () {

            }
        });
    }

    _deleteData(e) {
        var data={
            delete: e.currentTarget
        }

        var $deleteBtn = $(data.delete);
        var id = $deleteBtn.attr('data-info');

        var self = this;
        swal({
            title: "您確定要刪除嗎?",
            text: "刪除後不得復原",
            showCancelButton: true,
            cancelButtonClass: 'btn btn-danger',
            confirmButtonClass: 'btn btn-primary save',
            buttonsStyling: false,
            confirmButtonText: '確定刪除!'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: Routing.generate("dictionary_delete"),
                    type: "POST",
                    data: {'id': id},
                    success: function (data) {
                        swal({
                            title: "該筆詞彙已刪除",
                            showCancelButton: true,
                            cancelButtonClass: 'btn btn-danger',
                            confirmButtonClass: 'btn btn-primary save',
                            buttonsStyling: false
                           }
                        )
                        self._deleteRow($deleteBtn);


                    },error:function () {
                        
                    }
                })
            }
        })

    }

    _deleteCommonData(e){
        var data={
            commondelete: e.currentTarget
        }

        var $deleteBtn = $(data.commondelete);
        var id = $deleteBtn.attr('data-info2');

        var self = this;
        swal({
            title: "您確定要刪除嗎?",
            text: "刪除後不得復原",
            showCancelButton: true,
            cancelButtonClass: 'btn btn-danger',
            confirmButtonClass: 'btn btn-primary save',
            buttonsStyling: false,
            confirmButtonText: '確定刪除!'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: Routing.generate("dictionary_common_delete"),
                    type: "POST",
                    data: {'id': id},
                    success: function (data) {
                        swal({
                                title: "該筆詞彙已刪除",
                                showCancelButton: true,
                            cancelButtonClass: 'btn btn-danger',
                            confirmButtonClass: 'btn btn-primary save',
                            buttonsStyling: false
                            }
                        )
                        self._deleteRow($deleteBtn);


                    },error:function () {

                    }
                })
            }
        })
    }

    _deleteRow($link) {
        let $parent = $link.closest(".dictionaryBody tr");
        $parent.remove();
    }



    _workflowOpinion(){
        var opinion =($('textarea#workflowOpinionArea').val());
        $('textarea[name*="workflowOpinion"]').val(opinion);
    }



}

window.WaUserDictionary = WaUserDictionary;
