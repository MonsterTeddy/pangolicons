/** @format */

//#region - license

/**
@name Pangolin - icon library
@version 0.1
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

	/**
	 *
	 * @public @method search - method to match the icons name or tags against a searchstring
	 *
	 * @param { String } searchString - the string to match the icons agains
	 * @param { Object } options - set tags to true to search for tags, set title for true to search the title
	 * @returns { Array } - An array containing all icons that are a match
	 */

	search(searchString, options = { tags: true, title: true }) {
		// define the array that holds the found elements
		let foundElements = [];

		// convert the search string to lowercase
		searchString = searchString.toLowerCase();

		// helper function to search the tags
		const searchTags = (tags, string) =>
			tags.filter((tag) => tag.includes(string));

		// start itterating over the icons
		Object.entries(this.icons).map((icon) => {
			if (options.tags) {
				// if the search is looking for tags
				// check if there is an tag in the array that matches the search string
				if (searchTags(icon[1].tags, searchString).length > 0) {
					foundElements.push(icon[1]);
				}
			} else if (!options.tags && options.title) {
				//else check the title for a match with the search string
				if (icon[0].toLowerCase().includes(searchString)) {
					foundElements.push(icon[1]);
				}
			} else {
				// if no mode is specified, warn and return err
				console.warn('Pangolin: No mode for search specified.');
				foundElements.push({
					err: 'No mode specified',
				});
			}
		});

		// return the found elements
		return foundElements;
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
		'airplay': {
			name: 'airplay',
			tags: ['airplay','airplay','display','streaming','apple'],
            path: '<path  d="M5.39,15.25A1.39,1.39,0,0,1,4,13.86V5.64A1.39,1.39,0,0,1,5.39,4.25H18.61A1.39,1.39,0,0,1,20,5.64v8.22a1.39,1.39,0,0,1-1.39,1.39"/><polygon  points="12 13.75 6.8 19.75 17.2 19.75 12 13.75"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'alignCenter': {
			name: 'alignCenter',
			tags: ['alignCenter','align','center','text','editor','format'],
            path: '<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="6.67" y1="17.33" x2="17.33" y2="17.33"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'alignJustifiy': {
			name: 'alignJustifiy',
			tags: ['alignJustifiy','align','justify','text','editor','format'],
            path: '<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="4" y1="17.33" x2="20" y2="17.33"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'alignLeft': {
			name: 'alignLeft',
			tags: ['alignLeft','align','left','text','editor','format'],
            path: '<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="4" y1="17.33" x2="14.67" y2="17.33"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'alignRight': {
			name: 'alignRight',
			tags: ['alignRight','align','right','text','editor','format'],
            path: '<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowDown': {
			name: 'arrowDown',
			tags: ['arrowDown','arrow','down','pointer'],
            path: '<polyline  points="17 13.5 12 18.5 7 13.5 12 18.5 12 5.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowLeft': {
			name: 'arrowLeft',
			tags: ['arrowLeft','arrow','left','pointer'],
            path: '<polyline  points="10.5 17 5.5 12 10.5 7 5.5 12 18.5 12"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowLeftDown': {
			name: 'arrowLeftDown',
			tags: ['arrowLeftDown','arrow','down','left','pointer'],
            path: '<polyline  points="14.47 16.6 7.4 16.6 7.4 9.53 7.4 16.6 16.6 7.4"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowLeftUp': {
			name: 'arrowLeftUp',
			tags: ['arrowLeftUp','arrow','up','left','pointer'],
            path: '<polyline  points="7.4 14.47 7.4 7.4 14.47 7.4 7.4 7.4 16.6 16.6"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowRight': {
			name: 'arrowRight',
			tags: ['arrowRight','arrow','right','pointer'],
            path: '<polyline  points="13.5 7 18.5 12 13.5 17 18.5 12 5.5 12"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowRightDown': {
			name: 'arrowRightDown',
			tags: ['arrowRightDown','arrow','right','down','pointer'],
            path: '<polyline  points="16.6 9.53 16.6 16.6 9.53 16.6 16.6 16.6 7.4 7.4"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowRightUp': {
			name: 'arrowRightUp',
			tags: ['arrowRightUp','arrow','right','up','pointer'],
            path: '<polyline  points="9.53 7.4 16.6 7.4 16.6 14.47 16.6 7.4 7.4 16.6"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'arrowUp': {
			name: 'arrowUp',
			tags: ['arrowUp','arrow','up','pointer'],
            path: '<polyline  points="7 10.5 12 5.5 17 10.5 12 5.5 12 18.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'battery_1': {
			name: 'battery_1',
			tags: ['battery_1','battery','energy','power','powercell'],
            path: '<rect  x="3.5" y="8" width="14" height="8" rx="1.82"/><line  x1="20.5" y1="11" x2="20.5" y2="13"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'battery_2': {
			name: 'battery_2',
			tags: ['battery_2','battery','energy','power','powercell'],
            path: '<rect  x="3.5" y="8" width="14" height="8" rx="1.82"/><line  x1="6.5" y1="11" x2="6.5" y2="13"/><line  x1="10.5" y1="11" x2="10.5" y2="13"/><line  x1="14.5" y1="11" x2="14.5" y2="13"/><line  x1="20.5" y1="11" x2="20.5" y2="13"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'bold': {
			name: 'bold',
			tags: ['bold','bold','editor','font','tool'],
            path: '<path  d="M6.46,4.57A.56.56,0,0,1,7,4h6.27a3.74,3.74,0,0,1,3.41,4,3.74,3.74,0,0,1-3.41,4H6.46Z"/><path  d="M6.46,12.57A.56.56,0,0,1,7,12h7.12a3.74,3.74,0,0,1,3.41,4,3.74,3.74,0,0,1-3.41,4H7a.56.56,0,0,1-.55-.57Z"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronDown': {
			name: 'chevronDown',
			tags: ['chevronDown','chevron','down','arrow'],
            path: '<polyline  points="7.5 9.75 12 14.25 16.5 9.75"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronLeft': {
			name: 'chevronLeft',
			tags: ['chevronLeft','chevron','left','arrow'],
            path: '<polyline  points="14.25 16.5 9.75 12 14.25 7.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronRight': {
			name: 'chevronRight',
			tags: ['chevronRight','chevron','right','arrow'],
            path: '<polyline  points="9.75 16.5 14.25 12 9.75 7.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronUp': {
			name: 'chevronUp',
			tags: ['chevronUp','chevron','up','arrow'],
            path: '<polyline  points="7.5 14.25 12 9.75 16.5 14.25"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronsDown': {
			name: 'chevronsDown',
			tags: ['chevronsDown','chevrons','down','arrows'],
            path: '<polyline  points="7.5 7.25 12 11.75 16.5 7.25"/><polyline  points="7.5 12.25 12 16.75 16.5 12.25"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronsLeft': {
			name: 'chevronsLeft',
			tags: ['chevronsLeft','chevrons','left','arrows'],
            path: '<polyline  points="16.75 16.5 12.25 12 16.75 7.5"/><polyline  points="11.75 16.5 7.25 12 11.75 7.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronsRight': {
			name: 'chevronsRight',
			tags: ['chevronsRight','chevrons','right','arrows'],
            path: '<polyline  points="12.25 16.5 16.75 12 12.25 7.5"/><polyline  points="7.25 16.5 11.75 12 7.25 7.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'chevronsUp': {
			name: 'chevronsUp',
			tags: ['chevronsUp','chevrons','up','arrows'],
            path: '<polyline  points="7.5 16.75 12 12.25 16.5 16.75"/><polyline  points="7.5 11.75 12 7.25 16.5 11.75"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowDown': {
			name: 'circleArrowDown',
			tags: ['circleArrowDown','arrow','down','pointer','circle'],
            path: '<polyline  points="15.26 12.98 12 16.24 8.74 12.98 12 16.24 12 7.76"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowLeft': {
			name: 'circleArrowLeft',
			tags: ['circleArrowLeft','arrow','left','pointer','circle'],
            path: '<polyline  points="11.02 15.26 7.76 12 11.02 8.74 7.76 12 16.24 12"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowLeftDown': {
			name: 'circleArrowLeftDown',
			tags: ['circleArrowLeftDown','arrow','down','left','pointer','circle'],
            path: '<polyline  points="13.62 15 9 15 9 10.38 9 15 15 9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowLeftUp': {
			name: 'circleArrowLeftUp',
			tags: ['circleArrowLeftUp','arrow','up','left','pointer','circle'],
            path: '<polyline  points="9 13.62 9 9 13.62 9 9 9 15 15"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowRight': {
			name: 'circleArrowRight',
			tags: ['circleArrowRight','arrow','right','pointer','circle'],
            path: '<polyline  points="12.98 8.74 16.24 12 12.98 15.26 16.24 12 7.76 12"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowRightDown': {
			name: 'circleArrowRightDown',
			tags: ['circleArrowRightDown','arrow','down','right','pointer','circle'],
            path: '<polyline  points="15 10.38 15 15 10.38 15 15 15 9 9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowRightUp': {
			name: 'circleArrowRightUp',
			tags: ['circleArrowRightUp','arrow','up','right','pointer','circle'],
            path: '<polyline  points="10.38 9 15 9 15 13.62 15 9 9 15"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleArrowUp': {
			name: 'circleArrowUp',
			tags: ['circleArrowUp','arrow','up','pointer','circle'],
            path: '<polyline  points="8.74 11.02 12 7.76 15.26 11.02 12 7.76 12 16.24"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circlePlus': {
			name: 'circlePlus',
			tags: ['circlePlus','circle','plus','add'],
            path: '<line  x1="9" y1="12" x2="15" y2="12"/><line  x1="12" y1="15" x2="12" y2="9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'circleX': {
			name: 'circleX',
			tags: ['circleX','circle','x','cancel','remove'],
            path: '<line  x1="9" y1="15" x2="15" y2="9"/><line  x1="15" y1="15" x2="9" y2="9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'code': {
			name: 'code',
			tags: ['code','code','programmer','brackets'],
            path: '<polyline  points="9 8 5 12 9 16"/><polyline  points="16 8 20 12 16 16"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'codepen': {
			name: 'codepen',
			tags: ['codepen','codepen','','social','network','cube','programmer'],
            path: '<polygon  points="3 9 12 15 21 9 12 3 3 9"/><polygon  points="3 15 12 21 21 15 12 9 3 15"/><line  x1="3" y1="9" x2="3" y2="15"/><line  x1="12" y1="15" x2="12" y2="21"/><line  x1="21" y1="9" x2="21" y2="15"/><line  x1="12" y1="3" x2="12" y2="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'convertToLink': {
			name: 'convertToLink',
			tags: ['convertToLink','link','editor','font','tool','convert'],
            path: '<path  d="M9.94,16.65H8.65A4.67,4.67,0,0,1,4,12H4A4.67,4.67,0,0,1,8.65,7.35H9.94"/><line  x1="8.9" y1="12" x2="15.1" y2="12"/><path  d="M14.06,16.65h1.29A4.67,4.67,0,0,0,20,12h0a4.67,4.67,0,0,0-4.65-4.65H14.06"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'convertToOrderedList': {
			name: 'convertToOrderedList',
			tags: ['convertToOrderedList','orderer','list','editor','convert'],
            path: '<line  x1="9.33" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/><polyline  points="4.7 11.58 5.7 10.75 5.7 13.25"/><path  d="M5.2,17.33c.51,0,.83-.28.83-.62s-.42-.63-.93-.63"/><path  d="M5.17,18.58c.52,0,.93-.28.93-.62s-.41-.63-.93-.63"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'convertToUnorderedList': {
			name: 'convertToUnorderedList',
			tags: ['convertToUnorderedList','unordered','list','editor','convert'],
            path: '<line  x1="9.33" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/><line  x1="5.32" y1="12" x2="5.33" y2="12"/><line  x1="5.32" y1="17.33" x2="5.33" y2="17.33"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'convertToUnstyledList': {
			name: 'convertToUnstyledList',
			tags: ['convertToUnstyledList','list','editor','convert'],
            path: '<line  x1="6.67" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="6.67" y1="17.33" x2="20" y2="17.33"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowDownLeft': {
			name: 'cornerArrowDownLeft',
			tags: ['cornerArrowDownLeft','arrow','left','down','pointer','corner'],
            path: '<path  d="M11.34,19,6.83,14.49,11.34,10,6.83,14.49h7.82A2.52,2.52,0,0,0,17.17,12V5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowDownRight': {
			name: 'cornerArrowDownRight',
			tags: ['cornerArrowDownRight','arrow','down','right','pointer','corner'],
            path: '<path  d="M12.66,19l4.51-4.51L12.66,10l4.51,4.51H9.35A2.52,2.52,0,0,1,6.83,12V5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowLeftDown': {
			name: 'cornerArrowLeftDown',
			tags: ['cornerArrowLeftDown','arrow','left','down','pointer','corner'],
            path: '<path  d="M5,12.66l4.51,4.51L14,12.66,9.51,17.17V9.35A2.52,2.52,0,0,1,12,6.83h7"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowLeftUp': {
			name: 'cornerArrowLeftUp',
			tags: ['cornerArrowLeftUp','arrow','up','left','pointer','corner'],
            path: '<path  d="M5,11.34,9.51,6.83,14,11.34,9.51,6.83v7.82A2.52,2.52,0,0,0,12,17.17h7"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowRightDown': {
			name: 'cornerArrowRightDown',
			tags: ['cornerArrowRightDown','arrow','down','right','pointer','corner'],
            path: '<path  d="M19,12.66l-4.51,4.51L10,12.66l4.51,4.51V9.35A2.52,2.52,0,0,0,12,6.83H5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowRightUp': {
			name: 'cornerArrowRightUp',
			tags: ['cornerArrowRightUp','arrow','up','right','pointer','corner'],
            path: '<path  d="M19,11.34,14.49,6.83,10,11.34l4.51-4.51v7.82A2.52,2.52,0,0,1,12,17.17H5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowUpLeft': {
			name: 'cornerArrowUpLeft',
			tags: ['cornerArrowUpLeft','arrow','up','left','pointer','corner'],
            path: '<path  d="M11.34,5,6.83,9.51,11.34,14,6.83,9.51h7.82A2.52,2.52,0,0,1,17.17,12v7"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'cornerArrowUpRight': {
			name: 'cornerArrowUpRight',
			tags: ['cornerArrowUpRight','arrow','up','right','pointer','corner'],
            path: '<path  d="M12.66,5l4.51,4.51L12.66,14l4.51-4.51H9.35A2.52,2.52,0,0,0,6.83,12v7"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'delimitor': {
			name: 'delimitor',
			tags: ['delimitor','delimitor','hr','spacer'],
            path: '<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="8.92" x2="4" y2="15.08"/><line  x1="20" y1="8.92" x2="20" y2="15.08"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'display': {
			name: 'display',
			tags: ['display','display','monitor','screen'],
            path: '<path  d="M20,14.11a1.39,1.39,0,0,1-1.39,1.39H5.39A1.39,1.39,0,0,1,4,14.11V5.89A1.39,1.39,0,0,1,5.39,4.5H18.61A1.39,1.39,0,0,1,20,5.89Z"/><polygon  points="12 19.5 8 19.5 16 19.5 12 19.5"/><line  x1="12" y1="15.5" x2="12" y2="19.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'dragIndicator': {
			name: 'dragIndicator',
			tags: ['dragIndicator','drag','indicator','drop','grab'],
            path: '<circle  cx="12" cy="7" r="0.5"/><circle  cx="17" cy="12" r="0.5"/><circle  cx="12" cy="17" r="0.5"/><circle  cx="7" cy="12" r="0.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'edit': {
			name: 'edit',
			tags: ['edit','edit','pen','change','mark'],
            path: '<polygon  points="8.64 18.45 4 20 5.55 15.36 16.9 4 20 7.1 8.64 18.45"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'envelope': {
			name: 'envelope',
			tags: ['envelope','envelope','mail','message'],
            path: '<rect  x="4" y="5.5" width="16" height="13" rx="1.9"/><polyline  points="5 6.5 12 12.5 19 6.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'facebook': {
			name: 'facebook',
			tags: ['facebook','facebook','social','network'],
            path: '<path  d="M13.61,21V13.46c0-.16,0-.2.2-.19h2.27c.06,0,.15.05.17-.08.07-.49.15-1,.22-1.47s.16-1.06.25-1.59c0-.2,0-.18-.15-.18H13.82c-.16,0-.22,0-.21-.21,0-.69,0-1.38,0-2.06a1.54,1.54,0,0,1,1.6-1.59h1.53c.09,0,.15,0,.15-.13q0-1.31,0-2.61c0-.1,0-.11-.13-.13a13.07,13.07,0,0,0-2-.22,5.41,5.41,0,0,0-2.42.35,3.59,3.59,0,0,0-2,2.09A6.61,6.61,0,0,0,10,7.74c0,.67,0,1.34,0,2,0,.15,0,.2-.19.2H7.31c-.15,0-.2,0-.2.2,0,1,0,1.95,0,2.92,0,.16,0,.21.2.2H9.76c.18,0,.23,0,.22.22v6.1c0,.47,0,.94,0,1.41Z"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'file': {
			name: 'file',
			tags: ['file','file','editor','add'],
            path: '<path  d="M13.1,4V9.71h5.47L13.1,4H7A1.56,1.56,0,0,0,5.43,5.59V18.41A1.56,1.56,0,0,0,7,20H17a1.56,1.56,0,0,0,1.53-1.59V9.71Z"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'folder': {
			name: 'folder',
			tags: ['folder','folder','file','system'],
            path: '<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 9.53 5.5 12 7.5 20.5 7.5 20.5 18.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'folder_2': {
			name: 'folder_2',
			tags: ['folder_2','folder','file','system'],
            path: '<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 8.53 5.5 11 9.5 20.5 9.5 20.5 18.5"/><path  d="M12,5.5h7.37A1.14,1.14,0,0,1,20.5,6.63V7"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'folder_minus': {
			name: 'folder_minus',
			tags: ['folder_minus','folder','file','system','remove'],
            path: '<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 9.53 5.5 12 7.5 20.5 7.5 20.5 18.5"/><line  x1="10" y1="13" x2="14" y2="13"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'folder_plus': {
			name: 'folder_plus',
			tags: ['folder_plus','folder','file','system','add'],
            path: '<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 9.53 5.5 12 7.5 20.5 7.5 20.5 18.5"/><line  x1="10" y1="13" x2="14" y2="13"/><line  x1="12" y1="15" x2="12" y2="11"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'form': {
			name: 'form',
			tags: ['form','form','file','editor'],
            path: '<path  d="M13.1,4V9.71h5.47L13.1,4H7A1.56,1.56,0,0,0,5.43,5.59V18.41A1.56,1.56,0,0,0,7,20H17a1.56,1.56,0,0,0,1.53-1.59V9.71Z"/><line  x1="9.14" y1="13.14" x2="14.86" y2="13.14"/><line  x1="9.14" y1="16.57" x2="14.86" y2="16.57"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'fullscreen_enter': {
			name: 'fullscreen_enter',
			tags: ['fullscreen_enter','fullscreen','enter','resize'],
            path: '<polyline  points="4.5 7.5 4.5 4.5 7.5 4.5"/><polyline  points="19.5 7.5 19.5 4.5 16.5 4.5"/><polyline  points="4.5 16.5 4.5 19.5 7.5 19.5"/><polyline  points="19.5 16.5 19.5 19.5 16.5 19.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'fullscreen_exit': {
			name: 'fullscreen_exit',
			tags: ['fullscreen_exit','fullscreen','exit','resize'],
            path: '<polyline  points="7.5 4.5 7.5 7.5 4.5 7.5"/><polyline  points="16.5 4.5 16.5 7.5 19.5 7.5"/><polyline  points="7.5 19.5 7.5 16.5 4.5 16.5"/><polyline  points="16.5 19.5 16.5 16.5 19.5 16.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'github': {
			name: 'github',
			tags: ['github','github','social','network','cat','programmer'],
            path: '<path  d="M10,21c.11-.78,0-5.25.38-5.55-2.68-.3-5.5-1.34-5.5-6A4.67,4.67,0,0,1,6.12,6.23,4.37,4.37,0,0,1,6.24,3s1-.33,3.32,1.24a11.4,11.4,0,0,1,6.06,0C17.93,2.7,18.94,3,18.94,3a4.31,4.31,0,0,1,.12,3.2,4.63,4.63,0,0,1,1.25,3.24c0,4.65-2.83,5.67-5.53,6a2.87,2.87,0,0,1,.83,2.24c0,1.62,0,2.92,0,3.32h-6c0-.29,0-1.05,0-2.06-3.37.73-4.08-1.62-4.08-1.62a3.2,3.2,0,0,0-1.34-1.77"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'headingDecrease': {
			name: 'headingDecrease',
			tags: ['headingDecrease','heading','decrease'],
            path: '<polyline  points="17.71 5.14 4 5.14 10.86 5.14 10.86 18.86"/><polyline  points="20 16.57 17.71 18.86 15.43 16.57 17.71 18.86 17.71 10.86"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'headingIncrease': {
			name: 'headingIncrease',
			tags: ['headingIncrease','heading','increase'],
            path: '<polyline  points="17.71 5.14 4 5.14 10.86 5.14 10.86 18.86"/><polyline  points="20 13.14 17.71 10.86 15.43 13.14 17.71 10.86 17.71 18.86"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'heart': {
			name: 'heart',
			tags: ['heart','heart','love','organ '],
            path: '<path  d="M12,8.39A4.33,4.33,0,0,0,7.68,4H7.6c-3,0-4.64,3.78-2.85,6.29L12,20l7.43-9.77C21,7.63,19.3,4.05,16.3,4h-.07A4.34,4.34,0,0,0,12,8.39"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'horizontalMore': {
			name: 'horizontalMore',
			tags: ['horizontalMore','more','menu','points'],
            path: '<rect  x="6.5" y="11.5" width="1" height="1" transform="translate(-5 19) rotate(-90)"/><rect  x="11.5" y="11.5" width="1" height="1" transform="translate(0 24) rotate(-90)"/><rect  x="16.5" y="11.5" width="1" height="1" transform="translate(5 29) rotate(-90)"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'icecream': {
			name: 'icecream',
			tags: ['icecream','ice','icecream','summer','food'],
            path: '<path  d="M6.11,12l7.07-7.07a3.16,3.16,0,0,1,4.43,0l1.48,1.48a3.16,3.16,0,0,1,0,4.43L12,17.89Z"/><line  x1="9.06" y1="14.94" x2="4" y2="20"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'image': {
			name: 'image',
			tags: ['image','image','photo','graphic','editor'],
            path: '<rect  x="4" y="5" width="16" height="14" rx="1.4"/><line  x1="7.43" y1="8" x2="7.43" y2="8"/><line  x1="6.29" y1="19" x2="13.14" y2="13"/><line  x1="18.86" y1="18" x2="13.14" y2="13"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'instagram': {
			name: 'instagram',
			tags: ['instagram','instagram','social','network','photos'],
            path: '<rect  x="3" y="3" width="18" height="18" rx="3.73"/><circle  cx="12" cy="12" r="4"/><circle  cx="17.5" cy="6.5" r="0.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'italic': {
			name: 'italic',
			tags: ['italic','italic','editor','font','tool'],
            path: '<line  x1="8.02" y1="4" x2="19.38" y2="4"/><line  x1="13.7" y1="4" x2="10.3" y2="20"/><line  x1="4.62" y1="20" x2="15.98" y2="20"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'key': {
			name: 'key',
			tags: ['key','key','lock','secret','login'],
            path: '<rect  x="3.95" y="12.32" width="7.06" height="7.06" rx="3.53" transform="translate(13.4 -0.64) rotate(45)"/><line  x1="10.8" y1="12.52" x2="18.29" y2="5.04"/><polyline  points="17.46 5.87 19.95 8.37 17.46 10.86 15.79 9.2"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'list': {
			name: 'list',
			tags: ['list','list','editor'],
            path: '<line  x1="7.43" y1="12" x2="20" y2="12"/><line  x1="7.43" y1="6.29" x2="20" y2="6.29"/><line  x1="7.43" y1="17.71" x2="20" y2="17.71"/><line  x1="4" y1="12" x2="4.11" y2="12"/><line  x1="4" y1="6.29" x2="4.11" y2="6.29"/><line  x1="4" y1="17.71" x2="4.09" y2="17.71"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'location': {
			name: 'location',
			tags: ['location','location','places','map','pin'],
            path: '<circle  cx="12" cy="9.26" r="2.35"/><path  d="M17.21,12.89A6.39,6.39,0,0,0,12.58,3L12,3l-.58,0a6.39,6.39,0,0,0-4.63,9.87L12,21Z"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'login': {
			name: 'login',
			tags: ['login','login','door','enter'],
            path: '<path  d="M13.85,3h3.3A2.73,2.73,0,0,1,20,5.57V18.43A2.73,2.73,0,0,1,17.15,21h-3.3"/><polyline  points="11.5 16 14 12 11.5 8 14 12 4 12"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'logout_1': {
			name: 'logout_1',
			tags: ['logout_1','logout','door','exit'],
            path: '<path  d="M10.15,3H6.85A2.73,2.73,0,0,0,4,5.57V18.43A2.73,2.73,0,0,0,6.85,21h3.3"/><polyline  points="17.5 16 20 12 17.5 8 20 12 10 12"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'logout_2': {
			name: 'logout_2',
			tags: ['logout_2','logout','door','exit'],
            path: '<path  d="M13.85,3h3.3A2.73,2.73,0,0,1,20,5.57V18.43A2.73,2.73,0,0,1,17.15,21h-3.3"/><polyline  points="6.5 16 4 12 6.5 8 4 12 14 12"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'marker': {
			name: 'marker',
			tags: ['marker','marker','editor','font','tool'],
            path: '<polygon  points="9.13 18.8 4 18.8 17.28 5.2 20 7.92 9.13 18.8"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'mug': {
			name: 'mug',
			tags: ['mug','mug','food','drink'],
            path: '<path  d="M15.85,4V15c0,2.75-1.8,5-4,5H8c-2.2,0-4-2.25-4-5V4"/><rect  x="16.44" y="7.03" width="3.56" height="7.41" rx="1.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'pangolin': {
			name: 'pangolin',
			tags: ['pangolin','pangolin'],
            path: '<path  d="M7,5s6,1,3,3L3,12a9,9,0,1,1,9,9H7l9-5"/><path  d="M12,10s-4,3-3,5c0,0,3-2,5-1"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'pause': {
			name: 'pause',
			tags: ['pause','pause','media','control','stop'],
            path: '<line  x1="9" y1="6.5" x2="9" y2="17.5"/><line  x1="15" y1="6.5" x2="15" y2="17.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'play': {
			name: 'play',
			tags: ['play','play','media','control','start','continue'],
            path: '<polygon  points="7.5 6.5 7.5 17.5 16.5 12 7.5 6.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'plus': {
			name: 'plus',
			tags: ['plus','plus','add'],
            path: '<line  x1="5" y1="12" x2="19" y2="12"/><line  x1="12" y1="19" x2="12" y2="5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'resizeImage': {
			name: 'resizeImage',
			tags: ['resizeImage','resize','image','photo','editor'],
            path: '<rect  x="4" y="4" width="16" height="16" rx="1.4"/><polyline  points="7.43 10.86 7.43 7.43 10.86 7.43"/><polyline  points="16.57 13.14 16.57 16.57 13.14 16.57"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'search': {
			name: 'search',
			tags: ['search','search','lookingglass','look','explore'],
            path: '<circle  cx="14.2" cy="9.8" r="5.5"/><path  d="M10,14,4.3,19.7Z"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'sidebar': {
			name: 'sidebar',
			tags: ['sidebar','sidebar','panel','format'],
            path: '<rect  x="4" y="5" width="16" height="14" rx="1.4"/><line  x1="10" y1="19" x2="10" y2="5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'snpachat': {
			name: 'snpachat',
			tags: ['snpachat','snapchat','social','network','ghost'],
            path: '<path  d="M20.74,16.83c-3.15-1.53-3.66-3.89-3.68-4.06a.55.55,0,0,1,.18-.6c.22-.2,1.22-.82,1.5-1,.46-.32.66-.64.51-1a.62.62,0,0,0-.62-.38,1,1,0,0,0-.25,0c-.51.11-1,.36-1.28.43l-.1,0c-.16,0-.21-.07-.2-.25a18.15,18.15,0,0,0,0-2.63,4.18,4.18,0,0,0-1.1-2.68A4.86,4.86,0,0,0,12,3.11,4.86,4.86,0,0,0,8.27,4.66a4.18,4.18,0,0,0-1.1,2.67A18.12,18.12,0,0,0,7.2,10c0,.18,0,.25-.2.25H6.9c-.28-.07-.77-.32-1.28-.43a1,1,0,0,0-.25,0,.6.6,0,0,0-.62.37c-.15.4,0,.72.51,1,.28.19,1.28.81,1.5,1a.54.54,0,0,1,.18.59c0,.18-.53,2.54-3.68,4.07-.19.09-.5.27.05.58.87.48,1.45.43,1.9.72s.16.78.44,1,1.35,0,2.65.41c1.1.36,1.76,1.38,3.7,1.38s2.62-1,3.7-1.38c1.3-.43,2.31-.17,2.65-.41s.06-.72.44-1,1-.24,1.9-.72C21.24,17.11,20.93,16.92,20.74,16.83Z"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'squarePlus': {
			name: 'squarePlus',
			tags: ['squarePlus','square','plus','add'],
            path: '<line  x1="9" y1="12" x2="15" y2="12"/><line  x1="12" y1="15" x2="12" y2="9"/><rect  x="3" y="3" width="18" height="18" rx="3"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'squareX': {
			name: 'squareX',
			tags: ['squareX','square','x','remove','cancel'],
            path: '<rect  x="3" y="3" width="18" height="18" rx="3"/><line  x1="9" y1="15" x2="15" y2="9"/><line  x1="15" y1="15" x2="9" y2="9"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'strikethrough': {
			name: 'strikethrough',
			tags: ['strikethrough','strikethrough','editor','font','tool'],
            path: '<path  d="M10.77,11.73c-.55-.25-3.08-1.63-3.08-3.8A4.13,4.13,0,0,1,12,4a4.13,4.13,0,0,1,4.31,3.93"/><line  x1="4.62" y1="11.87" x2="19.38" y2="11.87"/><path  d="M13.57,12.27c.55.25,3.08,1.63,3.08,3.8A4.13,4.13,0,0,1,12.34,20,4.12,4.12,0,0,1,8,16.07"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'text': {
			name: 'text',
			tags: ['text','text','paragraph','editor'],
            path: '<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.29" x2="20" y2="6.29"/><line  x1="4" y1="17.71" x2="16.57" y2="17.71"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'title': {
			name: 'title',
			tags: ['title','title','heading','editor'],
            path: '<polyline  points="20 4 4 4 12 4 12 20"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'trashcan_1': {
			name: 'trashcan_1',
			tags: ['trashcan_1','trashcan','trash','waste','bin'],
            path: '<path  d="M6.5,7.19v11A1.86,1.86,0,0,0,8.35,20h7.3a1.86,1.86,0,0,0,1.85-1.85v-11"/><line  x1="5.59" y1="7.18" x2="18.41" y2="7.18"/><path  d="M9.07,6.83c0-.6.49-2.83,1.1-2.83h3.66c.61,0,1.1,2.23,1.1,2.83"/><line  x1="10.17" y1="10" x2="10.17" y2="16.91"/><line  x1="13.83" y1="10" x2="13.83" y2="16.91"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'trashcan_2': {
			name: 'trashcan_2',
			tags: ['trashcan_2','trashcan','trash','waste','bin'],
            path: '<path  d="M6.5,7.19v11A1.86,1.86,0,0,0,8.35,20h7.3a1.86,1.86,0,0,0,1.85-1.85v-11"/><line  x1="5.59" y1="7.18" x2="18.41" y2="7.18"/><path  d="M9.07,6.83c0-.6.49-2.83,1.1-2.83h3.66c.61,0,1.1,2.23,1.1,2.83"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'twitch': {
			name: 'twitch',
			tags: ['twitch','twitch','social','network','streaming'],
            path: '<path  d="M7.86,21V17.73H3.71a.46.46,0,0,1-.46-.46V3.46A.47.47,0,0,1,3.71,3H20.29a.47.47,0,0,1,.46.46V13.59a.43.43,0,0,1-.14.32l-3.68,3.68a.45.45,0,0,1-.33.14H11.27Z"/><line  x1="14.76" y1="7.03" x2="14.76" y2="12.78"/><line  x1="9.24" y1="7.03" x2="9.24" y2="12.78"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'twitter': {
			name: 'twitter',
			tags: ['twitter','twitter','social','network','tweet','bird'],
            path: '<path  d="M10.81,15.27A16.26,16.26,0,0,1,3.9,17.88a6.79,6.79,0,0,1-.9-.05A10.8,10.8,0,0,0,19.62,8.72L21,5s-1.55.5-2.41.67A3.81,3.81,0,0,0,12,8.27a4.14,4.14,0,0,0,.1.87,10.77,10.77,0,0,1-7.83-4,3.86,3.86,0,0,0-.51,1.91c0,1.32.46,6.55,7,8.19"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'underline': {
			name: 'underline',
			tags: ['underline','underline','editor','font','tool'],
            path: '<path  d="M18.15,4v7.47C18.15,15,15.4,16.8,12,16.8h0c-3.4,0-6.15-1.8-6.15-5.33V4"/><line  x1="5.85" y1="20" x2="18.15" y2="20"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'user': {
			name: 'user',
			tags: ['user','user','person','avatar','head','body'],
            path: '<path  d="M5.16,19.5V16.84A1.73,1.73,0,0,1,6.75,15h10.5a1.73,1.73,0,0,1,1.59,1.82V19.5"/><circle  cx="12" cy="8.18" r="3.68"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'userAdd': {
			name: 'userAdd',
			tags: ['userAdd','user','person','avatar','head','body','add'],
            path: '<path  d="M3.58,19.5V16.84A1.72,1.72,0,0,1,5.17,15h10.5a1.72,1.72,0,0,1,1.58,1.82V19.5"/><circle  cx="10.42" cy="8.18" r="3.68"/><line  x1="16.42" y1="11" x2="20.42" y2="11"/><line  x1="18.42" y1="9" x2="18.42" y2="13"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'userMultiple': {
			name: 'userMultiple',
			tags: ['userMultiple','user','person','avatar','head','body'],
            path: '<path  d="M3,19.41V16.78A1.7,1.7,0,0,1,4.56,15H14.94a1.7,1.7,0,0,1,1.56,1.8v2.63"/><circle  cx="9.75" cy="8.23" r="3.64"/><path  d="M19.44,15A1.7,1.7,0,0,1,21,16.78v2.63"/><path  d="M15.31,4.59a3.64,3.64,0,0,1,0,7.27"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'userRemove': {
			name: 'userRemove',
			tags: ['userRemove','user','person','avatar','head','body','remove'],
            path: '<path  d="M3.58,19.5V16.84A1.72,1.72,0,0,1,5.17,15h10.5a1.72,1.72,0,0,1,1.58,1.82V19.5"/><circle  cx="10.42" cy="8.18" r="3.68"/><line  x1="16.42" y1="11" x2="20.42" y2="11"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'verticalMore': {
			name: 'verticalMore',
			tags: ['verticalMore','more','menu','points'],
            path: '<rect  x="11.5" y="6.5" width="1" height="1"/><rect  x="11.5" y="11.5" width="1" height="1"/><rect  x="11.5" y="16.5" width="1" height="1"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'volume_0': {
			name: 'volume_0',
			tags: ['volume_0','volume','speaker','sound','quiet'],
            path: '<rect  x="8.5" y="9.5" width="3" height="5"/><polygon  points="15.5 5.5 11.5 9.5 11.5 14.5 15.5 18.5 15.5 5.5"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'volume_1': {
			name: 'volume_1',
			tags: ['volume_1','volume','speaker','sound'],
            path: '<rect  x="6.63" y="10.37" width="3" height="5"/><polygon  points="13.63 6.38 9.63 10.38 9.63 15.38 13.63 19.38 13.63 6.38"/><path  d="M16.62,9.87a6.37,6.37,0,0,1,0,6"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'volume_2': {
			name: 'volume_2',
			tags: ['volume_2','volume','speaker','sound','loud'],
            path: '<rect  x="5" y="9.5" width="3" height="5"/><polygon  points="12 5.5 8 9.5 8 14.5 12 18.5 12 5.5"/><path  d="M15,9a6.38,6.38,0,0,1,0,6"/><path  d="M18,8a8.52,8.52,0,0,1,0,8"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'volume_x': {
			name: 'volume_x',
			tags: ['volume_x','volume','speaker','sound','mute'],
            path: '<rect  x="4.94" y="9.5" width="3" height="5"/><polygon  points="11.94 5.5 7.94 9.5 7.94 14.5 11.94 18.5 11.94 5.5"/><line  x1="14.82" y1="14.12" x2="19.06" y2="9.88"/><line  x1="14.82" y1="9.88" x2="19.06" y2="14.12"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'x': {
			name: 'x',
			tags: ['x','x','remove','cancel'],
            path: '<line  x1="6" y1="18" x2="18" y2="6"/><line  x1="18" y1="18" x2="6" y2="6"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },'youtube': {
			name: 'youtube',
			tags: ['youtube','youtube','social','network','videos','streaming','play'],
            path: '<path  d="M21,19A77,77,0,0,1,3,19,27.54,27.54,0,0,1,3,5,77,77,0,0,1,21,5h0A27.54,27.54,0,0,1,21,19Z"/><polyline  points="10 9.59 14 12 10 14.41 10 9.59"/>',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },
	},
};

// on window load, run the replace method of the pangolin icons on all i object with the pangolin class
window.addEventListener('load', (ev) => {
	// get all pangolin icons
	let iconElements = document.querySelectorAll('i[pangolin]');

	iconElements.forEach((icon) => Pangolin._replace(icon));
});
