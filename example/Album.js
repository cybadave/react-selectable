import React from 'react';

const Album = ({
	selected,
	title,
	year,
	idx,
}) => {
	const classes = selected ? 'item selected' : 'item';
	return (
		<rect width="200" height="200" x={(idx % 4) * 210} y={Math.floor(idx / 4) * 210 } />
	)
};

export default Album;
