const $ = global.jQuery;

class UserIDDeathFinancialAid {
    constructor(button, userID, caseOrgID) {
        var self = this;
        this.button = button;
        this.userID = userID;
        this.caseOrgID = caseOrgID;

        $(button).click(function () {
            self._userAidList(this);
        });
    }

    get _selector() {
        var self = this;

        return {
            userIDList: "#deathFinancialAidList",
            userIDField: "#mf09_form_userID",
        }
    }

    _userAidList (e) {
        var self = this;
        var userID = $(this._selector.userIDField).val();
        $("#deathFinancialAidList tr").remove();

        if ($.trim(userID) != '') {
            $.ajax({
                url: Routing.generate('DeathFinancialAid_list',{userID: userID}),
                method: 'POST',
                datatype: 'json',
                contentType: 'application/json',
                success: function (data) {
                    if (data.length === 0) {
                        var html = `
                            <tr>
                                <td class="text-center red" colspan="7">查無資料</td>
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
                                <td class="text-center red" colspan="7">請重新整理</td>
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

        var color = '';
        if (data['orgID'] != caseOrgID) {
            color = 'label-pink';
        }

        var label = 'label-info';
        if (data['workflowStatus'] == 1) {
            label = 'label-orange';
        } else if (data['workflowStatus'] == 2) {
            label = 'label-red';
        } else if (data['workflowStatus'] == 3) {
            label = 'purple';
        } else if (data['workflowStatus'] == 4) {
            label = 'label-default';
        } else if (data['workflowStatus'] == 5){
            label = 'label-primary';
        } else if (data['workflowStatus'] == 8){
            label = 'label-primary';
        } else if (data['workflowStatus'] == 7){
            label = 'label-red';
        } else if (data['workflowStatus'] == 9){
            label = 'label-green';
        }

        var html = `
            <tr>
                <td class="`+color+`">`+data['orgName']+`</td>
                <td class="`+color+`">`+data['caseNumber']+`</td>
                <td class="`+color+`">`+data['createdUserName']+`</td>
                <td class="`+color+`">`+data['name']+`</td>
                <td class="`+color+`">`+data['applyDate']+`</td>
                <td class="`+color+`">`+data['approvedDate']+`</td>
                <td class="`+color+`"><div class="colorBlockPosition"><label class="label statusStyle `+label+` colorBlock">` + data['workflow'] + `</label></div></td>
            </tr>
        `;

        $(this._selector.userIDList).append(html);
    }
}

window.UserIDDeathFinancialAid = UserIDDeathFinancialAid;