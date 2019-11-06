const $ = global.jQuery;

class UserIDFinancialAid {
    constructor(button, userID, functionName, caseOrgID) {
        var self = this;
        this.button = button;
        this.userID = userID;
        this.functionName = functionName;
        this.caseOrgID = caseOrgID;

        $(button).click(function () {
            self._userAidList(this);
        });
    }

    get _selector() {
        var self = this;

        return {
            userIDList: "#financialAidList",
            userIDField: "#"+this.functionName+"_form_userID",
        }
    }

    _userAidList (e) {
        var self = this;
        var userID = $(this._selector.userIDField).val();

        $("#financialAidList tr").remove();

        if ($.trim(userID) != '') {
            $.ajax({
                url: Routing.generate('FinancialAid_list',{userID: userID}),
                method: 'POST',
                datatype: 'json',
                contentType: 'application/json',
                success: function (data) {
                    if (data.length === 0) {
                        var html = `
                            <tr>
                                <td class="text-center red" colspan="6">查無資料</td>
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
                                <td class="text-center red" colspan="6">請重新整理</td>
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

        var html = `
            <tr>
                <td class="text-center `+color+`">`+data['orgName']+`</td>
                <td class="text-center `+color+`">`+data['createdUserName']+`</td>
                <td class="text-center `+color+`">`+data['applyDate']+`</td>
                <td class="text-center `+color+`">`+data['name']+`</td>
                <td class="text-right `+color+`">`+data['amount']+`</td>
                <td class="text-center `+color+`">`+data['issueDate']+`</td>
            </tr>
        `;

        $(this._selector.userIDList).append(html);
    }
}

window.UserIDFinancialAid = UserIDFinancialAid;