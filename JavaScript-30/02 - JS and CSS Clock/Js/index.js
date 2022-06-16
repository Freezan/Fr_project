~(function() {
	const $needles = document.querySelectorAll('.needle');
	const oClockInset = document.querySelector('.clock-inset');
	const oDayShow = document.getElementsByClassName('clock-dayshow')[0];

	for (var i = 0; i < 60; i++) {
		var oSpan = document.createElement('span');
		/* 因为i是从0~60，而每个刻度的旋转角度360°÷60=6°，所以每个刻度的旋转角度就是i*6°  */
		if (i % 5 === 0) {
			oSpan.classList.add(`time-mark-bold`);
		} else {
			oSpan.classList.add(`time-mark`);
		}
		oSpan.style.transform = `rotate(${i * 6}deg)`;
		oClockInset.appendChild(oSpan);
	}

	var setClock = function() {
		let date = new Date();
		let day = date.getDate();
		let hour = date.getHours();
		let minute = date.getMinutes();
		let second = date.getSeconds();

		let secondNeedleDeg = 360 / 60 * second;
		let mibuteNeedleDeg = 360 / 60 * minute + 6 / 60 * second;
		let hourNeedleDeg = 360 / 12 * hour + 30 / 60 * minute;

		oDayShow.innerHTML = day.toString();
		$needles[0].style.transform = `rotate(${hourNeedleDeg}deg)`;
		$needles[1].style.transform = `rotate(${mibuteNeedleDeg}deg)`;
		$needles[2].style.transform = `rotate(${secondNeedleDeg}deg)`;
	};
	setInterval(setClock, 1000);
	setClock();
})();
