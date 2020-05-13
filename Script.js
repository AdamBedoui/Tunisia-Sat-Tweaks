// ==UserScript==
// @name         Tunisia-Sat Tweaks
// @namespace    https://www.tunisia-sat.com/
// @version      0.1
// @description  Some tweaks for our forum
// @icon         https://www.tunisia-sat.com/forums/styles/default/TS/logo.og.png
// @author       Adam Bedoui
// @match        https://www.tunisia-sat.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    var refresh_icon = $('#WhatsNewTweak_Spin');
    refresh_icon.parent().css( "display", "none" );
    refresh_icon.css( "display", "none" );
    toggleRefresh();
    $('.p-header').css('background','#1f5c7a');

})();
