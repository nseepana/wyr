import React from 'react';
import { Link } from "@reach/router";

const DataLink = (props) => {
	return (<Link className="nav-link" {...props}>{props.children}</Link>)
}

export default DataLink;
