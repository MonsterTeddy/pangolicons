<img align="center" src="./public/assets/pangolin_logo@_s24.svg">

# Pangolicons

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

Pangolicons is a modern & minimal SVG icon library with a simple api. All icons are fully customizable. 

<a href="https://pangolicons.herokuapp.com" alt="Pangolicons website" target="_blank" rel="norefferer noopener">pangolicons.herokuapp.com</a>

```javascript
npm install pangolicons
```

## Getting started

Download, link or install the Pangolicons file, whatever works best for you. You can also just download single icons if you want to have the smallest possible size!

## Use it

### Installing Pangolicons

To use Pangolicons, include it in your project

```HTML
<script src="./your/path/to/panolicons.latest.mjs" type="module"></script>
```
```HTML
<script src="https://pangolicons.herokuapp.com/panolicons.latest.mjs" type="module"></script>
```

or install it using npm

```javascript
npm install pangolicons
```

### Creating icons

Then, create a **<i>** element with a '**Pangolicons**' attribute, with the attribute value being the name of the icon you would like to insert. The **<i>** element will be replaced with the SVG element when the "load" event of the browser is fired. See the example below.

```HTML
<i pangolicons="x"></i>
```

You can also create Icons using the provided API, more on that later.

## Style your icon

The recomended way to style your icons is using CSS. But if that is not possible or desireable, you can also use SVG attributes to change the look of your icon. 

```HTML
<i pangolicons="x" stroke-width="2" color="#aaffaa"></i>
```

In general, all attributes you assign to the **<i>** tag will be copied to the created SVG. That means you can use all attributes the SVG interface provides. You can see a incomplete list of attributes below. 

```javascript
//{ 
//  xlmns: 'http://www.w3.org/2000/svg',
//  width: '24',
//	height: '24',
//	viewBox: '0 0 24 24',
//	stroke: 'currentColor',
//	fill: 'none',
//	'stroke-linecap': 'round',
//	'stroke-width': '2',
//	'stroke-linejoin': 'round',
//	'stroke-align': 'center',
//	'stroke-linejoin': 'round',
//}
```

For more information about SVG attributes, see the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank" rel="noreffer noopener">MDN Svg Attribute reference</a> 

## API

After adding **Pangolin** to your website it should be globally accessible, which lets you access all icons and the API using Javascript. You can also import it into your file.

```javascript
// importing with es6 import
import Pangolicons from "./your/path/to/pangolicons.latest.mjs"

// importing into node js
const Pangolicons = require(`pangolicons`)
```

`Pangolicons.icons`

Is an object containing all Icons and their respective data

```javascript
Pangolin.["x"]
//{
//  name: "x", -- @string
//  tags: ["x", "cancel", "remove"], --@array
//  path: '<path ... /><path ... />', --@string
//  toSvg: [Function], --@function
//  toString: [Function], --@function
//}
```

`Pangolicons.icons["icon name"].toSvg({options})`

Returns an SVGelement

| Name | Type | Description |
|------|------|-------------|
|options(optional)|Object|An Object that contains key value pairs of svg attributes to add to the svg element. All default attributes can be overwritten this way.

```javascript
// Usage:
elem.appendChild(Pangolicons.icons.x.toSvg({ color: "#aaffaa" }))

// Appends the SVG element directly to the HTMLelement
<span>
	<svg class="pangolicons pangolicons-x" color="#aaffaa" ... >...</svg>
</span>
```

`Pangolicons.icons["icon name"].toString({options})`

Returns an SVG string

| Name | Type | Description |
|------|------|-------------|
|options(optional)|Object|An Object that contains key value pairs of svg attributes to add to the svg element. All default attributes can be overwritten this way.

```javascript
// Usage:
elem.innerHTML = Pangolicons.icons.x.toString({ color: #aaffaa })

// Appends the SVG String to the elem
<span>
	<svg class="pangolicons pangolicons-x" color="#aaffaa" ... >...</svg>
</span>	
```

`Pangolicons._replace(element)`

Replaces a HTMLElement with a newly created SVG Icon

| Name | Type | Description |
|------|------|-------------|
|element|HTMLElement|An HTMLElement that should be converted to a Pangolin icon. The element has to have a Pangolin attribute that specifies the name of the icon. All other attributes will be copied to the newly created svg element. The HTMLElement will be deleted. This is the same method that Pangolin executes on pageload.

```javascript
// Usage:
<i class="icon-to-replace" pangolin="x"></i>

// get the icon
let icon = document.querySelector(i.icon-to-replace)

// replace the icon
Pangolin._replace(icon)

// the element will be replaced with an svg element
<svg class="icon-to-replace" pangolin="x" ... >
	<path ... />
</svg>
```

`Pangolicons.search("searchString", {options})`

Returns an array containing all icons which tags or title matches the search string.

| Name | Type | Description |
|------|------|-------------|
|searchString|String|A string to search the tags or title for. For example "Pangolin". The search is case insensitive.
|options(optional)|Object|An object to determine if to search the title or the tags of the icons for a match against the search string. By default, tags will be searched. Set the "tags" property to false and the "title" property to true to search only the title.

```javascript
// Usage:
let found = Pangolin.search("pangolin", { tags: true })

// Result
// [{name: "pangolin", tags: [ "pangolin" ], path: "<path ... />"", toSvg: ƒ, toString: ƒ}]
```

## License

Pangolicons is licensed under the MIT License

## Inspiration

Pangolicons is heavily inspired by <a href="https://github.com/feathericons/feather" target="_blank" rel="noreffer noopener">Feather Icons</a>.