/** @format */

const Pangolin = {
	/**
	 *
	 * @private @method toSvg - create a svg element from a passed string, that only contains the svg paths
	 *
	 * @param { String } path - the path(s) to be converted
	 * @param { Icon.icon } options - the options to be used to overwrite the standard attributes
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
		airplay: {
			name: 'airplay',
			path:
				'<path  d="M5.39,15.25A1.39,1.39,0,0,1,4,13.86V5.64A1.39,1.39,0,0,1,5.39,4.25H18.61A1.39,1.39,0,0,1,20,5.64v8.22a1.39,1.39,0,0,1-1.39,1.39"/><polygon  points="12 13.75 6.8 19.75 17.2 19.75 12 13.75"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		alignCenter: {
			name: 'alignCenter',
			path:
				'<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="6.67" y1="17.33" x2="17.33" y2="17.33"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		alignJustifiy: {
			name: 'alignJustifiy',
			path:
				'<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="4" y1="17.33" x2="20" y2="17.33"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		alignLeft: {
			name: 'alignLeft',
			path:
				'<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="4" y1="17.33" x2="14.67" y2="17.33"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		alignRight: {
			name: 'alignRight',
			path:
				'<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowDown: {
			name: 'arrowDown',
			path: '<polyline  points="17 13.5 12 18.5 7 13.5 12 18.5 12 5.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowLeftDown: {
			name: 'arrowLeftDown',
			path:
				'<polyline  points="14.47 16.6 7.4 16.6 7.4 9.53 7.4 16.6 16.6 7.4"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowLeftUp: {
			name: 'arrowLeftUp',
			path:
				'<polyline  points="7.4 14.47 7.4 7.4 14.47 7.4 7.4 7.4 16.6 16.6"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowLeft: {
			name: 'arrowLeft',
			path: '<polyline  points="10.5 17 5.5 12 10.5 7 5.5 12 18.5 12"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowRightDown: {
			name: 'arrowRightDown',
			path:
				'<polyline  points="16.6 9.53 16.6 16.6 9.53 16.6 16.6 16.6 7.4 7.4"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowRightUp: {
			name: 'arrowRightUp',
			path:
				'<polyline  points="9.53 7.4 16.6 7.4 16.6 14.47 16.6 7.4 7.4 16.6"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowRight: {
			name: 'arrowRight',
			path: '<polyline  points="13.5 7 18.5 12 13.5 17 18.5 12 5.5 12"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		arrowUp: {
			name: 'arrowUp',
			path: '<polyline  points="7 10.5 12 5.5 17 10.5 12 5.5 12 18.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		battery_1: {
			name: 'battery_1',
			path:
				'<rect  x="3.5" y="8" width="14" height="8" rx="1.82"/><line  x1="20.5" y1="11" x2="20.5" y2="13"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		battery_2: {
			name: 'battery_2',
			path:
				'<rect  x="3.5" y="8" width="14" height="8" rx="1.82"/><line  x1="6.5" y1="11" x2="6.5" y2="13"/><line  x1="10.5" y1="11" x2="10.5" y2="13"/><line  x1="14.5" y1="11" x2="14.5" y2="13"/><line  x1="20.5" y1="11" x2="20.5" y2="13"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		bold: {
			name: 'bold',
			path:
				'<path  d="M6.46,4.57A.56.56,0,0,1,7,4h6.27a3.74,3.74,0,0,1,3.41,4,3.74,3.74,0,0,1-3.41,4H6.46Z"/><path  d="M6.46,12.57A.56.56,0,0,1,7,12h7.12a3.74,3.74,0,0,1,3.41,4,3.74,3.74,0,0,1-3.41,4H7a.56.56,0,0,1-.55-.57Z"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronDown: {
			name: 'chevronDown',
			path: '<polyline  points="7.5 9.75 12 14.25 16.5 9.75"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronLeft: {
			name: 'chevronLeft',
			path: '<polyline  points="14.25 16.5 9.75 12 14.25 7.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronRight: {
			name: 'chevronRight',
			path: '<polyline  points="9.75 16.5 14.25 12 9.75 7.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronUp: {
			name: 'chevronUp',
			path: '<polyline  points="7.5 14.25 12 9.75 16.5 14.25"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronsDown: {
			name: 'chevronsDown',
			path:
				'<polyline  points="7.5 7.25 12 11.75 16.5 7.25"/><polyline  points="7.5 12.25 12 16.75 16.5 12.25"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronsLeft: {
			name: 'chevronsLeft',
			path:
				'<polyline  points="16.75 16.5 12.25 12 16.75 7.5"/><polyline  points="11.75 16.5 7.25 12 11.75 7.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronsRight: {
			name: 'chevronsRight',
			path:
				'<polyline  points="12.25 16.5 16.75 12 12.25 7.5"/><polyline  points="7.25 16.5 11.75 12 7.25 7.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		chevronsUp: {
			name: 'chevronsUp',
			path:
				'<polyline  points="7.5 16.75 12 12.25 16.5 16.75"/><polyline  points="7.5 11.75 12 7.25 16.5 11.75"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowDown: {
			name: 'circleArrowDown',
			path:
				'<polyline  points="15.26 12.98 12 16.24 8.74 12.98 12 16.24 12 7.76"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowLeftDown: {
			name: 'circleArrowLeftDown',
			path:
				'<polyline  points="13.62 15 9 15 9 10.38 9 15 15 9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowLeftUp: {
			name: 'circleArrowLeftUp',
			path:
				'<polyline  points="9 13.62 9 9 13.62 9 9 9 15 15"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowLeft: {
			name: 'circleArrowLeft',
			path:
				'<polyline  points="11.02 15.26 7.76 12 11.02 8.74 7.76 12 16.24 12"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowRightDown: {
			name: 'circleArrowRightDown',
			path:
				'<polyline  points="15 10.38 15 15 10.38 15 15 15 9 9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowRightUp: {
			name: 'circleArrowRightUp',
			path:
				'<polyline  points="10.38 9 15 9 15 13.62 15 9 9 15"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowRight: {
			name: 'circleArrowRight',
			path:
				'<polyline  points="12.98 8.74 16.24 12 12.98 15.26 16.24 12 7.76 12"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleArrowUp: {
			name: 'circleArrowUp',
			path:
				'<polyline  points="8.74 11.02 12 7.76 15.26 11.02 12 7.76 12 16.24"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circlePlus: {
			name: 'circlePlus',
			path:
				'<line  x1="9" y1="12" x2="15" y2="12"/><line  x1="12" y1="15" x2="12" y2="9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		circleX: {
			name: 'circleX',
			path:
				'<line  x1="9" y1="15" x2="15" y2="9"/><line  x1="15" y1="15" x2="9" y2="9"/><circle  cx="12" cy="12" r="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		code: {
			name: 'code',
			path:
				'<polyline  points="9 8 5 12 9 16"/><polyline  points="16 8 20 12 16 16"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		codepen: {
			name: 'codepen',
			path:
				'<polygon  points="3 9 12 15 21 9 12 3 3 9"/><polygon  points="3 15 12 21 21 15 12 9 3 15"/><line  x1="3" y1="9" x2="3" y2="15"/><line  x1="12" y1="15" x2="12" y2="21"/><line  x1="21" y1="9" x2="21" y2="15"/><line  x1="12" y1="3" x2="12" y2="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		convertToLink: {
			name: 'convertToLink',
			path:
				'<path  d="M9.94,16.65H8.65A4.67,4.67,0,0,1,4,12H4A4.67,4.67,0,0,1,8.65,7.35H9.94"/><line  x1="8.9" y1="12" x2="15.1" y2="12"/><path  d="M14.06,16.65h1.29A4.67,4.67,0,0,0,20,12h0a4.67,4.67,0,0,0-4.65-4.65H14.06"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		convertToOrderedList: {
			name: 'convertToOrderedList',
			path:
				'<line  x1="9.33" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/><polyline  points="4.7 11.58 5.7 10.75 5.7 13.25"/><path  d="M5.2,17.33c.51,0,.83-.28.83-.62s-.42-.63-.93-.63"/><path  d="M5.17,18.58c.52,0,.93-.28.93-.62s-.41-.63-.93-.63"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		convertToUnorderedList: {
			name: 'convertToUnorderedList',
			path:
				'<line  x1="9.33" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="9.33" y1="17.33" x2="20" y2="17.33"/><line  x1="5.32" y1="12" x2="5.33" y2="12"/><line  x1="5.32" y1="17.33" x2="5.33" y2="17.33"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		convertToUnstyledList: {
			name: 'convertToUnstyledList',
			path:
				'<line  x1="6.67" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.67" x2="20" y2="6.67"/><line  x1="6.67" y1="17.33" x2="20" y2="17.33"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowDownLeft: {
			name: 'cornerArrowDownLeft',
			path:
				'<path  d="M11.34,19,6.83,14.49,11.34,10,6.83,14.49h7.82A2.52,2.52,0,0,0,17.17,12V5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowDownRight: {
			name: 'cornerArrowDownRight',
			path:
				'<path  d="M12.66,19l4.51-4.51L12.66,10l4.51,4.51H9.35A2.52,2.52,0,0,1,6.83,12V5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowLeftDown: {
			name: 'cornerArrowLeftDown',
			path:
				'<path  d="M5,12.66l4.51,4.51L14,12.66,9.51,17.17V9.35A2.52,2.52,0,0,1,12,6.83h7"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowLeftUp: {
			name: 'cornerArrowLeftUp',
			path:
				'<path  d="M5,11.34,9.51,6.83,14,11.34,9.51,6.83v7.82A2.52,2.52,0,0,0,12,17.17h7"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowRightDown: {
			name: 'cornerArrowRightDown',
			path:
				'<path  d="M19,12.66l-4.51,4.51L10,12.66l4.51,4.51V9.35A2.52,2.52,0,0,0,12,6.83H5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowRightUp: {
			name: 'cornerArrowRightUp',
			path:
				'<path  d="M19,11.34,14.49,6.83,10,11.34l4.51-4.51v7.82A2.52,2.52,0,0,1,12,17.17H5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowUpLeft: {
			name: 'cornerArrowUpLeft',
			path:
				'<path  d="M11.34,5,6.83,9.51,11.34,14,6.83,9.51h7.82A2.52,2.52,0,0,1,17.17,12v7"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		cornerArrowUpRight: {
			name: 'cornerArrowUpRight',
			path:
				'<path  d="M12.66,5l4.51,4.51L12.66,14l4.51-4.51H9.35A2.52,2.52,0,0,0,6.83,12v7"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		delimitor: {
			name: 'delimitor',
			path:
				'<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="8.92" x2="4" y2="15.08"/><line  x1="20" y1="8.92" x2="20" y2="15.08"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		display: {
			name: 'display',
			path:
				'<path  d="M20,14.11a1.39,1.39,0,0,1-1.39,1.39H5.39A1.39,1.39,0,0,1,4,14.11V5.89A1.39,1.39,0,0,1,5.39,4.5H18.61A1.39,1.39,0,0,1,20,5.89Z"/><polygon  points="12 19.5 8 19.5 16 19.5 12 19.5"/><line  x1="12" y1="15.5" x2="12" y2="19.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		dragIndicator: {
			name: 'dragIndicator',
			path:
				'<circle  cx="12" cy="7" r="0.5"/><circle  cx="17" cy="12" r="0.5"/><circle  cx="12" cy="17" r="0.5"/><circle  cx="7" cy="12" r="0.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		edit: {
			name: 'edit',
			path:
				'<polygon  points="8.64 18.45 4 20 5.55 15.36 16.9 4 20 7.1 8.64 18.45"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		envelope: {
			name: 'envelope',
			path:
				'<rect  x="4" y="5.5" width="16" height="13" rx="1.9"/><polyline  points="5 6.5 12 12.5 19 6.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		facebook: {
			name: 'facebook',
			path:
				'<path  d="M13.61,21V13.46c0-.16,0-.2.2-.19h2.27c.06,0,.15.05.17-.08.07-.49.15-1,.22-1.47s.16-1.06.25-1.59c0-.2,0-.18-.15-.18H13.82c-.16,0-.22,0-.21-.21,0-.69,0-1.38,0-2.06a1.54,1.54,0,0,1,1.6-1.59h1.53c.09,0,.15,0,.15-.13q0-1.31,0-2.61c0-.1,0-.11-.13-.13a13.07,13.07,0,0,0-2-.22,5.41,5.41,0,0,0-2.42.35,3.59,3.59,0,0,0-2,2.09A6.61,6.61,0,0,0,10,7.74c0,.67,0,1.34,0,2,0,.15,0,.2-.19.2H7.31c-.15,0-.2,0-.2.2,0,1,0,1.95,0,2.92,0,.16,0,.21.2.2H9.76c.18,0,.23,0,.22.22v6.1c0,.47,0,.94,0,1.41Z"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		file: {
			name: 'file',
			path:
				'<path  d="M13.1,4V9.71h5.47L13.1,4H7A1.56,1.56,0,0,0,5.43,5.59V18.41A1.56,1.56,0,0,0,7,20H17a1.56,1.56,0,0,0,1.53-1.59V9.71Z"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		folder_2: {
			name: 'folder_2',
			path:
				'<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 8.53 5.5 11 9.5 20.5 9.5 20.5 18.5"/><path  d="M12,5.5h7.37A1.14,1.14,0,0,1,20.5,6.63V7"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		folder_minus: {
			name: 'folder_minus',
			path:
				'<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 9.53 5.5 12 7.5 20.5 7.5 20.5 18.5"/><line  x1="10" y1="13" x2="14" y2="13"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		folder_plus: {
			name: 'folder_plus',
			path:
				'<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 9.53 5.5 12 7.5 20.5 7.5 20.5 18.5"/><line  x1="10" y1="13" x2="14" y2="13"/><line  x1="12" y1="15" x2="12" y2="11"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		folder: {
			name: 'folder',
			path:
				'<polygon  points="20.5 18.5 3.5 18.5 3.5 5.5 9.53 5.5 12 7.5 20.5 7.5 20.5 18.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		form: {
			name: 'form',
			path:
				'<path  d="M13.1,4V9.71h5.47L13.1,4H7A1.56,1.56,0,0,0,5.43,5.59V18.41A1.56,1.56,0,0,0,7,20H17a1.56,1.56,0,0,0,1.53-1.59V9.71Z"/><line  x1="9.14" y1="13.14" x2="14.86" y2="13.14"/><line  x1="9.14" y1="16.57" x2="14.86" y2="16.57"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		fullscreen_enter: {
			name: 'fullscreen_enter',
			path:
				'<polyline  points="4.5 7.5 4.5 4.5 7.5 4.5"/><polyline  points="19.5 7.5 19.5 4.5 16.5 4.5"/><polyline  points="4.5 16.5 4.5 19.5 7.5 19.5"/><polyline  points="19.5 16.5 19.5 19.5 16.5 19.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		fullscreen_exit: {
			name: 'fullscreen_exit',
			path:
				'<polyline  points="7.5 4.5 7.5 7.5 4.5 7.5"/><polyline  points="16.5 4.5 16.5 7.5 19.5 7.5"/><polyline  points="7.5 19.5 7.5 16.5 4.5 16.5"/><polyline  points="16.5 19.5 16.5 16.5 19.5 16.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		github: {
			name: 'github',
			path:
				'<path  d="M10,21c.11-.78,0-5.25.38-5.55-2.68-.3-5.5-1.34-5.5-6A4.67,4.67,0,0,1,6.12,6.23,4.37,4.37,0,0,1,6.24,3s1-.33,3.32,1.24a11.4,11.4,0,0,1,6.06,0C17.93,2.7,18.94,3,18.94,3a4.31,4.31,0,0,1,.12,3.2,4.63,4.63,0,0,1,1.25,3.24c0,4.65-2.83,5.67-5.53,6a2.87,2.87,0,0,1,.83,2.24c0,1.62,0,2.92,0,3.32h-6c0-.29,0-1.05,0-2.06-3.37.73-4.08-1.62-4.08-1.62a3.2,3.2,0,0,0-1.34-1.77"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		headingDecrease: {
			name: 'headingDecrease',
			path:
				'<polyline  points="17.71 5.14 4 5.14 10.86 5.14 10.86 18.86"/><polyline  points="20 16.57 17.71 18.86 15.43 16.57 17.71 18.86 17.71 10.86"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		headingIncrease: {
			name: 'headingIncrease',
			path:
				'<polyline  points="17.71 5.14 4 5.14 10.86 5.14 10.86 18.86"/><polyline  points="20 13.14 17.71 10.86 15.43 13.14 17.71 10.86 17.71 18.86"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		heart: {
			name: 'heart',
			path:
				'<path  d="M12,8.39A4.33,4.33,0,0,0,7.68,4H7.6c-3,0-4.64,3.78-2.85,6.29L12,20l7.43-9.77C21,7.63,19.3,4.05,16.3,4h-.07A4.34,4.34,0,0,0,12,8.39"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		horizontalMore: {
			name: 'horizontalMore',
			path:
				'<rect  x="6.5" y="11.5" width="1" height="1" transform="translate(-5 19) rotate(-90)"/><rect  x="11.5" y="11.5" width="1" height="1" transform="translate(0 24) rotate(-90)"/><rect  x="16.5" y="11.5" width="1" height="1" transform="translate(5 29) rotate(-90)"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		icecream: {
			name: 'icecream',
			path:
				'<path  d="M6.11,12l7.07-7.07a3.16,3.16,0,0,1,4.43,0l1.48,1.48a3.16,3.16,0,0,1,0,4.43L12,17.89Z"/><line  x1="9.06" y1="14.94" x2="4" y2="20"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		image: {
			name: 'image',
			path:
				'<rect  x="4" y="5" width="16" height="14" rx="1.4"/><line  x1="7.43" y1="8" x2="7.43" y2="8"/><line  x1="6.29" y1="19" x2="13.14" y2="13"/><line  x1="18.86" y1="18" x2="13.14" y2="13"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		instagram: {
			name: 'instagram',
			path:
				'<rect  x="3" y="3" width="18" height="18" rx="3.73"/><circle  cx="12" cy="12" r="4"/><circle  cx="17.5" cy="6.5" r="0.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		italic: {
			name: 'italic',
			path:
				'<line  x1="8.02" y1="4" x2="19.38" y2="4"/><line  x1="13.7" y1="4" x2="10.3" y2="20"/><line  x1="4.62" y1="20" x2="15.98" y2="20"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		key: {
			name: 'key',
			path:
				'<rect  x="3.95" y="12.32" width="7.06" height="7.06" rx="3.53" transform="translate(13.4 -0.64) rotate(45)"/><line  x1="10.8" y1="12.52" x2="18.29" y2="5.04"/><polyline  points="17.46 5.87 19.95 8.37 17.46 10.86 15.79 9.2"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		list: {
			name: 'list',
			path:
				'<line  x1="7.43" y1="12" x2="20" y2="12"/><line  x1="7.43" y1="6.29" x2="20" y2="6.29"/><line  x1="7.43" y1="17.71" x2="20" y2="17.71"/><line  x1="4" y1="12" x2="4.11" y2="12"/><line  x1="4" y1="6.29" x2="4.11" y2="6.29"/><line  x1="4" y1="17.71" x2="4.09" y2="17.71"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		login: {
			name: 'login',
			path:
				'<path  d="M13.85,3h3.3A2.73,2.73,0,0,1,20,5.57V18.43A2.73,2.73,0,0,1,17.15,21h-3.3"/><polyline  points="11.5 16 14 12 11.5 8 14 12 4 12"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		logout_1: {
			name: 'logout_1',
			path:
				'<path  d="M10.15,3H6.85A2.73,2.73,0,0,0,4,5.57V18.43A2.73,2.73,0,0,0,6.85,21h3.3"/><polyline  points="17.5 16 20 12 17.5 8 20 12 10 12"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		logout_2: {
			name: 'logout_2',
			path:
				'<path  d="M13.85,3h3.3A2.73,2.73,0,0,1,20,5.57V18.43A2.73,2.73,0,0,1,17.15,21h-3.3"/><polyline  points="6.5 16 4 12 6.5 8 4 12 14 12"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		marker: {
			name: 'marker',
			path:
				'<polygon  points="9.13 18.8 4 18.8 17.28 5.2 20 7.92 9.13 18.8"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		mug: {
			name: 'mug',
			path:
				'<path  d="M15.85,4V15c0,2.75-1.8,5-4,5H8c-2.2,0-4-2.25-4-5V4"/><rect  x="16.44" y="7.03" width="3.56" height="7.41" rx="1.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		pangolin: {
			name: 'pangolin',
			path:
				'<path  d="M7,5s6,1,3,3L3,12a9,9,0,1,1,9,9H7l9-5"/><path  d="M12,10s-4,3-3,5c0,0,3-2,5-1"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		pause: {
			name: 'pause',
			path:
				'<line  x1="9" y1="6.5" x2="9" y2="17.5"/><line  x1="15" y1="6.5" x2="15" y2="17.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		play: {
			name: 'play',
			path: '<polygon  points="7.5 6.5 7.5 17.5 16.5 12 7.5 6.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		plus: {
			name: 'plus',
			path:
				'<line  x1="5" y1="12" x2="19" y2="12"/><line  x1="12" y1="19" x2="12" y2="5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		resizeImage: {
			name: 'resizeImage',
			path:
				'<rect  x="4" y="4" width="16" height="16" rx="1.4"/><polyline  points="7.43 10.86 7.43 7.43 10.86 7.43"/><polyline  points="16.57 13.14 16.57 16.57 13.14 16.57"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		sidebar: {
			name: 'sidebar',
			path:
				'<rect  x="4" y="5" width="16" height="14" rx="1.4"/><line  x1="10" y1="19" x2="10" y2="5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		snpachat: {
			name: 'snpachat',
			path:
				'<path  d="M20.74,16.83c-3.15-1.53-3.66-3.89-3.68-4.06a.55.55,0,0,1,.18-.6c.22-.2,1.22-.82,1.5-1,.46-.32.66-.64.51-1a.62.62,0,0,0-.62-.38,1,1,0,0,0-.25,0c-.51.11-1,.36-1.28.43l-.1,0c-.16,0-.21-.07-.2-.25a18.15,18.15,0,0,0,0-2.63,4.18,4.18,0,0,0-1.1-2.68A4.86,4.86,0,0,0,12,3.11,4.86,4.86,0,0,0,8.27,4.66a4.18,4.18,0,0,0-1.1,2.67A18.12,18.12,0,0,0,7.2,10c0,.18,0,.25-.2.25H6.9c-.28-.07-.77-.32-1.28-.43a1,1,0,0,0-.25,0,.6.6,0,0,0-.62.37c-.15.4,0,.72.51,1,.28.19,1.28.81,1.5,1a.54.54,0,0,1,.18.59c0,.18-.53,2.54-3.68,4.07-.19.09-.5.27.05.58.87.48,1.45.43,1.9.72s.16.78.44,1,1.35,0,2.65.41c1.1.36,1.76,1.38,3.7,1.38s2.62-1,3.7-1.38c1.3-.43,2.31-.17,2.65-.41s.06-.72.44-1,1-.24,1.9-.72C21.24,17.11,20.93,16.92,20.74,16.83Z"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		squarePlus: {
			name: 'squarePlus',
			path:
				'<line  x1="9" y1="12" x2="15" y2="12"/><line  x1="12" y1="15" x2="12" y2="9"/><rect  x="3" y="3" width="18" height="18" rx="3"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		squareX: {
			name: 'squareX',
			path:
				'<rect  x="3" y="3" width="18" height="18" rx="3"/><line  x1="9" y1="15" x2="15" y2="9"/><line  x1="15" y1="15" x2="9" y2="9"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		strikethrough: {
			name: 'strikethrough',
			path:
				'<path  d="M10.77,11.73c-.55-.25-3.08-1.63-3.08-3.8A4.13,4.13,0,0,1,12,4a4.13,4.13,0,0,1,4.31,3.93"/><line  x1="4.62" y1="11.87" x2="19.38" y2="11.87"/><path  d="M13.57,12.27c.55.25,3.08,1.63,3.08,3.8A4.13,4.13,0,0,1,12.34,20,4.12,4.12,0,0,1,8,16.07"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		text: {
			name: 'text',
			path:
				'<line  x1="4" y1="12" x2="20" y2="12"/><line  x1="4" y1="6.29" x2="20" y2="6.29"/><line  x1="4" y1="17.71" x2="16.57" y2="17.71"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		title: {
			name: 'title',
			path: '<polyline  points="20 4 4 4 12 4 12 20"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		trashcan_1: {
			name: 'trashcan_1',
			path:
				'<path  d="M6.5,7.19v11A1.86,1.86,0,0,0,8.35,20h7.3a1.86,1.86,0,0,0,1.85-1.85v-11"/><line  x1="5.59" y1="7.18" x2="18.41" y2="7.18"/><path  d="M9.07,6.83c0-.6.49-2.83,1.1-2.83h3.66c.61,0,1.1,2.23,1.1,2.83"/><line  x1="10.17" y1="10" x2="10.17" y2="16.91"/><line  x1="13.83" y1="10" x2="13.83" y2="16.91"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		trashcan_2: {
			name: 'trashcan_2',
			path:
				'<path  d="M6.5,7.19v11A1.86,1.86,0,0,0,8.35,20h7.3a1.86,1.86,0,0,0,1.85-1.85v-11"/><line  x1="5.59" y1="7.18" x2="18.41" y2="7.18"/><path  d="M9.07,6.83c0-.6.49-2.83,1.1-2.83h3.66c.61,0,1.1,2.23,1.1,2.83"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		twitch: {
			name: 'twitch',
			path:
				'<path  d="M7.86,21V17.73H3.71a.46.46,0,0,1-.46-.46V3.46A.47.47,0,0,1,3.71,3H20.29a.47.47,0,0,1,.46.46V13.59a.43.43,0,0,1-.14.32l-3.68,3.68a.45.45,0,0,1-.33.14H11.27Z"/><line  x1="14.76" y1="7.03" x2="14.76" y2="12.78"/><line  x1="9.24" y1="7.03" x2="9.24" y2="12.78"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		twitter: {
			name: 'twitter',
			path:
				'<path  d="M10.81,15.27A16.26,16.26,0,0,1,3.9,17.88a6.79,6.79,0,0,1-.9-.05A10.8,10.8,0,0,0,19.62,8.72L21,5s-1.55.5-2.41.67A3.81,3.81,0,0,0,12,8.27a4.14,4.14,0,0,0,.1.87,10.77,10.77,0,0,1-7.83-4,3.86,3.86,0,0,0-.51,1.91c0,1.32.46,6.55,7,8.19"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		underline: {
			name: 'underline',
			path:
				'<path  d="M18.15,4v7.47C18.15,15,15.4,16.8,12,16.8h0c-3.4,0-6.15-1.8-6.15-5.33V4"/><line  x1="5.85" y1="20" x2="18.15" y2="20"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		userAdd: {
			name: 'userAdd',
			path:
				'<path  d="M3.58,19.5V16.84A1.72,1.72,0,0,1,5.17,15h10.5a1.72,1.72,0,0,1,1.58,1.82V19.5"/><circle  cx="10.42" cy="8.18" r="3.68"/><line  x1="16.42" y1="11" x2="20.42" y2="11"/><line  x1="18.42" y1="9" x2="18.42" y2="13"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		userMultiple: {
			name: 'userMultiple',
			path:
				'<path  d="M3,19.41V16.78A1.7,1.7,0,0,1,4.56,15H14.94a1.7,1.7,0,0,1,1.56,1.8v2.63"/><circle  cx="9.75" cy="8.23" r="3.64"/><path  d="M19.44,15A1.7,1.7,0,0,1,21,16.78v2.63"/><path  d="M15.31,4.59a3.64,3.64,0,0,1,0,7.27"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		userRemove: {
			name: 'userRemove',
			path:
				'<path  d="M3.58,19.5V16.84A1.72,1.72,0,0,1,5.17,15h10.5a1.72,1.72,0,0,1,1.58,1.82V19.5"/><circle  cx="10.42" cy="8.18" r="3.68"/><line  x1="16.42" y1="11" x2="20.42" y2="11"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		user: {
			name: 'user',
			path:
				'<path  d="M5.16,19.5V16.84A1.73,1.73,0,0,1,6.75,15h10.5a1.73,1.73,0,0,1,1.59,1.82V19.5"/><circle  cx="12" cy="8.18" r="3.68"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		verticalMore: {
			name: 'verticalMore',
			path:
				'<rect  x="11.5" y="6.5" width="1" height="1"/><rect  x="11.5" y="11.5" width="1" height="1"/><rect  x="11.5" y="16.5" width="1" height="1"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		volume_0: {
			name: 'volume_0',
			path:
				'<rect  x="8.5" y="9.5" width="3" height="5"/><polygon  points="15.5 5.5 11.5 9.5 11.5 14.5 15.5 18.5 15.5 5.5"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		volume_1: {
			name: 'volume_1',
			path:
				'<rect  x="6.63" y="10.37" width="3" height="5"/><polygon  points="13.63 6.38 9.63 10.38 9.63 15.38 13.63 19.38 13.63 6.38"/><path  d="M16.62,9.87a6.37,6.37,0,0,1,0,6"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		volume_2: {
			name: 'volume_2',
			path:
				'<rect  x="5" y="9.5" width="3" height="5"/><polygon  points="12 5.5 8 9.5 8 14.5 12 18.5 12 5.5"/><path  d="M15,9a6.38,6.38,0,0,1,0,6"/><path  d="M18,8a8.52,8.52,0,0,1,0,8"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		volume_x: {
			name: 'volume_x',
			path:
				'<rect  x="4.94" y="9.5" width="3" height="5"/><polygon  points="11.94 5.5 7.94 9.5 7.94 14.5 11.94 18.5 11.94 5.5"/><line  x1="14.82" y1="14.12" x2="19.06" y2="9.88"/><line  x1="14.82" y1="9.88" x2="19.06" y2="14.12"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		x: {
			name: 'x',
			path:
				'<line  x1="6" y1="18" x2="18" y2="6"/><line  x1="18" y1="18" x2="6" y2="6"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
		youtube: {
			name: 'youtube',
			path:
				'<path  d="M21,19A77,77,0,0,1,3,19,27.54,27.54,0,0,1,3,5,77,77,0,0,1,21,5h0A27.54,27.54,0,0,1,21,19Z"/><polyline  points="10 9.59 14 12 10 14.41 10 9.59"/>',
			toSvg(options = {}) {
				Pangolin._toSvg(options);
			},
		},
	},
};
