/**
 * The BaseLogger class
 * Extending from this class makes the subclass singleton
 */

export class BaseLogger  {
	constructor() {
	if (!BaseLogger.instance) {
		BaseLogger.instance = this;
	}

		return BaseLogger.instance;
	}

	static getInstance() {
		return new this();
	}

	info(data, user, page) {
		const { message } = data;
		const currentDate = new Date();
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
