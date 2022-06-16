~(function() {
	//移除点击样式
	function RemoveDownStyle(e) {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove('syllable-with-down');
	}
	const $syllables = Array.from(document.querySelectorAll('.syllable'));
	/* 这里使用了 transitionend , 事件在 CSS 完成过渡后触发。但是注意要再对象的css属性中添加一个transition*/
	$syllables.forEach((item) => item.addEventListener('transitionend', RemoveDownStyle));

	function HitTheKeyBoard(e) {
		const syllable = document.querySelector(`div[data-key="${e.code}"]`);
		const audio = document.querySelector(`audio[data-key="${e.code}"]`);
		if (audio === null) return;
		syllable.classList.add(`syllable-with-down`);
		//每次音频都直接归零
		audio.currentTime = 0;
		audio.play();
	}

	document.body.addEventListener('keydown', HitTheKeyBoard);

	//第二种移除添加点击样式的办法
	/* 	function RemoveDownStyle2(e) {
		const syllable = document.querySelector(`div[data-key="${e.code}"]`);
		if (syllable && syllable.classList.contains('syllable-with-down'))
			syllable.classList.remove(`syllable-with-down`);
	}
	document.body.addEventListener('keyup', RemoveDownStyle2, false); */
})();
