// import { BaseLogger } from '@/services/logger/BaseLogger';
import { DevLogger } from '@/services/logger/DevLogger';
import { ProdLogger } from '@/services/logger/ProdLogger';

export function getLogger(){
	let logger;
	switch (import.meta.env.MODE) {
		case 'development':
			logger = DevLogger.getInstance();
			break;
		case 'production':
			logger = ProdLogger.getInstance();
			break;
		default:
			logger = DevLogger.getInstance();
	}

	return logger;
}

export function getStorage() {
	let storage;
	switch (import.meta.env.VITE_STORAGE) {
		case 'localStorage':
			storage = window.localStorage;
			break;
		case 'sessionStorage':
			storage = window.sessionStorage;
			break;
		default:
			storage = window.localStorage;
	}

	return storage;
}
