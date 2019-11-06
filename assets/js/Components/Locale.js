// 'user strict';
// const $ = global.jQuery;
// class Locale {
//     constructor($wrapper,initialLocale,userCurrentLocale,assetFile) {
//
//         if (!$wrapper.length){
//             return;
//         }
//         const $ulChild = $('<ul class="dropdown-menu locale-menu' +
//             ' pull-right">');
//         for (let locale of initialLocale) {
//             $ulChild.append(
//                 this.localeHtml(locale, userCurrentLocale, assetFile)
//             );
//         }
//
//         const $li = $('<li></li>')
//         $li.append(
//             this.currentHtml(userCurrentLocale, assetFile)
//         );
//         $li.append(
//             $ulChild
//         );
//
//         const $ul = $('<ul class="header-dropdown-list hidden-xs"></ul>');
//         $ul.append($li);
//
//         $wrapper.append($ul);
//         $wrapper.on('click','li > a', function(e) {
//             var locale = $(e.currentTarget).data("locale");
//             $.ajax({
//                 url: Routing.generate("changeLocale"),
//                 method: 'post',
//                 data: {
//                     'locale': locale,
//                 },
//                 success: function(reArr) {
//                     if (reArr.code == '1') {
//                         location.href = Routing.generate('root');
//                     }
//                 }
//
//             })
//         });
//     }
//
//     currentHtml(userCurrentLocale, assetFile){
//
//         return `
//             <a href="#" class="dropdown-toggle" data-toggle="dropdown">
//                 <img
//                     src="${ assetFile? assetFile:"" }"
//                     class="${ userCurrentLocale? userCurrentLocale.iconClass :"" }"
//                     alt="${ userCurrentLocale? userCurrentLocale.localeName:"" }">
//                 <span>${ userCurrentLocale?userCurrentLocale.localeName:"Choose Locale" }</span>
//                 <i class="fa fa-angle-down"></i>
//             </a>
//         `;
//     }
//
//     localeHtml(locale, userCurrentLocale, assetFile){
//         var active = "";
//         if (locale&& userCurrentLocale&& locale.locale == userCurrentLocale.locale){
//             active = 'class = "active"'
//         }
//
//         return `
//             <li ${ active } >
//                 <a href="javascript:void(0);" data-locale="${ locale.locale }" >
//                     <img src="${ assetFile }" class="${ locale.iconClass }"
//                      alt="${ locale.localeName }">
//                     ${ locale.localeName }
//                 </a>
//             </li>
//         `;
//     }
//
// }
//
// module.exports = Locale;