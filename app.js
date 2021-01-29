class Tabs {
	constructor(element) {
		this.element = element;
		this.tabClick = this.element.firstElementChild;
		this.tabLabel = Array.from(this.tabClick.children);
		this.tabData = Array.from(this.element.children).filter(tab => tab.classList.contains('tab-data'));
		this.click();
	}
	click() {
		this.tabClick.addEventListener('click', (e) => {
			if (e.target.classList.contains('tab-label')) {
				if (e.target.classList.contains('active')) return;
				this.tabLabel.forEach(tab => tab.classList.remove('active'))
				e.target.classList.add('active');
				this.tabData.forEach(dataTab => {
					if (dataTab.dataset.for === e.target.dataset.tab) {
						dataTab.classList.add('active');
					} else {
						dataTab.classList.remove('active');
					}
				})
			}
		})
	}
}
window.addEventListener("DOMContentLoaded", function () {
    new Tabs(document.querySelector('#tab-1'));
})