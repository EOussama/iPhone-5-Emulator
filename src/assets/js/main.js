/**
*
* @name:       iPhone 5 Emulator
* @version:    0.1.0
* @author:     EOussama
* @license     Apache-2.0
* @source:     https://github.com/EOussama/iPhone-5-Emulator
* 
* The main javascript file of the app.
*
*/

"use strict";

const 
	daysOfWeek = ['Sunday', 'Monday', 'Tuesday, Wednsday', 'Thursday', 'Friday', 'Saturday'],
	  monthsNames = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

var 
	iPhone = {
		state : false
	},
	timer;
	
window.addEventListener('load', function() {
	const 
		screen = document.querySelector('.iPhone .screenOff'),
		lockHour = document.getElementById('lockHour'),
		lockDate = document.getElementById('lockDate'),
		homeBtn = document.getElementById('homeBtn');

	function switchOn() {
		screen.style.opacity = '0';
		iPhone.state = true;
		setTimeout(switchOff, 8000);
	}

	function switchOff() {
		screen.style.opacity = '1';
		iPhone.state = false;
	}

	timer = setInterval(function () {
		let date = new Date();
		
		lockHour.textContent = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()} : ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
		lockDate.textContent = `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${monthsNames[date.getMonth()]}`;
	}, 1000);
	
	homeBtn.addEventListener('click', switchOn);
});
