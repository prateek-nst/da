import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div
			id="error-page"
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h1>Oops!</h1>

			{isRouteErrorResponse(error) ? (
				<p>404 Not Found</p>
			) : (
				<p>Sorry, an unexpected error has occurred {error.message}.</p>
			)}
			<Link to="/">Back</Link>
		</div>
	);
}
