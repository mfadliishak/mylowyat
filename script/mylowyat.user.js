// ==UserScript==
// @author         sk3dsu(Fadli Ishak)
// @name           MyLowyat
// @version        0.3
// @description    Removing some elements of the forum to be a bit cleaner for SFW.
// @namespace      https://github.com/mfadliishak/lowyatAvatars
// @icon           https://forum.lowyat.net/favicon.ico
// @match          http*://forum.lowyat.net/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// @run-at      document-idle
// ==/UserScript==

/**
 * 1. Remove all those annoying avatars!
 *
 */
var avatars = $('.avatarwrap');
for (i = 0; i < avatars.length; i++)
{
    var item = avatars[i];
    item.style.display = "none";
}

/**
 * 2. Remove that big banner up there.
 *
 */
var banner = $('.borderwrap #logostrip');
if (banner.length)
{
	banner.css("display", "none");
}

/**
 * 3. Remove that background image ads, only original lowyat's shown.
 *
 */
css = "body { }";
try {
    var elmHead, elmStyle;
    elmHead = document.getElementsByTagName('head')[0];
    elmStyle = document.createElement('style');
    elmStyle.type = 'text/css';
    elmHead.appendChild(elmStyle);
    elmStyle.innerHTML = css;
} catch (e) {
    if (!document.styleSheets.length) {
        document.createStyleSheet();
    }
    document.styleSheets[0].cssText += css;
}