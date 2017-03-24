// ==UserScript==
// @author         sk3dsu(Fadli Ishak)
// @name           MyLowyat
// @version        0.2
// @description    Removing some elements of the forum to be a bit cleaner for SFW.
// @namespace      https://github.com/mfadliishak/lowyatAvatars
// @icon           https://forum.lowyat.net/favicon.ico
// @match          http*://forum.lowyat.net/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// ==/UserScript==

/**
 * 1. Remove all those annoying avatars!
 *
 */
var avatars = $('.avatarwrap');
for (i = 0; i < avatars.length; i++)
{
    var item = avatars[i];
    item.style = "display:none;";
}

/**
 * 2. Remove that big banner up there.
 *
 */
var banner = $('.borderwrap');
if (banner)
{
	banner.style = "display:none;";
}
