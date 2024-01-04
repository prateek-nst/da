import { BaseLogger } from './BaseLogger';

export class ProdLogger extends BaseLogger {
	constructor() {
		super();
	}

	info(data, user, page) {
		const { message } = data;
		const currentDate = new Date();
		console.log('sending to server');
		console.log(
			`id: ${page}, message: ${message}, date: ${currentDate}, user: ${user}`,
		);
	}
	error(error, user, page) {
		const { message } = error;
		const currentDate = new Date();
		console.error(
			`id: ${page}, message: ${message}, date: ${currentDate}, user: ${user}`,
		);
	}
}
