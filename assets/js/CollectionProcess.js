const $ = global.jQuery;

//用webpack es6 不會的話 去看knp教學
(function(window, $) {

    class CollectionProcess {
        constructor($table) {
            this._selector = {
                wrapper: 'tbody',
                liSelector: 'tr.li',
                collectionHolderSelector: 'tbody.ul',
                deleteButton: '.deleteButton',
                deleteflagInput: 'input.deleteflag',
                memoInput: 'textarea.memo',
                memoButton: 'button.memo',
                memoParentHidden: 'tr',
            }

            this._selector = {
                wrapper: 'tbody',
                liSelector: 'tr.li',
                collectionHolderSelector: 'tbody.ul',
                deleteButton: '.deleteButton',
                deleteflagInput: 'input.deleteFlag',
                memoInput: 'textarea.memo',
                memoButton: 'button.memo',
                memoParentHidden: 'tr',
            }

            this._memoHideIcon = "fa fa-comment-o";
            this._memoDispalyIcon = "fa fa-comment";
            this._taglinkhtml = `
                    <div class="col-xs-2" style="margin-top: 15px">
                       <button type="button" class="add_tag_link btn btn-primary plus btn-sm">
                           <i class="fa fa-plus fa-lg">
                           </i>
                       </button>
                    </div>
            `;
            this._taglinkLiHtml = `
                <tr>
                    <td colspan='__colspan__'>
                    </td>
                </tr>
            `;

            this.initialize($table);
        }

        initialize($table) {
            this.$table = $table;
            this.clear();
            this.addCollectionProcess();
            this.deleteCollectionProcessByDeleteflag();
            this.memoDisplayProcess();
        }

        clear(){
            if (this.$newLinkLi){
                this.$newLinkLi.remove();
            }
        }

        /**
         * @returns {
         *      {
         *          wrapper: 最外面一層 body,
         *          collectionHolderSelector: ul,
         *          liSelector: li,
         *          deleteButton: string,
         *          deleteflagInput: string,
         *          memoInput: string,
         *          memoButton: string,
         *          memoParentHidden: string
         *      }
         *  }
         */
        get selector() {
            return this._selector;
        }

        set selector(selector) {
            this._selector = selector;
        }

        get tagLinkHtml() {
            return this._taglinkhtml;
        }

        set tagLinkHtml(taglinkhtml) {
            this._taglinkhtml = taglinkhtml;
        }

        get tagLinkliHtml() {
            return this._taglinkLiHtml;
        }

        set tagLinkliHtml(taglinkLiHtml) {
            this._taglinkLiHtml = taglinkLiHtml;
        }

        //參考Symfony和knp的CollectionType 教學
        addCollectionProcess() {
            const $table = this.$table;
            if ($table) {
                this.$collectionHolder = $table.find(
                    this._selector.collectionHolderSelector);
            }
            else {
                this.$collectionHolder = $(
                    this._selector.collectionHolderSelector);
            }
            this.$divli = $(this.divli);

            this.$addTagLink = $(this.tagLinkHtml);

            let columnAmount = this.$collectionHolder.closest('table').
                find('tr').find('th').length;
            this.tagLinkliHtml = this.tagLinkliHtml.replace(/__colspan__/g,
                columnAmount);

            this.$newLinkLi = $(this.tagLinkliHtml).
                children().append(this.$addTagLink);

            this.$collectionHolder.after(this.$newLinkLi);
            this.$collectionHolder.data('index',
                this.$collectionHolder.find(this._selector.liSelector).length);

            const self = this;
            const addTagFormFunction = this.addTagForm.bind(this);
            this.$addTagLink
            .off('click')
            .on('click', function(e) {
                e.preventDefault();
                addTagFormFunction();
            });
        }

        addTagForm() {
            const $collectionHolder = this.$collectionHolder;
            const $newLinkLi = this.$newLinkLi;
            const prototype = $collectionHolder.data('prototype');
            const index = $collectionHolder.data('index');

            let newForm = prototype;
            newForm = newForm.replace(/__name__/g, index);
            $collectionHolder.data('index', index + 1);

            const $newFormLi = $(newForm);
            $collectionHolder.append($newFormLi);

            $("input[name*=deleteflag]").val(1);
        }

        /*
         * 刪除Collection作業
         * @param deleteButton
         * @param deleteflagInput
         */
        deleteCollectionProcessByDeleteflag() {
            const $table = this.$table;
            if ($table) {
                $table.
                    off('click', this._selector.deleteButton).
                    on('click', this._selector.deleteButton,
                        this.deleteButtonClick.bind(this)
                    );
            }
            else {
                $(this._selector.wrapper).
                    off('click', this._selector.deleteButton).
                    on('click', this._selector.deleteButton,
                        this.deleteButtonClick.bind(this)
                    );
            }
        }

        deleteButtonClick(e) {
            const $row = $(e.currentTarget).
                closest(this.selector.liSelector);
            this.deleteRow($row)
        }

        deleteRow($row) {
            const $deleteflagInput = $row.find(
                this.selector.deleteflagInput);
            if ($deleteflagInput.val() == '1') {
                $row.find("input").addClass("warnColor");
                $row.find("input[type='radio']").parent().parent().addClass("warnColor");
                $row.closest("tr").addClass("calculate");
                $deleteflagInput.val(0);
                $deleteflagInput.trigger('change');
                $row.addClass("calculate");

            } else {
                $row.find('input').removeClass('warnColor');
                $row.find("input[type='radio']").parent().parent().removeClass("warnColor");
                $row.closest("tr").removeClass("calculate");
                $deleteflagInput.val('1');
                $deleteflagInput.trigger('change');
                 $row.removeClass("calculate");
            }
        }

        /**
         * 備註顯示與消失
         * @param hideIcon
         * @param displayIcon
         * @param memoInput
         * @param memoButton
         */
        memoDisplayProcess() {
            const $table = this.$table;
            if ($table) {
                $table
                .off('click', this._selector.memoButton)
                .on('click', this._selector.memoButton,
                    this.memoButtonClick.bind(this)
                );
            } else {
                $('tbody')
                .off('click', this._selector.memoButton)
                .on('click', this._selector.memoButton,
                    this.memoButtonClick.bind(this)
                );
            }
        }

        memoButtonClick(e) {
            e.preventDefault();
            const $currentTarget = $(e.currentTarget);
            const $row = $currentTarget.closest(this._selector.liSelector);
            this.memoButtonToggle($row)
        }

        memoButtonToggle($row){
            const $inputRow = $row.next();
            const $memoInput = $inputRow.find(this.selector.memoInput);
            const $memoButton = $row.find(this._selector.memoButton);

            if ($memoButton.data("hiddenflag")) {
                $memoButton.find("i").attr('class', this.displayIcon);
                $memoButton.data("hiddenflag", false);
                $memoInput.closest(this.selector.memoParentHidden).
                    removeClass('hidden');
            } else {
                $memoButton.find("i").attr('class', this.hideIcon);
                $memoButton.data("hiddenflag", true);
                $memoInput.closest(this.selector.memoParentHidden).
                    addClass('hidden');
            }
        }

        setAddCollectionProcess(callback) {
            this.addCollectionProcess = callback.bind(this);
        }

        setAddTagForm(callback) {
            this.addTagForm = callback.bind(this);
        }

        setDeleteCollectionProcessByDeleteflag(callback) {
            this.deleteCollectionProcessByDeleteflag = callback.bind(this);
        }

        setDeleteButtonClick(callback) {
            this.deleteButtonClick = callback.bind(this);
        }

        setMemoDisplayProcess(callback) {
            this.memoDisplayProcess = callback.bind(this);
        }

        setMemoButtonClick(callback) {
            this.memoButtonClick = callback.bind(this);
        }

    }

    window.CollectionProcess = CollectionProcess;

})(window, jQuery);