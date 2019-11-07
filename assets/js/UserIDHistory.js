const $ = global.jQuery;

class UserIDHistory {
    constructor(button, userID, functionName, caseOrgID) {
        var self = this;
        this.button = button;
        this.userID = userID;
        this.functionName = functionName;
        this.caseOrgID = caseOrgID;

        $($(this.button).data("target")).on('click', this._selector.sub, this._subData.bind(this));

        // self._list();

        $(button).click(function () {
            self._userCaseList(this);
        });
    }

    get _selector() {
        var self = this;

        return {
            userIDList: "#userIDList",
            userIDField: "#"+this.functionName+"_form_userID",
            sub: "button.sub"
        }
    }

    _list() {
        var self = this;
        var userID = this.userID;
        $("#userIDList tr").remove();

        if ($.trim(userID) != '') {
            $.ajax({
                url: Routing.generate('UserIDHistory_list',{userID: this.userID}),
                method: 'POST',
                datatype: 'json',
                contentType: 'application/json',
                success: function (data) {
                    if (data.length === 0) {
                        var html = `
                            <tr>
                                <td class="text-center red" colspan="10">查無資料</td>
                            </tr>
                        `;

                        $(self._selector.userIDList).append(html);
                    } else {
                        $.each(data, function (key, value) {
                            self._appendList(value);
                        });
                    }
                },
                error: function () {
                    var html = `
                            <tr>
                                <td class="text-center red" colspan="10">請重新整理</td>
                            </tr>
                        `;

                    $(self._selector.userIDList).append(html);
                }
            });
        }
    }

    _userCaseList (e) {
        var self = this;
        var userID = $(this._selector.userIDField).val();
        $("#userIDList tr").remove();

        if ($.trim(userID) != '') {
            $.ajax({
                url: Routing.generate('UserIDHistory_list',{userID: userID}),
                method: 'POST',
                datatype: 'json',
                contentType: 'application/json',
                success: function (data) {
                    if (data.length === 0) {
                        var html = `
                            <tr>
                                <td class="text-center red" colspan="10">查無資料</td>
                            </tr>
                        `;

                        $(self._selector.userIDList).append(html);
                    } else {
                        $.each(data, function (key, value) {
                            self._appendList(value);
                        });
                    }
                },
                error: function () {
                    var html = `
                            <tr>
                                <td class="text-center red" colspan="10">請重新整理</td>
                            </tr>
                        `;

                    $(self._selector.userIDList).append(html);
                }
            });
        }
    }

    _appendList(data) {
        var self = this;
        var caseOrgID = this.caseOrgID;

        var caseOpened = "<label class='label label-default'>否</label>";
        if (data['isCaseOpened'] == 9) {
            caseOpened = "<label class='label label-green'>是</label>";
        }

        var caseClosed = "<label class='label label-default'>否</label>";
        if (data['isCaseClosed'] == 9) {
            caseClosed = "<label class='label label-green'>是</label>";
        }

        var color = '';
        if (data['orgID'] != caseOrgID) {
            color = 'label-pink';
        }

        var html = `
            <tr>
                <td class="text-center `+color+`">`+data['orgName']+`</td>
                <td class="text-center `+color+`">`+data['caseNumber']+`</td>
                <td class="text-center `+color+`">`+data['name']+`</td>
                <td class="text-center `+color+`">`+data['openingDate']+`</td>
                <td class="text-center `+color+`">`+data['oiDate']+`</td>
                <td class="text-center `+color+`">`+caseOpened+`</td>
                <td class="text-center `+color+`">`+caseClosed+`</td>
                <td class="text-center `+color+`">`+data['serviceTime']+`</td>
                <td class="text-center `+color+`">`+data['ownerUserName']+`</td>
                <td class="text-center `+color+`"><button class="btn btn-success sub" type="button" id="`+data['casePreID']+`">帶入</button></td>
            </tr>
        `;

        $(this._selector.userIDList).append(html);
    }

    _subData(e) {
        var self = this;
        var clickData = e.target.id;

        $.ajax({
            url: Routing.generate('UserIDHistory_getDetail',{id: clickData}),
            method: 'POST',
            datatype: 'json',
            contentType: 'application/json',
            success: function (data) {
                self._writeDetails(data);
            },
            error: function () {
                var html = `
                    <tr>
                        <td class="text-center red" colspan="10">請重新整理</td>
                    </tr>
                `;

                $(self._selector.userIDList).append(html);
            }
        });
    }

    _writeDetails (data) {
        var self=this;
        var functionName = this.functionName;

        $('#'+functionName+'_form_name').val(data['name']);

        if (functionName == 'mf01' || functionName == 'mf02') {
            $('#'+functionName+'_form_gender').val(data['gender']);

            for (var i=1;i<12;i++) {
                if (i<10) {
                    var value = data['identityOption0'+i];

                    if (value == 1) {
                        $('#'+functionName+'_form_identityOption0'+i).prop('checked', true);
                    } else {
                        $('#'+functionName+'_form_identityOption0'+i).prop('checked', false);
                    }
                } else {
                    if (i == 10) {
                        var value = data['identityOption10'];
                        if (value == 1) {
                            $('#'+functionName+'_form_identityOption10').prop('checked', true);
                        } else {
                            $('#'+functionName+'_form_identityOption10').prop('checked', false);
                        }
                    } else {
                        var value = data['identityOption99'];
                        if (value == 1) {
                            $('#'+functionName+'_form_identityOption99').prop('checked', true);
                        } else {
                            $('#'+functionName+'_form_identityOption99').prop('checked', false);
                        }
                    }
                }
            }

            $('#'+functionName+'_form_identityOption99Desc').val(data['identityOption99Desc']);
            if ($.trim(data['identityOption99Desc']) != '') {
                $('#'+functionName+'_form_identityOption99Desc').removeClass('hidden');
                $('#'+functionName+'_form_identityOption99Desc').prop('disabled', false);
            } else {
                $('#'+functionName+'_form_identityOption99Desc').addClass('hidden');
                $('#'+functionName+'_form_identityOption99Desc').val('');
                $('#'+functionName+'_form_identityOption99Desc').prop('disabled', true);
            }

            $('#'+functionName+'_form_birthday').val(data['birthday']);

            $('#'+functionName+'_form_homePhone').val(data['homePhone']);
            $('#'+functionName+'_form_officePhone').val(data['officePhone']);
            $('#'+functionName+'_form_mobilePhone').val(data['mobilePhone']);

            $('#'+functionName+'_form_addressCity1').val(data['addressCityno1']);
            changeAreaCode($('#'+functionName+'_form_addressCity1'));
            $('#postID1').val(data['addressPostcode1']);
            $('#'+functionName+'_form_address1').val(data['address1']);
            $('#'+functionName+'_form_addressCity2').val(data['addressCityno2']);
            changeAreaCode($('#'+functionName+'_form_addressCity2'));
            $('#postID2').val(data['addressPostcode2']);
            $('#'+functionName+'_form_address2').val(data['address2']);

            $('#'+functionName+'_form_contactName1').val(data['contactName1']);
            $('#'+functionName+'_form_contactRelationship1').val(data['contactRelationship1']);
            $('#'+functionName+'_form_contactPhone1').val(data['contactPhone1']);
            $('#'+functionName+'_form_contactName2').val(data['contactName2']);
            $('#'+functionName+'_form_contactRelationship2').val(data['contactRelationship2']);
            $('#'+functionName+'_form_contactPhone2').val(data['contactPhone2']);

            $('#'+functionName+'_form_maritalStatus').val(data['maritalStatus']);
            $('#'+functionName+'_form_maritalDesc').val(data['maritalDesc']);
            if ($.trim(data['maritalDesc']) != '') {
                $('div.maritalDesc').removeClass('hidden');
            } else {
                $('div.maritalDesc').addClass('hidden');
                $('#'+functionName+'_form_maritalDesc').val("");
            }

            $('#'+functionName+'_form_educationLevel').val(data['educationLevel']);
            $('#'+functionName+'_form_educationDesc').val(data['educationDesc']);
            if ($.trim(data['educationDesc']) != '') {
                $('div.educationDesc').removeClass('hidden');
            } else {
                $('div.educationDesc').addClass('hidden');
                $('#'+functionName+'_form_educationDesc').val("");
            }

            setTimeout(function(){
                $('#'+functionName+'_form_addressPostcode1').val(data['addressPostcode1']);
                $('#'+functionName+'_form_addressPostcode2').val(data['addressPostcode2']);
            }, 1200);

            getCaseOpeningAge();
        } else if (functionName == 'mf03') {
            $('#'+functionName+'_form_caseNumber').val(data['caseNumber']);
            $('#'+functionName+'_form_oiDate').val(data['oiDate']);
        } else if (functionName == 'mf06') {
            $('#'+functionName+'_form_gender').val(data['gender']);
            $('#'+functionName+'_form_birthday').val(data['birthday']);

            $('#'+functionName+'_form_addressCity').val(data['addressCityno1']);
            changeAreaCode($('#'+functionName+'_form_addressCity'));
            $('#postID').val(data['addressPostcode1']);
            $('#'+functionName+'_form_address').val(data['address1']);

            for (var i=1;i<12;i++) {
                if (i<10) {
                    var value = data['identityOption0'+i];

                    if (value == 1) {
                        $('#'+functionName+'_form_identityOption0'+i).prop('checked', true);
                    } else {
                        $('#'+functionName+'_form_identityOption0'+i).prop('checked', false);
                    }
                } else {
                    if (i == 10) {
                        var value = data['identityOption10'];
                        if (value == 1) {
                            $('#'+functionName+'_form_identityOption10').prop('checked', true);
                        } else {
                            $('#'+functionName+'_form_identityOption10').prop('checked', false);
                        }
                    } else {
                        var value = data['identityOption99'];
                        if (value == 1) {
                            $('#'+functionName+'_form_identityOption99').prop('checked', true);
                        } else {
                            $('#'+functionName+'_form_identityOption99').prop('checked', false);
                        }
                    }
                }
            }

            $('#'+functionName+'_form_identityOption99Desc').val(data['identityOption99Desc']);
            if ($.trim(data['identityOption99Desc']) != '') {
                $('#'+functionName+'_form_identityOption99Desc').removeClass('hidden');
                $('#'+functionName+'_form_identityOption99Desc').prop('disabled', false);
            } else {
                $('#'+functionName+'_form_identityOption99Desc').addClass('hidden');
                $('#'+functionName+'_form_identityOption99Desc').val('');
                $('#'+functionName+'_form_identityOption99Desc').prop('disabled', true);
            }

            $('#'+functionName+'_form_phone').val(data['homePhone']);
            $('#'+functionName+'_form_mobilePhone').val(data['mobilePhone']);

            $('#'+functionName+'_form_contactName').val(data['contactName1']);
            $('#'+functionName+'_form_contactRelationship').val(data['contactRelationship1']);
            $('#'+functionName+'_form_contactPhone').val(data['contactPhone1']);

            setTimeout(function(){
                $('#'+functionName+'_form_addressPostcode').val(data['addressPostcode1']);
            }, 1200);
        }

        $($(self.button).data("target")).modal("hide");
    }
}

window.UserIDHistory = UserIDHistory;