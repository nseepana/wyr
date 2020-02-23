import React from 'react';

const Bdiv = (props) => {
	let colors = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange'];
	let new_color = colors[Math.floor(Math.random() * colors.length)];
	return (
		<div style={{ 'border': '1px solid' + { new_color } }}>
			{props.children}
		</div>
	);
}

export default Bdiv;
