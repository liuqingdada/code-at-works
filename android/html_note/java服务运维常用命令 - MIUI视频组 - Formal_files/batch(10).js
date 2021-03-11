WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.expander', location = 'aui.chunk.8de3505c535ba3bcd956--07d0e4be166aa46a027e.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.expander"],{HTrG:function(e,t,r){},iFnW:function(e,t,r){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}}(r("+x/D"));var n=(0,a.default)(document),i=function(e){var t={};return t.$trigger=(0,a.default)(e.currentTarget),t.$content=n.find("#"+t.$trigger.attr("aria-controls")),t.triggerIsParent=0!==t.$content.parent().filter(t.$trigger).length,t.$shortContent=t.triggerIsParent?t.$trigger.find(".aui-expander-short-content"):null,t.height=t.$content.css("min-height"),t.isCollapsible=!1!==t.$trigger.data("collapsible"),t.replaceText=t.$trigger.attr("data-replace-text"),t.replaceSelector=t.$trigger.data("replace-selector"),t},o=function(e){if(e.replaceText){var t=e.replaceSelector?e.$trigger.find(e.replaceSelector):e.$trigger;e.$trigger.attr("data-replace-text",t.text()),t.text(e.replaceText)}},d={"aui-expander-invoke":function(e){var t=(0,a.default)(e.currentTarget),r=n.find("#"+t.attr("aria-controls")),i=!1!==t.data("collapsible");"true"===r.attr("aria-expanded")&&i?t.trigger("aui-expander-collapse"):t.trigger("aui-expander-expand")},"aui-expander-expand":function(e){var t=i(e);"true"!==t.$content.attr("aria-expanded")&&(t.$content.attr("aria-expanded","true"),t.$trigger.attr("aria-expanded","true"),t.$content.outerHeight()>0&&t.$content.attr("aria-hidden","false"),o(t),t.triggerIsParent&&t.$shortContent.hide(),t.$trigger.trigger("aui-expander-expanded"))},"aui-expander-collapse":function(e){var t=i(e);"true"===t.$content.attr("aria-expanded")&&(o(t),t.$content.attr("aria-expanded","false"),t.$trigger.attr("aria-expanded","false"),t.triggerIsParent&&t.$shortContent.show(),0===t.$content.outerHeight()&&t.$content.attr("aria-hidden","true"),t.$trigger.trigger("aui-expander-collapsed"))},"click.aui-expander":function(e){(0,a.default)(e.currentTarget).trigger("aui-expander-invoke",e.currentTarget)}};n.on(d,".aui-expander-trigger")},ufFX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("HTrG"),r("iFnW")}},[["ufFX","runtime","aui.splitchunk.172ffb6da7","aui.splitchunk.fbd1a5ab27"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup top-label"><h3>' + soy.$$escapeHtml(opt_data.heading) + '</h3><fieldset class="top-label" style="margin-top:10px"><div class="field-group top-label"><label for="share-link-input">' + soy.$$escapeHtml('\u5206\u4eab\u94fe\u63a5') + '</label><div class="share-copy-link"><input id="share-link-input" type="text" class="text" readonly><button id="share-link-copy-button" type="button" class="aui-button">' + soy.$$escapeHtml('\u590d\u5236') + '</button></div></div></fieldset>' + ((opt_data.mailServerConfigured) ? '<hr style="margin-top:12px;"/><fieldset class="top-label"><div class="field-group top-label"><label for="share-invite-users-input">' + soy.$$escapeHtml(opt_data.peopleHeading) + '</label><div class="autocomplete-user-target"><input id="share-invite-users-input" class="text autocomplete-sharepage" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml('\u65e0\u5339\u914d\u5185\u5bb9') + '" placeholder="' + soy.$$escapeHtml('\u7528\u6237\u540d\uff0c\u7ec4\u6216Email') + '"/></div><ul class="recipients" style="display:none;"></ul></div></fieldset><fieldset class="top-label"><div class="field-group top-label"><label for="share-note-input">' + soy.$$escapeHtml('\u5305\u542b\u6d88\u606f') + '</label><textarea class="textarea" id="share-note-input" placeholder="' + soy.$$escapeHtml(opt_data.notePlaceholder) + '"/></div></fieldset><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit disabled" type="submit" value="' + soy.$$escapeHtml(opt_data.submitButtonText) + '"/><a class="close-dialog" href="#">' + soy.$$escapeHtml('\u53d6\u6d88') + '</a></div>' : '') + '</form><div class="restriction-warning-container"><div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.copied = function(opt_data, opt_ignored) {
  return '<div class="copied share-custom-message"><div class="message-icon custom-icon icon-success"></div><div class="message-text">' + soy.$$escapeHtml('\u590d\u5236\u5230\u526a\u8d34\u677f') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.copied.soyTemplateName = 'Confluence.Templates.Share.Dialog.copied';
}


Confluence.Templates.Share.Dialog.recipientSelectionError = function(opt_data, opt_ignored) {
  return '<div class="recipientSelectionError share-custom-message"><div class="message-icon aui-icon aui-icon-small aui-iconfont-error" style="color: #d2544c;"></div><div class="message-text">' + ((opt_data.copyOption == 'invite') ? soy.$$escapeHtml('\u8f93\u5165\u60a8\u60f3\u8981\u9080\u8bf7\u6210\u5458\u7684\u540d\u5b57\u6216\u90ae\u4ef6') : soy.$$escapeHtml('\u8f93\u5165\u60a8\u60f3\u8981\u6dfb\u52a0\u6210\u5458\u7684\u540d\u5b57\u6216\u90ae\u4ef6')) + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientSelectionError.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientSelectionError';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-userkey="' + soy.$$escapeHtml(opt_data.userKey) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}


Confluence.Templates.Share.Dialog.restrictionWarning = function(opt_data, opt_ignored) {
  return '' + ((opt_data.type != '') ? '<div class="restriction-warning"><div class="aui-icon aui-icon-small aui-iconfont-locked red"></div><div class="share-dialog-' + soy.$$escapeHtml(opt_data.type) + '-message">' + soy.$$escapeHtml(opt_data.message) + ' <a id="restriction-open-button" href="#">' + soy.$$escapeHtml('\u66f4\u6539') + '</a></div></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.restrictionWarning.soyTemplateName = 'Confluence.Templates.Share.Dialog.restrictionWarning';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/util/resolve-entity-id.js' */
define("confluence/share-page/util/resolve-entity-id",["confluence/meta"],function(a){return function b(c){if(typeof c==="function"){return c()}if(typeof c==="string"||typeof c==="number"){return parseInt(c)}return a.get("content-id")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/util/show-message.js' */
define("confluence/share-page/util/show-message",["jquery","confluence/legacy"],function(a,c){return function b(g,m,k,d,j,e){var l=g.next("."+m);var h=a(c.Templates.Share.Dialog[m](k));var f;if(l.length){j&&typeof j==="function"&&j();if(l.hasClass("show")){l.addClass("existing");setTimeout(function(){l.removeClass("existing");e&&typeof e==="function"&&e()},200)}else{l.addClass("show");e&&typeof e==="function"&&e()}f=l}else{g.after(h);setTimeout(function(){h.addClass("show")},5);f=h}if(!d){clearTimeout(f.data("timeout"));var i=setTimeout(function(){f.removeClass("show")},2000);f.data("timeout",i)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/util/find-recipients.js' */
define("confluence/share-page/util/find-recipients",["jquery"],function(b){return{findAllRecipients:function e(f){return f.find(".recipients li")},findUsers:function d(f){var g=[];f.find(".recipients li[data-userKey]").each(function(h,i){g.push(b(i).attr("data-userKey"))});return g},findEmails:function a(f){var g=[];f.find(".recipients li[data-email]").each(function(h,i){g.push(b(i).attr("data-email"))});return g},findGroups:function c(g){var f=[];g.find(".recipients li[data-group]").each(function(h,i){f.push(b(i).attr("data-group"))});return f}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/service/analytics-service.js' */
define("confluence/share-page/service/analytics-service",["confluence/analytics-support","confluence/meta","confluence/share-page/util/resolve-entity-id"],function(a,b,d){return{publish:function c(h,g,i,j){try{var f=parseInt(d(g));var m=i==="attachment"?"attachment":b.get("content-type");var l=j||{};if(i==="attachment"){l.attachmentId=f}else{if(i==="edit"){l.draftId=f}else{l.contentId=f}}l.contentType=m;a.publish(h.replace("<shareType>",i),l)}catch(k){}},SHARE_STARTED:"confluence.share-page.<shareType>.started",SHARE_LINK_CLICKED:"confluence.share-page.<shareType>.link.clicked",SHARE_LINK_DOUBLE_CLICKED:"confluence.share-page.<shareType>.link.double-clicked",SHARE_LINK_COPY_CLICKED:"confluence.share-page.<shareType>.link.copy.clicked",SHARE_LINK_COPIED:"confluence.share-page.<shareType>.link.copied",SHARE_CANCEL_CLICKED:"confluence.share-page.<shareType>.cancel.clicked",SHARE_NO_USERS_SELECTED:"confluence.share-page.<shareType>.submit.no-users",SHARE_ERROR:"confluence.share-page.<shareType>.error"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/fetch/content-info.js' */
define("confluence/share-page/fetch/content-info",["ajs","jquery",],function(a,b){function c(d){return d?"?status="+d:""}return function(e,d){return b.get(a.contextPath()+"/rest/api/content/"+e+c(d))}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/fetch/content-restrictions.js' */
define("confluence/share-page/fetch/content-restrictions",["ajs"],function(a){var d="/rest/api/content/<contentId>/restriction/byOperation";var c=a.$;function b(f){var e=c.Deferred();a.$.ajax({url:a.contextPath()+d.replace("<contentId>",f)}).done(function(g){e.resolve(g)}).fail(function(g){e.reject(g)});return e.promise()}return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/autocomplete/autocomplete-user.js' */
define("confluence/share-page/autocomplete/autocomplete-user",["ajs","jquery","confluence/legacy"],function(a,c,d){return function b(h){h=h||document.body;var e=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;function g(m){if(!m||!m.result){throw new Error("Invalid JSON format")}var j=[];for(var k=0;k<m.result.length;k++){var l=m.result[k];if(l.type=="group"){l=f(l)}}j.push(m.result);return j}function f(i){if(i.name=="confluence-users"||i.name=="confluence-administrators"){return i}i.title=i.name;i.group=i.name;i.thumbnailLink={href:d.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:_private_share-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};i.link=[{href:d.getContextPath(),rel:"self"}];return i}c("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",h).each(function(){var k=c(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var j=k.attr("data-max")||10,m=k.attr("data-alignment")||"left",l=k.attr("data-dropdown-target"),i=null;if(l){i=c(l)}else{i=c("<div></div>");k.after(i)}i.addClass("aui-dd-parent autocomplete");k.quicksearch(a.REST.getBaseUrl()+"search/user-or-group.json",function(){k.trigger("open.autocomplete-sharepage")},{makeParams:function(n){return{"max-results":j,query:n.replace("{|}","")}},dropdownPlacement:function(n){i.append(n)},makeRestMatrixFromData:g,addDropdownData:function(o){var n=c.trim(k.val());if(e.test(n)){o.push([{name:n,email:n,href:"#",icon:d.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:_private_share-page-resources/images/envelope.png"}])}if(!o.length){var p=k.attr("data-none-message");if(p){o.push([{name:p,className:"no-results",href:"#"}])}}return o},ajsDropDownOptions:{alignment:m,displayHandler:function(n){if(n.restObj&&n.restObj.username){return n.name+" ("+n.restObj.username+")"}return n.name},selectionHandler:function(p,o){if(o.find(".search-for").length){k.trigger("selected.autocomplete-sharepage",{searchFor:k.val()});return}if(o.find(".no-results").length){this.hide();p.preventDefault();return}var n=c("span:eq(0)",o).data("properties");if(!n.email){n=n.restObj}k.trigger("selected.autocomplete-sharepage",{content:n});this.hide();p.preventDefault()}}})})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/autocomplete/setup-autocomplete.js' */
define("confluence/share-page/autocomplete/setup-autocomplete",["ajs","jquery","confluence/legacy"],function(a,c,d){return function b(g,f,h){var i=g.find("#share-invite-users-input");var e=g.find("input.submit");i.bind("selected.autocomplete-sharepage",function(k,j){var l=function(o,n,p){var r=g.find(".recipients");var q;var m;r.show();g.find(".autocomplete-user-target").nextAll(".recipientSelectionError").remove();i.removeClass("field-error");q="li[data-"+o+'="'+p.content[o]+'"]';if(r.find(q).length>0){r.find(q).hide()}else{r.append(n(p.content))}m=r.find(q);m.find(".remove-recipient").click(function(){m.remove();if(r.find("li").length==0){e.addClass("disabled");r.hide()}c(f).data("dialog").refresh();i.focus();return false});m.fadeIn(200)};if(j.content.email){l("email",d.Templates.Share.Dialog.recipientEmail,j)}else{if(j.content.type=="group"){l("group",d.Templates.Share.Dialog.recipientGroup,j)}else{l("userKey",d.Templates.Share.Dialog.recipientUser,j)}}c(f).data("dialog").refresh();e.removeClass("disabled");i.val("");i.focus();return false});i.bind("open.autocomplete-sharepage",function(k,j){if(c("a:not(.no-results)",a.dropDown.current.links).length>0){a.dropDown.current.moveDown()}});i.keypress(function(j){return j.keyCode!=13})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/form/submit.js' */
define("confluence/share-page/form/submit",["ajs","jquery","confluence/legacy","confluence/meta","confluence/share-page/service/analytics-service","confluence/share-page/util/find-recipients","confluence/share-page/util/resolve-entity-id","confluence/message-controller"],function(m,h,o,c,q,d,l,a){var j="invite";function f(u,t,x){var w=d.findUsers(u);var v=d.findEmails(u);var r=d.findGroups(u);var s=u.find("#share-note-input");return{users:w,emails:v,groups:r,note:s.val(),entityId:t,entityType:x||c.get("content-type"),contextualPageId:c.get("content-id")}}function g(r){h("button,input,textarea",r).removeAttr("disabled");h(".submit.button",r).removeClass("disabled").removeAttr("aria-disabled")}function k(r){h("button,input,textarea",r).attr("disabled","disabled");h(".submit.button",r).attr("disabled",false).addClass("disabled").attr("aria-disabled",true)}function e(s,r){var t=m.escapeEntities(r);switch(s){case"success":m.flag({type:"success",body:t,close:"auto"});break;case"error":m.flag({type:"error",body:t})}}function p(r,s){return(r===j?m.format("\u5df2\u5411 {0} \u53d1\u9001\u9080\u8bf7\u3002",s):m.format("\u5206\u4eab\u7ed9: {0}",s))}function n(r,s){return(r===j?m.format("\u5df2\u5411 {0} \u548c\u5176\u4ed6 1 \u4eba\u53d1\u9001\u9080\u8bf7\u3002",s):m.format("\u5df2\u4e0e {0} \u548c\u5176\u4ed6 1 \u4eba\u5171\u4eab\u3002",s))}function b(r,s,t){return(r===j?m.format("\u5df2\u5411 {0} \u548c\u5176\u4ed6 {1} \u4eba\u53d1\u9001\u9080\u8bf7\u3002",s,t):m.format("\u5df2\u4e0e {0} \u548c\u5176\u4ed6 {1} \u4eba\u5171\u4eab\u3002",s,t))}return function i(t,s,x,v){var w=d.findAllRecipients(t).length;if(w===0){return false}var r=t.find(".progress-messages-icon");k(t);r.spin();r.css("position","absolute").css("top","20px");var u=f(t,l(v.entityId),v.contentType);h.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:o.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(u),dataType:"text",success:function(){r.spinStop();var y=t.find(".recipients").find("li").first().text();var z;switch(w){case 1:z=p(v.copyOption,y);break;case 2:z=n(v.copyOption,y);break;default:z=b(v.copyOption,y,w-1)}e("success",z);x(true)},error:function(z,y){q.publish(q.SHARE_ERROR,v.entityId,v.shareType);r.spinStop();a.showError(a.parseError(z),a.Location.FLAG);g(t,v.errorText)}});return false}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/popup/setup-share-link.js' */
define("confluence/share-page/popup/setup-share-link",["jquery","confluence/share-page/service/analytics-service","confluence/share-page/util/show-message"],function(d,f,e){function b(g){if(typeof g==="function"){return d.when(g())}if(typeof g==="string"){return d.when(g)}return d.when(window.location)}function a(h){if((""+h).indexOf("resumedraft.action")===-1){return h}var i="src=shareui&src.shareui.timestamp="+(new Date()).getTime();var g;if(window.location.search.length===0){g="?"}else{g="&"}return h+g+i}return function c(l,i){var h=l.find(".share-copy-link");var g=h.find("input");var k=h.find("button");if(!g.length){return}g.val(window.location);b(i.link).then(function(n){n=a(n);g.val(n)});g.on("click focus",function(n){setTimeout(function(){m()},0);n.preventDefault()});g.focus(function(){f.publish(f.SHARE_LINK_CLICKED,i.entityId,i.shareType)});k.click(function(){f.publish(f.SHARE_LINK_COPY_CLICKED,i.entityId,i.shareType);j()});g.dblclick(function(){f.publish(f.SHARE_LINK_DOUBLE_CLICKED,i.entityId,i.shareType);j()});g.blur(function(){g.removeData("selected")});d(document).off("copy.share-link").on("copy.share-link",function(){if(!g.data("selected")){return}f.publish(f.SHARE_LINK_COPIED,i.entityId,i.shareType);e(h,"copied",i,false,function(){k.prop("disabled",true)},function(){k.prop("disabled",false)})});function m(){g.select();g.data("selected",true)}function j(){m();document.execCommand("copy")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/popup/setup-restriction-warning.js' */
define("confluence/share-page/popup/setup-restriction-warning",["jquery"],function(a){return function b(d,c){if(typeof c.restriction==="function"){a.when(c.restriction()).then(function(g){if(g.type){var e=d.find(".restriction-warning-container");e.append(Confluence.Templates.Share.Dialog.restrictionWarning(g));var f=e.find("#restriction-open-button");if(f.length){f.click(function(i){var h=a("#rte-button-restrictions");if(h.length){h.trigger("click")}i.preventDefault()})}}})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/popup/generate-popup.js' */
define("confluence/share-page/popup/generate-popup",["ajs","jquery","confluence/legacy","confluence/share-page/autocomplete/autocomplete-user","confluence/share-page/autocomplete/setup-autocomplete","confluence/share-page/popup/setup-share-link","confluence/share-page/form/submit","confluence/share-page/service/analytics-service","confluence/share-page/util/show-message","confluence/share-page/util/find-recipients","confluence/share-page/popup/setup-restriction-warning"],function(f,e,m,t,v,d,k,u,g,r,i){var o=WRM.data.claim("com.atlassian.confluence.plugins.share-page:_private_share-page-resources.mail-server-configured");var l="wheel.share-page";var h="keyup.share-page";function b(w){w.find(".recipients").off(l).on(l,function(y){var x=e(this);if(x.prop("scrollHeight")>x.innerHeight()){x.scrollTop(x.scrollTop()+y.originalEvent.deltaY);y.preventDefault();y.stopPropagation();return false}})}function c(A,y,x){if(y.shareType!=="edit"){return}var w=f.Rte.getEditor();try{w.onClick[A](x);w.onKeyUp[A](x)}catch(z){f.warn("Unknown bind method:",A,"for binding to editor events.",'Only "add" or "remove" are expected.')}}function q(w,x,y){e(document).bind("showLayer",function(B,A,z){if(A==="inlineDialog"&&z.popup===e(w).data("dialog")){z.popup.find("#share-link-copy-button").focus();c("add",x,y)}}).bind("hideLayer",function(B,A,z){if(A==="inlineDialog"&&z.popup===e(w).data("dialog")){c("remove",x,y)}})}function s(y,w,z,A){var x=y.find(".submit.button");function B(){if(r.findAllRecipients(y).length===0){u.publish(u.SHARE_NO_USERS_SELECTED,z.entityId,z.shareType);g(y.find(".autocomplete-user-target"),"recipientSelectionError",z,true,function(){x.off("click",B)},function(){x.click(B)});e(this).blur();y.find("#share-invite-users-input").addClass("field-error").focus();return false}}x.click(B);y.find("form").submit(function(){return k(y,w,A,z)})}function p(w){e(document).off(h).on(h,function(x){if(x.keyCode==27){w(true);e(document).unbind(h,arguments.callee);return false}return true})}function j(w,x,y){w.find(".close-dialog").click(function(){u.publish(u.SHARE_CANCEL_CLICKED,x.entityId,x.shareType);return y(true)})}function n(w){e(w).parents().filter(function(){return this.scrollTop>0}).scrollTop(0)}return function a(z,w,y){var B=this.parameters;u.publish(u.SHARE_STARTED,B.entityId,B.shareType);if(z.find("input").length){y();B.onShow&&typeof B.onShow==="function"&&B.onShow(z);return}var x=B.copyOption==="share"?"\u5206\u4eab":"\u9080\u8bf7";var A=B.copyOption==="share"?"\u6dfb\u52a0\u6210\u5458":"\u9080\u8bf7\u6210\u5458";z.append(m.Templates.Share.Dialog.shareContentPopup({heading:B.heading,peopleHeading:A,submitButtonText:x,mailServerConfigured:o,notePlaceholder:B.notePlaceholder}));var C=function(D){B.onHide&&typeof B.onHide==="function"&&B.onHide();e(w).data("dialog").hide();if(D){setTimeout(function(){z.empty()},300)}return false};t();v(z,w,B);d(z,B);i(z,B);b(z);p(C);s(z,w,B,C);j(z,B,C);q(w,B,C);n(w);y();B.onShow&&typeof B.onShow==="function"&&B.onShow(z)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:dialog-async-loader', location = 'js/service/dialog-async-loader.js' */
define("confluence/share-page/dialog-async-loader",["ajs","jquery","confluence/share-page/popup/generate-popup"],function(a,c,b){return function(d,f,e,g){c(d).data("dialog",a.InlineDialog(d,f,b.bind({parameters:g}),e))}});
}catch(e){WRMCB(e)};