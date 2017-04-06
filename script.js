function divRandom()
{
	var red = parseInt(Math.random() * 256);
	var green = parseInt(Math.random() * 256);
	var blue = parseInt(Math.random() * 256);
	document.querySelector('.js_div').style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
	
	var pRed = parseInt(Math.random() * 256);
	var pGreen = parseInt(Math.random() * 256);
	var pBlue = parseInt(Math.random() * 256);
	document.querySelector('p').style.color = 'rgb('+pRed+','+pGreen+','+pBlue+')';

	var date = new Date();
	var day = date.getDay();
	var dateNbr = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	var hour = date.getHours();
	var minute = date.getMinutes();
	if (minute <10)
	{
		minute="0"+minute;	
	}
	var second = date.getSeconds();
	if (second <10)
	{
		second="0"+second;	
	}
	var ms = date.getMilliseconds();
	if (ms <10)
	{
		ms="00"+ms;	
	}
	else if (ms <100)
	{
		ms="0"+ms;	
	}
	var anniv = new Date ("Oct 28 23:23:00 2017");
	var secondsTotal = (anniv-date)/1000;
	var annivDays = Math.floor(secondsTotal/(60*60*24));
	var annivHours = Math.floor((secondsTotal - (annivDays*60*60*24))/(60*60));
	var annivMinutes = Math.floor((secondsTotal - ((annivDays*60*60*24+annivHours*60*60)))/60);
	var annivSeconds = Math.floor(secondsTotal - ((annivDays * 60 * 60 * 24 + annivHours * 60 * 60 + annivMinutes * 60)));
	
	var listDays=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
	var listMonths=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
	document.querySelector('p').innerHTML="Nous sommes "+listDays[day]+" "+dateNbr+" "+listMonths[month]+" "+year+" <br> Il est : <br> "+hour+" h "+minute+" : "+second+" : "+ms+"<br><br>Mon anniversaire est dans :<br>"+annivDays+" jours, "+annivHours+" heures, "+annivMinutes+" minutes et "+annivSeconds+" secondes :) ";
}
//changement à chaque clic de souris :
document.querySelector('.js_div').onclick = divRandom;
//changement à chaque déplacement de souris :
// document.querySelector('.js_div').onmousemove = divRandom;
//changement à chaque seconde :
myTimer=window.setInterval("divRandom()",10000);