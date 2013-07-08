// ==UserScript==
// @name        time.gemtek by carlcarl
// @description Beautify this web page
// @include      htt*://time.gemtek.com.tw/*
// @include      htt*://time.gemteks.com/*
// @author      carlcarl
// ==/UserScript==


(function () {
	"use strict";
	/*jslint browser:true */
	var head, style, body, rules, script;

	function main() {
		var inputs, table, trs, i, len;
		inputs = document.getElementsByTagName('input');
		for (i = 0, len = inputs.length; i < len; i += 1) {
			if (inputs[i].className === 'icon2') {
				inputs[i].className = 'btn';
			} else if (inputs[i].className === 'icon3') {
				inputs[i].className = 'btn';
			} else if (inputs[i].className === 'icon') {
				inputs[i].className = 'btn';
			}
			
		}
		table = document.getElementsByTagName('table')[0];
		table.className = "table";
		trs = document.getElementsByTagName('tr');
		for (i = 0, len = trs.length; i < len; i += 1) {
			if (trs[i].className === 'black') {
				trs[i].className = '';
				trs[i].bgColor = '';
			} else if (trs[i].className === 'white') {
				trs[i].className = '';
				trs[i].bgColor = 'black';
			}
		}
		document.getElementById('form1').style.display = 'block';
	}

	function bootstrap_2() {
		var head, link;
		head = document.getElementsByTagName('head')[0];
		link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css';
		link.onload = main;
		head.appendChild(link);
	}

	function bootstrap() {
		var bootstrap_script = document.createElement('script');
		bootstrap_script.src = 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js';
		bootstrap_script.onload = bootstrap_2;
		body.appendChild(bootstrap_script);
	}

	function init() {
		head = document.getElementsByTagName('head')[0];
		style = document.createElement('style');
		rules = document.createTextNode('#form1{display: none;} font{color: black;}');
		style.type = 'text/css';
		body = document.body;

		if (style.styleSheet) {
			style.styleSheet.cssText = rules.nodeValue;
		} else {
			style.appendChild(rules);
		}
		head.appendChild(style);

		if (!window.jQuery) {
			script = document.createElement('script');
			script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
			script.onload = bootstrap;
			body.appendChild(script);
		} else {
			bootstrap();
		}
	}

	init();

}());

