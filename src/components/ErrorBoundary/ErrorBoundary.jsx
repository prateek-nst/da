import React from 'react';

class ErrorBoundary extends React.Component {
	// Equivalent to:
	// const [hasError, setHasError] = useState(false);

	constructor(props) {
		super(props);

		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// console.log(error.toString());
		console.error(error);
		console.log(error.stack);
		console.info({ errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback || null;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
