import React from 'react';
import { connect } from 'react-redux';

const ProtectedLink = ({ hasUserId, children, shared }) => {
	return (
		<React.Fragment>
			{hasUserId ? children : shared}
		</React.Fragment>
	)
}


const mapStateToProps = ({ auth }) => {
	const { hasUserId } = auth;
	return {
		hasUserId
	}
}

export default connect(mapStateToProps)(ProtectedLink);