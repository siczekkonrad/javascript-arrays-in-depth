var tasks = [
	{
		title: 'Do laundry',
		completed: true
	},
	{
		title: 'Feed the cat',
		completed: true
	},
	{
		title: 'Watch the array lessons on egghead.io',
		completed: true
	}
];


addTask = (title) => {
	if(tasks.some(task => task.title === title)) {
		return;
	}
	tasks.push({title: title, completed: false});
}


addTask('Feed the cat');
console.log(tasks);