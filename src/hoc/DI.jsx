import { getLogger, getStorage } from '@/utils/common';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import React from 'react';
import { roles } from '@/utils/roles';

const DI = (Component) => {
	return function f(props) {
		const logger = getLogger();
		const storage = getStorage();
		const componentName = Component.name;

		const newProps = { ...props, logger, storage, componentName, roles };

		return (
			<ErrorBoundary fallback={<div>Component has failed to render</div>}>
				<Component {...newProps}>{props.children}</Component>
			</ErrorBoundary>
		);
	};
};

export default DI;
