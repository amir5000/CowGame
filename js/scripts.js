setInterval(function () {
	var moneyTotal = +document.getElementById('money-total').innerHTML;
	var perSec = (1 / 100) * moneyTotal;
	var moneyNewTotal = (+moneyTotal) + (+perSec);
	document.getElementById('money-total').innerHTML = (moneyNewTotal.toFixed(2));
	document.getElementById('per-second').innerHTML = (perSec.toFixed(2));
	var cost = +document.getElementById('cost').innerHTML;
	var money = +document.getElementById('money-total').innerHTML;
	if (money > cost) {
		document.getElementById('add-cow').className = 'add gradient';
	}
}, 1000);
function milking () {
	var cowsTotal = +document.getElementById('cow-count').innerHTML;
	var milk = 100 * cowsTotal; // I added this since it made sense to me to add 100 more for each cow the player now has.      
	var moneyTotal = +document.getElementById('money-total').innerHTML;
	var milkingTotal = (+milk) + (+moneyTotal);
	document.getElementById('money-total').innerHTML = (milkingTotal.toFixed(2));
}
function addCow () {
	var cost = +document.getElementById('cost').innerHTML;
	var money = +document.getElementById('money-total').innerHTML;
	if (money > cost) {
		var moneyNewTotal = (+money) - (+cost);
		var newCost =  (10 / 100) * cost;
		var costTotal = (+newCost) + (+cost);
		document.getElementById('cost').innerHTML = Math.ceil(costTotal);
		document.getElementById('money-total').innerHTML = (moneyNewTotal.toFixed(2));
		var cow = document.createElement('div');
		cow.className = 'cow bounceInLeft';
		cow.innerHTML = '<img src="img/cow.png" alt="cow image" />';
		document.getElementById('cows-section').appendChild(cow);
	} else {
		alert("You don't have enough money to buy a cow, milk more cows!");
	}
	var top_level_div = document.getElementById('cows-section');
	var count = top_level_div.getElementsByTagName('div').length;
	document.getElementById('cow-count').innerHTML = (count);
	document.getElementById('milikng-amount').innerHTML = (count * 100); // I added this since it made sense to me to add 100 more for each cow the player now has.  
	if (count > 1) {
		var elements = ['plural1', 'plural2', 'plural3'];
		for(i = 0; i < elements.length; i++) {
			document.getElementById(elements[i]).innerHTML = ("s");
		}
	}
}
function cowsSound () {
	var cowAudio = document.getElementById('cow-sound');
	var cowsAudio = document.getElementById('cows-sound');
	var cowsTotal = +document.getElementById('cow-count').innerHTML;
	var cost  = +document.getElementById('cost').innerHTML;
	var money = +document.getElementById('money-total').innerHTML;
	if (money > cost) {
		document.getElementById('add-cow').className = 'add gradient';
	}
	if (cowsTotal < 2) {
		cowAudio.pause();
		cowAudio.currentTime = 0;
		cowAudio.play();
	} else {
		cowsAudio.pause();
		cowsAudio.currentTime = 0;
		cowsAudio.play();
	}
}
function cashSound () {
	var cost  = +document.getElementById('cost').innerHTML;
	var money = +document.getElementById('money-total').innerHTML;
	var cashAudio = document.getElementById('cash-sound');
	var errorAudio = document.getElementById('error-sound');
	if (money < cost) {
		document.getElementById('add-cow').className = 'add gradient disabled';
		errorAudio.pause();
		errorAudio.currentTime = 0;
		errorAudio.play();
	} else {
		cashAudio.pause();
		cashAudio.currentTime = 0;
		cashAudio.play();
	}
}
