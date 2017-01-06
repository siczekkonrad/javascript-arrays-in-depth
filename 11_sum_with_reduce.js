const items = [1, 2, 3, 4, 5];
const sum = items.reduce((prev, next) => {
	console.log('prev', prev,  'item', next);
	return prev + next;

}, 0);


//-------------------------------------


const users = [
	{
			id: '01',
			name: 'Shane'
	},
	{
			id: '02',
			name: 'Sally'
	}
];


const newUsers = users.reduce((obj, user) => {
		obj[user.id] = user;
		return obj;
}, {});


console.log(newUsers['02'].name);