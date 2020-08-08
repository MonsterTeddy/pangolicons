/** @format */

/**
 *
 * This file compiles the icons to the pangolin file.
 *
 *
 */

// import the filesystem module
import fs from 'fs/promises';

// define the output directory
const OutputDir = './dist/';
// define the input directory
const InputDir = './dist/icons_svg/';
// the version that the file should show
const Version = '0.1';

// the static boilerplate part of pangolin
const pangolin = `
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
`;

/**
 * @method parsePath - receives a svg string and removes the svg part, the style defs part, and the classes created during export by illustrator. This function is build to parse only svg paths exported by illustrator and relies on them having the correct format
 *
 * @param { String } path - the svg path read out of the svg file
 * @returns { String } - returns the parsed string without the svg defs, the style defs or classes.
 */

const parsePath = (path) => {
	let parsedString;

	// parse the path and remove the svg defs, style defs and match only the pure string
	parsedString = [
		...path.match(/<svg .+?<\/defs>(?<pathFrag>.+?)<\/svg>/im),
	][1];

	// remove all class constructs from the string
	parsedString = parsedString.replace(/class=".+?"/gim, '');

	// return the now parsed string string
	return parsedString;
};

/**
 *
 * @method parseFilename - parses a filename to create the icon name from the filename. removes the trailing svg indentifier and fileextension
 *
 * @param { String } fileName
 */

const parseFileName = (fileName) => {
	let parsedName;

	// split the fileName at underscores. The last part of a filename will always be a _s24.svg
	parsedName = fileName.split('_');

	// join the remaining parts together
	parsedName.pop();

	// if there are more then one part of a string, join the strings
	parsedName = parsedName.length > 1 ? parsedName.join('_') : parsedName;

	// return the now parsed filename
	return parsedName;
};

// the actual compile function that runs when the compiler is called

(async () => {
	// return an array of file names from the directory
	const fileNames = await fs.readdir(InputDir);

	try {
		// write the first part of the file to the output file
		await fs.writeFile(
			`${OutputDir}pangolin.${Version}.mjs`,
			pangolin,
			'utf-8'
		);
	} catch (err) {
		if (err) throw err;
	}

	// itterate over the array of filenames and append the icon objects to the files

	// create an itterator
	let i = 0;

	for (const file of fileNames) {
		try {
			// get the complete path object from the file
			let completePath = await fs.readFile(`${InputDir}${file}`, 'utf-8');

			// create the text fragment to append
			let text = `'${parseFileName(file)}': {
            name: '${parseFileName(file)}',
            path: '${parsePath(completePath)}',
            toSvg(options = {}){ Pangolin._toSvg(options) }
        },`;

			// append the created text to the file
			await fs.appendFile(
				`${OutputDir}pangolin.${Version}.mjs`,
				text,
				'utf-8'
			);

			i++;
			console.log(`File ${i} of ${fileNames.length} parsed.`);
		} catch (err) {
			if (err) throw err;
		}
	}

	// adter all svgs have been added, add the closing brackets to the file

	await fs.appendFile(`${OutputDir}pangolin.${Version}.mjs`, '},}', 'utf-8');
})();
