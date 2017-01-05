var name = 'shane osbourne';

var upper = name.split(' ')
		.map( x => x.charAt(0).toUpperCase() + x.slice(1))
		.join(' ');


console.log(upper);