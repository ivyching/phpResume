import './UploadFile';

Dropzone.autoDiscover = false;
class OTUploadSingle extends UploadFile{

    constructor(field,uuid,id, funcDownloadRoute, funcDeleteRoute,func,type) {
        super(field,uuid,id, funcDownloadRoute, funcDeleteRoute,func,type);
        this.initialDropZone();
        this.refreshData();
    }
    initialDropZone(){
        var self = this;
        var deleteBtn=$("#"+self.field).find(self._selector.mainAttachmentList);
        var attachmentDropZone = new Dropzone("#"+self.field+" div.js-attachment-dropzone", {
            url: Routing.generate('upload_OTmultipleFile', {uuid: self.uuid, fieldName: self.field,func:self.func}),
            paramName: 'file',
            dictInvalidFileType: '檔案格式不符！',
            dictFileTooBig: '檔案容量超出限制！',
            dictResponseError:'回應錯誤！',
            acceptedFiles:[
                'image/*',
                'application/pdf',
                'application/msword',
                'application/vnd.ms-excel',
                'docm',
                'dotm',
                'xlam',
                'xlsb',
                'xlsm',
                'xltm',
                'odt',
                'ods',
                'txt',
                'application/vnd.oasis.opendocument.text',
                'application/vnd.oasis.opendocument.spreadsheet',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/octet-stream',
                'application/vnd.oasis.opendocument.formula',
                'application/x-zip-compressed',
                'application/zip',
                'text/plain'
            ].join(","),
            maxFiles: 1,
            init: function () {
                this.on('success', function (file, data) {
                    $(".dz-success-mark svg").css("background", "#30991b").css("opacity",0.5);

                    self.showMul(data);
                    self.deleteRow(deleteBtn);
                    self.refreshData(data);
                    setTimeout(function(file) {
                        this.removeFile(file);
                    }.bind(this, file), 1000);
                });

                this.on('maxfilesexceeded', function (file, data) {
                        swal({
                            title: "此欄位僅限上傳一個檔案",
                            confirmButtonClass: 'btn btn-primary save',
                            buttonsStyling: false
                        });
                    }
                );
                this.on('error',function (file,data) {
                    $(".dz-error-mark svg g g").css("fill", "#c00").css("opacity",0.5);

                    setTimeout(function(file) {
                        this.removeFile(file);

                    }.bind(this, file), 3000);
                })
            }
        });
    }

    refreshData(){
        var self = this;
        $.ajax({
            url: Routing.generate("OT_refresh_file", {uuid: self.uuid,fieldName:self.field}),
            method: 'POST',
            datatype: 'json',
            contentType: 'application/json',
            success: function (data) {
                self.showMul(data);

            },
            error: function () {
            }
        });
    }

    deleteRow($link){
        let parent=$link.children("p");
        parent.remove();
    }




}

window.OTUploadSingle = OTUploadSingle;