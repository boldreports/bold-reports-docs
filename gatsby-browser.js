let clipboardTimeout;
let toasterTimeout;
exports.onClientEntry = () => {
	window.copyToClipboard = (str, toasterId) => {
		const el = document.createElement('textarea');
		el.className = 'gatsby-code-button-buffer';
		el.innerHTML = str;
		document.body.appendChild(el);

		const range = document.createRange();
		range.selectNode(el);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);

		document.execCommand(`copy`);
		document.activeElement.blur();

		if (clipboardTimeout) {
			clearTimeout(clipboardTimeout);
		}

		clipboardTimeout = setTimeout(() => {
			document.getSelection().removeAllRanges();
			document.body.removeChild(el);
		}, 100);

		if (toasterId) {
			window.showClipboardToaster(toasterId);
		}
	};

	window.showClipboardToaster = (toasterId) => {
		if (toasterTimeout) {
			clearTimeout(toasterTimeout);
		}
		const toasterDiv = document.querySelector(`[data-toaster-id="${toasterId}"]`);
		if (toasterDiv) {
			const copyTooltipDiv = toasterDiv.querySelector('div.copy-button');
			if (copyTooltipDiv) {
				copyTooltipDiv.setAttribute('data-tooltip', 'Copied!');
				copyTooltipDiv.addEventListener('mouseout', function () {
					copyTooltipDiv.setAttribute('data-tooltip', 'Copy');
				});
				toasterTimeout = setTimeout(() => {
					copyTooltipDiv.removeAttribute('data-tooltip');
				}, 2000);
			}
		}
	};
};
