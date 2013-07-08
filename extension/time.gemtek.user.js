// ==UserScript==
// @name        time.gemtek by carlcarl
// @description Beautify the web page
// @include      htt*://time.gemtek.com.tw/*
// @include      htt*://time.gemteks.com/*
// @author      carlcarl
// ==/UserScript==


(function () {
	"use strict";
	/*jslint browser:true */

	function main() {
		var head, body, inputs, table, trs, i, len;
		head = document.getElementsByTagName('head')[0];
		body = document.body;
		inputs = document.getElementsByTagName('input');
		for (i = 0, len = inputs.length; i < len; i += 1) {
			if (inputs[i].className === 'icon2') {
				inputs[i].className = 'btn';
			} else if (inputs[i].className === 'icon3') {
				inputs[i].className = 'btn';
			} else if (inputs[i].className === 'icon') {
				inputs[i].className = 'btn';
			} else if (inputs[i].name === 'date_b1' || inputs[i].name === 'date_b2') {
				inputs[i].style.display = 'none';
			} else if (inputs[i].name === 'startdate' || inputs[i].name === 'enddate') {
				inputs[i].type = 'date';
			} else if (inputs[i].type === 'button' || inputs[i].type === 'submit') {
				inputs[i].className = 'btn';
			}
			
		}
		table = document.getElementsByTagName('table')[0];
		if (table) {
			table.className = "table";
		}
		trs = document.getElementsByTagName('tr');
		for (i = 0, len = trs.length; i < len; i += 1) {
			if (trs[i].className === 'black') {
				trs[i].className = '';
			} else if (trs[i].className === 'white') {
				trs[i].className = '';
			}
		}
		document.getElementById('form1').style.display = 'block';
	}

	main();

}());

