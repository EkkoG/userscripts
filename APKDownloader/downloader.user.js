// ==UserScript==
// @name         Google Play APK downloader
// @namespace    https://imciel.com/
// @version      0.1
// @description  add a download button (https://apps.evozi.com/apk-downloader/?id=xxx) to Google Play pages (play.google.com/store/apps/details?id=xxx)
// @author       cielpy
// @match        https://play.google.com/store/apps/details?id=*
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //获取 apk id
    const urlParams = new URLSearchParams(location.search);
    const id = urlParams.get('id')
    //利用 apps.evozi.com 下载
    var url='https://apps.evozi.com/apk-downloader/?id='+id;
    //创建超链接按钮
    const apkPureUrl = 'https://apkpure.com/no/' + id +'/download?from=details'
    var html='<a href="'+url+'" class="large play-button download-apk-button apps evozi" style="margin-left: 8px">Download From Evozi</a>';
    html += '<a href="'+apkPureUrl+'" class="large play-button download-apk-button apps apkmirror" style="margin-left: 8px">Download From APKPure</a>';
    var html = '<div >' + html +'</div>'
    $('wishlist-add').append(html);
    $('wishlist-added').append(html);
})();
