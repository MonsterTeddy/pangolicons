/** @format */

//#region - license

/**
@name Pangolin - icon library
@version
@license MIT
Copyright 2020 Sebastian Heinz
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//#endregion

const Pangolin = {
	/**
	 *
	 * @private @method toSvg - create a svg element from a icon object, that only contains the svg paths
	 *
	 * @param { Object } icon - the the icon to be converted
	 * @param { Object } options - the options to be used to overwrite the standard attributes
	 *
	 * @returns { SVGElement } - The created SVG element
	 */

	_toSvg(icon, options) {
		// create the svg namespace element
		let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

		// merge the provided options and the standard attributes
		let attributes = {};
		Object.assign(
			attributes,
			this._defaultAttributes,
			{ class: `pangolin pangolin-${icon.name}` },
			options
		);

		// create the properties on the svg itself by itterating over the attributes
		for (const att in attributes) {
			if (attributes.hasOwnProperty(att)) {
				const currentAttribute = attributes[att];

				// set attribute
				svg.setAttribute(att, currentAttribute);
			}
		}

		// insert the path
		svg.innerHTML = icon.path;

		// return the craeted svg element
		return svg;
	},

	/**
	 *
	 * @private @method toString - create a svg string
	 *
	 * @param { Object } icon - the the icon to be converted
	 * @param { Object } options - the options to be used to overwrite the standard attributes
	 *
	 * @returns { String } - the svg string
	 */

	_toString(icon, options) {
		return this._toSvg(icon, options).outerHTML;
	},

	/**
	 *
	 * @private @method replace - replaces a html element with the corresponding icon from the library
	 *
	 * @param { HTMLElement } element - the Html element to be replaced
	 * @returns { HTMLElement } - the replaced Html element with the appended icon
	 */

	_replace(element) {
		// create the options
		let options = {};

		// search all attributes and put them into the options object
		Array.from(element.attributes).map((elem) => {
			options[elem.name] = elem.value;
		});

		// create the icon
		let icon = this.icons[element.getAttribute('pangolin')].toSvg(options);

		// append the icon before the ref element
		element.parentElement.insertBefore(icon, element);

		// remove the "i" element
		element.remove();

		// return the icon
		return icon;
	},

	// the standard attributes used to create the svgs

	_defaultAttributes: {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		stroke: 'currentColor',
		fill: 'none',
		'stroke-linecap': 'round',
		'stroke-width': '2',
		'stroke-linejoin': 'round',
		'stroke-align': 'center',
		'stroke-linejoin': 'round',
	},

	icons: {
		//@icons
	},
};

// on window load, run the replace method of the pangolin icons on all i object with the pangolin class
window.addEventListener('load', (ev) => {
	// get all pangolin icons
	let iconElements = document.querySelectorAll('i[pangolin]');

	iconElements.forEach((icon) => Pangolin._replace(icon));
});
