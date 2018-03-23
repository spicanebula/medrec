const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/medrec_db');
//mongoose.Promise = global.Promise;
mongoose.connection
	.once('open', () => console.log('Mongo Connected!!!'))
	.on('error', (error) => {
		console.warn('warning', error);
	});

module.exports = mongoose;