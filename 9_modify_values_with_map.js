const items = [
	{
			active: true,
			firstname: 'Shane',
			lastname: 'Osbourne'
	},
	{
			active: true,
			firstname: 'Sally',
			lastname: 'Osbourne'
	},
	{
			active: false,
			firstname: 'Ben',
			lastname: 'Barker'
	}
];

const mapped = items
	.filter(x => x.active)
	.map(x => x.firstname);

console.log(createHtmlList(mapped));

function createHtmlList(items) {
	const listElements = items.map(x => `  <li>${x}</li>`).join('\n');
	return `<ul>\n${listElements}\n</ul>`;
}