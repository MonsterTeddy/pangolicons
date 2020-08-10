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
import childProcess from 'child_process';

// define the output directory
const OutputDir = './dist/';
// define the input directory
const InputDir = './dist/icons_svg_source/';
// the version that the file should show
const Version = '0.1';

// the path for the static part of pangolin
const Srcfile = './dist/pangolin.src.mjs';

// import the queryString and https modules
import fetch from 'node-fetch';

// function to minify the created file

const minify = async () => {
	// try to get the file contents, throw err if file is not present

	let file;

	try {
		// get the file contents
		file = await fs.readFile('./dist/pangolin.latest.mjs', 'utf-8');
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

	if (fileName.includes('@')) {
		// split the fileName at @. 0 will be the name, 1 will be the tags, 2 will be the ext
		let split = fileName.split('@');

		// remove the ext
		split.pop();

		parsedName = {
			name: split[0],
			// split the string to get an array of tags
			// or add the name of the element as the only
			tags: [split[0], ...split[1].split(',')] || [split[0]],
		};
	} else {
		// fallback for older icons that have not yet been tagged
		parsedName = { name: fileName.split('_').pop().join('_'), tags: [] };
	}

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

			console.log(parseFileName(file));

			let { name, tags } = parseFileName(file);

			// create the text fragment to append
			let text = `'${name}': {
			name: '${name}',
			tags: [${tags.map((tag) => `'${tag}'`).join(',')}],
            path: '${parsePath(completePath)}',
			toSvg(options = {}){ return Pangolin._toSvg(this, options) },
			toString(options = {}) {return Pangolin._toString(this, options) }, 
        },`;

			// append the created text to the file
			await fs.appendFile(
				`${OutputDir}pangolin.latest.mjs`,
				text,
				'utf-8'
			);

			// helper function to copy and rename
			const copyAndRename = async (src, file, dest, newFilename) => {
				// begin operatin by copying the file
				await fs.copyFile(`${src}${file}`, `${dest}${file}`);
				// rename the file
				await fs.rename(`${dest}${file}`, `${dest}${newFilename}`);
			};

			await copyAndRename(
				InputDir,
				file,
				`./dist/icons_svg/`,
				`${parseFileName(file).name}_s24.svg`
			);

			// log the current progression
			console.log(`File ${i + 1} of ${fileNames.length} parsed.`);
		} catch (err) {
			if (err) throw err;
		}
	}

	// append the end of the file

	await fs.appendFile(`${OutputDir}pangolin.latest.mjs`, src.end, 'utf-8');

	// zip the icons
	try {
		childProcess.execSync(`zip -r pangolin_icons *`, {
			cwd: './dist/icons_svg',
		});

		// move the zip file to the correct folder
		await fs.rename(
			'./dist/icons_svg/pangolin_icons.zip',
			'./dist/pangolin_icons.zip'
		);
	} catch (err) {
		if (err) throw err;
	}

	await minify();

	// call the timer end
	console.timeEnd('Time to compile:');
})();
