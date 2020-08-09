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
	 * @private @method toSvg - create a svg element from a passed string, that only contains the svg paths
	 *
	 * @param { String } path - the path(s) to be converted
	 * @param { Object } options - the options to be used to overwrite the standard attributes
	 */

	_toSvg(path, options) {
		// create the svg namespace element
		let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

		// merge the provided options and the standard attributes
		let attributes = {};
		Object.assign(attributes, this._defaultAttributes, options);

		// create the properties on the svg itself by itterating over the attributes
		for (const att in attributes) {
			if (attributes.hasOwnProperty(att)) {
				const currentAttribute = attributes[att];

				// set attribute
				svg.setAttribute(att, currentAttribute);
			}
		}

		// insert the path
		svg.innerHTML = path;

		// return the craeted svg element
		return svg;
	},

	/**
	 *
	 * @private @method replace - replaces a html element with the corresponding icon from the library
	 *
	 * @param { HTMLElement } element - the Html element to be replaced
	 * @returns { HTMLElement } - the replaced Html element with the appended icon
	 */

	_replace(element) {},

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
	},

	icons: {
		//@icons
	},
};

// on window load, run the replace method of the pangolin icons on all i object with the pangolin class
window.addEventListener('load', (ev) => {
	// get all pangolin icons
	let iconElements = document.querySelectorAll('i.pangolin');

	iconElements.forEach((icon) => Pangolin._replace(icon));
});
