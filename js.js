// task 1
document.getElementById('calc').onclick = function () {
	var year = document.getElementById('year');
	var out = document.getElementById('out');
	if (year.value.length < 3) {
		result = 2017 - 2000 - parseInt(year.value);
	}
	else result = 2017 - parseInt(year.value);
	out.innerHTML = result;
}

// task 2
document.getElementById('find').onclick = function () {
	var first = parseInt(document.getElementById('first').value);
	var second = parseInt(document.getElementById('second').value);
	var outmax = document.getElementById('outmax');
	if (second == first) outmax.innerHTML = 'same';
	else if (first > second) outmax.innerHTML = first;
	else outmax.innerHTML = second;
}

// task 3
function checkQNum(){
	var quaterNum = document.getElementById('qnum').value;
	if (0<quaterNum && quaterNum<21) alert('quter is in the 1st door');
	else if (20<quaterNum && quaterNum<65) alert('quter is in the 2nd door');
	else if (64<quaterNum && quaterNum<81) alert('quter is in the 3rd door');
	else alert('go away! I dont know you!')
}

// task 4

var user1 = 'ivan', user2 = 'ssss', user3 = 'gibs', pass1 = '333', pass2 = '666', pass3 = '0000';
function enter(){
	var buf1 = document.getElementById('log').value;
	var buf2 = document.getElementById('pas').value;
	if (buf1 == user1 && buf2 == pass1)	alert('Welcome');
	else if (buf1 == user2 && buf2 == pass2)	alert('Welcome');
	else if (buf1 == user3 && buf2 == pass3)	alert('Welcome');
	else if (buf1 == '' || buf2 == '') alert('Please enter pass and login');
	else alert('Pass and login are wrong');
}

// task 5
document.getElementById('findMax').onclick = function(){
	var n1 = parseInt(document.getElementById('inpNum1').value);
	var n2 = parseInt(document.getElementById('inpNum2').value);
	var n3 = parseInt(document.getElementById('inpNum3').value);
	document.getElementById('outMax').innerHTML = Math.max(n1, n2, n3);
}


// ???????????????????????????tasks FOR
// 1
for (var i = 0; i <= 101; i++) console.log(i);
// 2
for (var i = 200; i >= 0; i--) console.log(i);
// 3
var sum = 0;
for (var i = 0; i <=100; i++) sum += i;
	console.log('sum: ' + sum);
// 4
document.getElementById('calculate').onclick = function () {
	var num = document.getElementById('num').value;
	var exp = document.getElementById('exp').value;
	var result = 1;
	for (var i = 0; i < exp; i++) result *= num;
		document.getElementById('result').innerHTML = result;
}
// 5
for (var i = 1; i <= 9; i++) console.log(i + '*7=' + 7*i);
// 6
var result = 1;
for (var i = 1; i <= 50; i++) result *= i;
	console.log(result);
// 7
var outResult = '';
for (var i = 1000; i <= 2000; i++) outResult += '&#' + i + ';';
	document.getElementById('symbols').innerHTML = outResult;













