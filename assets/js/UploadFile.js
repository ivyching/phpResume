class UploadFile {


    constructor(field,uuid,id, funcDownloadRoute, funcDeleteRoute,func,type) {
        var self = this;
        this.field = field;
        this.id=id;
        this.uuid = uuid;
        this.func=func;
        this.type=type;
        this.references = [];
        this.funcDownloadRoute = funcDownloadRoute;
        this.funcDeleteRoute = funcDeleteRoute;
        $("#"+field).on('blur',this._selector.attachmentDropZone);
        $("#"+field).on('click', this._selector.delete, this._deleteFile.bind(this));
       /* console.log(this.type);
        if(this.type=="new" || this.type=='edit'){
            $('button.js-delete').prop("disabled",false);
        }else{
            $('button.js-delete').prop("disabled",true);
        }*/
    }

    get ID() {
        return this.id;
    }

    get _selector() {
        return {
            mainList: "ul.js-attachment-list",
            filename: "label.js-attachment",
            download: "button#js-download",
            delete: "button.js-delete",
            save: "button#save",
            mainAttachmentList: "ul.js-attachment-list",

        }
    }


    _deleteFile(e) {
        var self = this;
        var data = {
            delete: e.currentTarget
        };
        var deleteBtn = $(data.delete);
        const $li = $(e.currentTarget).closest('.list-group-item');
        swal({
            title: "確定要刪除該筆資料嗎？",
            showCancelButton: true,

            cancelButtonClass: 'btn btn-danger',
            confirmButtonClass: 'btn btn-primary save',
            buttonsStyling: false


        }).then(function (result) {
            if (result.value) {
                $.ajax({
                    url: Routing.generate(self.funcDeleteRoute, {id:$li.attr('data-id') , fieldName:self.field}),
                    method: 'Delete',
                    success: function (data) {
                        swal({
                            title: "該筆資料已刪除",
                            confirmButtonClass: 'btn btn-primary save',
                            buttonsStyling: false
                        })
                        self._deleteRow(deleteBtn);

                    },
                    error: function () {
                    }
                })
            }
        })


    }


    _deleteRow($link) {

        let $parent = $link.closest("p");
        $parent.remove();
    }




    showMul(data) {
        for (var i = 0; i < data.length; i++) {
            var originalName = data[i]['originalName'];
            var type = this.type;

            var cancleButton = '';
            if (type != 'new' && type != 'edit') {
                cancleButton = 'disabled';
            }

            var html = `
                       <p class="list-group-item d-flex justify-content-between align-items-center lichnage" style="background-color: unset;border: unset" data-id="${data[i]['id']}">
                          <label  style="width: auto;">${originalName}</label>
                           <span><a target="_blank" href="${Routing.generate(this.funcDownloadRoute, {'id': data[i]['id']})}" class="btn btn-link btn-sm" style="vertical-align: middle">
                           <span class="fa fa-download"></span></a>
                           <button class="js-delete btn btn-link btn-sm" `+cancleButton+` type="button">
                               <span class="fa fa-trash-o"></span>
                           </button>
                           </span></p>
           `;

            var html1 = $("#"+this.field).find(this._selector.mainAttachmentList).prepend(html);
        }
    }

}

window.UploadFile = UploadFile;










