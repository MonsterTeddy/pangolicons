/** @format */

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
