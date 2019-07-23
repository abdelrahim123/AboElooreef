/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Big Room Slider
6. Init Gallery Slider
7. Init Lightbox
8. Init Magic


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menu = $('.menu');
	var menuActive = false;
	initMenu();
/*
	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}
    
    $('.x').onclick(function(){
        
        closeMenu();
        
    });
    
    

});