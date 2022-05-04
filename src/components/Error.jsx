import React from 'react';

function Error({ message }) {

	return (
		<div data-testid="errorMessage" className="error-msg">

			{message}

		</div>
	);
}

export default Error;
