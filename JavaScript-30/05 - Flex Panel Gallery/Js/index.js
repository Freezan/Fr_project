~(function() {
	const oPanels = document.querySelectorAll('.panel');

	let clickPanel = function() {
		this.classList.toggle(`panel-open`);
	};

	oPanels.forEach((panel) => panel.addEventListener('click', clickPanel));
})();
