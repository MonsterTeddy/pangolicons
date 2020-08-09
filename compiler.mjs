/** @format */

/**
 *
 * This file can be used to compile the pangolin icons into the file instead of adding all icons manually.
 * It will also minify the file, even though not much can be earned by compression, due to the many uncompressable svg
 * paths.
 *
 * Compiler will output to pangolin.latest.mjs and read the src from the provided source path. The src should contain a
 * //@icons placeholder where the icons should be appended, this is where the compiler splits the src
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

// the path for the static part of pangolin
const Srcfile = './dist/pangolin.src.mjs';

// import the queryString and https modules
import fetch from 'node-fetch';

// function to minify the created file

const minify = async () => {
	// try to get the file contents, throw err if file is not present
	try {
		// get the file contents
		let file = await fs.readFile('./dist/pangolin.latest.mjs', 'utf-8');
	} catch (err) {
		if (err) throw err;
	}

	try {
		// perfom a fetch request to js minifier
		let response = await fetch('https://javascript-minifier.com/raw', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: encodeURI(`input=${file}`),
		}).then((res) => res.text());

		// write the response to file
		await fs.writeFile('./dist/pangolin.latest.min.mjs', response, 'utf-8');

		console.log('File minfied!');
	} catch (err) {
		if (err) throw err;
	}
};

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
 * @param { String } fileName - the filename as string to be parsed
 * @returns { String } - the parsed file name
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
	console.time('Time to compile:');

	// return an array of file names from the directory
	const fileNames = await fs.readdir(InputDir);

	let src = {};

	try {
		// get the src string
		src.string = await fs.readFile(Srcfile, 'utf-8');

		src.string = src.string.replace('@version', `@version ${Version}`);

		// split the src string into start and end to be able to insert the icons
		src.start = src.string.split('//@icons')[0];
		src.end = src.string.split('//@icons')[1];
	} catch (err) {
		if (err) throw err;
	}

	try {
		// write the first part of the file to the output file
		await fs.writeFile(
			`${OutputDir}pangolin.latest.mjs`,
			src.start,
			'utf-8'
		);
	} catch (err) {
		if (err) throw err;
	}

	// itterate over the array of filenames and append the icon objects to the files

	for (const [i, file] of fileNames.entries()) {
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
				`${OutputDir}pangolin.latest.mjs`,
				text,
				'utf-8'
			);

			// log the current progression
			console.log(`File ${i + 1} of ${fileNames.length} parsed.`);
		} catch (err) {
			if (err) throw err;
		}
	}

	// append the end of the file

	await fs.appendFile(`${OutputDir}pangolin.latest.mjs`, src.end, 'utf-8');

	await minify();

	// call the timer end
	console.timeEnd('Time to compile:');
})();
