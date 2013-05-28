// ==UserScript==
// @name        time.gemtek by carlcarl
// @description Beautify this web page
// @include      htt*://time.gemtek.com.tw/*
// @include      htt*://time.gemteks.com/*
// @author      carlcarl
// ==/UserScript==



(function(){
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	var rules = document.createTextNode('#form1{display: none;} font{color: black;}');
	style.type = 'text/css';

	if(style.styleSheet) {
		style.styleSheet.cssText = rules.nodeValue;
	} else {
		style.appendChild(rules);
	}
	head.appendChild(style);

	var body = document.body;

	if(!($ = window.jQuery))
	{
		var script = document.createElement('script');
		script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
		script.onload = bootstrap;
		body.appendChild(script);
	}
	else
	{
		bootstrap();
	}

	function bootstrap()
	{
		var bootstrap_script = document.createElement('script');
		bootstrap_script.src = 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min.js';
		bootstrap_script.onload = bootstrap_2;
		body.appendChild(bootstrap_script);
	}

	function bootstrap_2()
	{
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css';
		link.onload = main;
		head.appendChild(link);
	}

	function main()
	{
		var inputs = document.getElementsByTagName('input');
		for(var i = 0; i < inputs.length; i++)
		{
			if(inputs[i].className === 'icon2')
			{
				inputs[i].className = 'btn';
			}
			else if(inputs[i].className === 'icon3')
			{
				inputs[i].className = 'btn';
			}
			else if(inputs[i].className === 'icon')
			{
				inputs[i].className = 'btn';
			}
			
		}
		var table = document.getElementsByTagName('table')[0];
		table.className = "table";
		var trs = document.getElementsByTagName('tr');
		for(var i = 0; i < trs.length; i++)
		{
			if(trs[i].className === 'black')
			{
				trs[i].className = '';
				trs[i].bgColor = '';
			}
		}
		// body.style.display = 'block';
		document.getElementById('form1').style.display = 'block';
	}
})();

