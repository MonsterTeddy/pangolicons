/** @format */

let svgs;

const createIcons = (icons) => {
	// get the icon container
	let iconGrid = document.querySelector('.icons-grid');

	// clear the iconGrid
	while (iconGrid.lastElementChild) {
		iconGrid.lastElementChild.remove();
	}

	// function to create the icon from the icon data
	const createIcon = (icon) => {
		// create the card
		let card = document.createElement('a');
		card.className = 'icons-card';
		card.href = `./icons_svg/${icon.name}_s24.svg`;
		card.download = `${icon.name}.svg`;
		card.role = 'button';
		card.target = '_blank';
		card.draggable = false;

		// append the icon
		let iconCon = document.createElement('div');
		iconCon.className = 'icons-iconContainer';
		iconCon.appendChild(icon.toSvg());

		card.appendChild(iconCon);

		// append the name
		let name = document.createElement('span');
		name.textContent = icon.name;

		card.appendChild(name);

		return card;
	};

	for (const icon in icons) {
		if (icons.hasOwnProperty(icon)) {
			const element = icons[icon];

			iconGrid.appendChild(createIcon(element));
		}
	}

	// set the icons to the corresponding elements
	svgs = document.querySelectorAll('.icons-iconContainer svg');
};

window.addEventListener('load', (ev) => {
	createIcons(Pangolin.icons);
});

// get the input element
let input = document.querySelector('#icons-search');

// add an event listener to change icon selection on search
input.addEventListener('input', (ev) => {
	let parsedIcons = {};
	Object.entries(Pangolin.icons).forEach((elem) => {
		if (elem[0].toLowerCase().includes(ev.target.value.toLowerCase())) {
			parsedIcons[elem[0]] = elem[1];
		}
	});

	createIcons(parsedIcons);
});

// style controls
const styleControl = document.querySelector('.icons-style');
const chevron = document.querySelector('.icons-style-chevron');

window.addEventListener('click', (ev) => {
	if (ev.target.closest('.icons-style-control')) {
		styleControl.classList.toggle('icons-style__open');
		chevron.classList.toggle('icons-style-chevron__open');
	}
});

// add the controllers
const strokewidth = document.querySelector('#stroke-width');
const size = document.querySelector('#size');
const hex = document.querySelector('#color-hex');
const picker = document.querySelector('#color-picker');

// get the stylesheet
function getStyleSheet(unique_title) {
	for (var i = 0; i < document.styleSheets.length; i++) {
		var sheet = document.styleSheets[i];
		if (sheet.title == unique_title) {
			return sheet;
		}
	}
}
const styleSheet = getStyleSheet('svg_styles');

strokewidth.addEventListener('input', (ev) => {
	styleSheet.removeRule(0);
	styleSheet.insertRule(
		`.icons-iconContainer svg {stroke-width: ${ev.target.value}}`,
		0
	);
	strokewidth.nextElementSibling.textContent = `${ev.target.value}px`;
});
size.addEventListener('input', (ev) => {
	styleSheet.removeRule(1);
	styleSheet.insertRule(
		`.icons-iconContainer svg {width: ${ev.target.value}px; height: ${ev.target.value}px}`,
		1
	);
	size.nextElementSibling.textContent = `${ev.target.value}px`;
});
hex.addEventListener('input', (ev) => {
	if (ev.target.value.match(/\#{0,1}[a-f0-9]+$/gim)) {
		styleSheet.removeRule(2);

		let color =
			ev.target.value[0] === '#'
				? ev.target.value
				: '#' + ev.target.value;

		styleSheet.insertRule(`.icons-iconContainer svg {color: ${color}}`, 2);
	} else {
		styleSheet.removeRule(2);
		styleSheet.insertRule(
			`.icons-iconContainer svg {color: currentColor}`,
			2
		);
	}
});

picker.addEventListener('input', (ev) => {
	styleSheet.removeRule(2);
	styleSheet.insertRule(
		`.icons-iconContainer svg {color: ${ev.target.value}}`,
		2
	);
	document.querySelector('.color-picker').style.background = ev.target.value;
	hex.value = ev.target.value;
});
