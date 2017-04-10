import React from 'react';

const Album = ({
	selected,
	title,
	year,
	idx,
  draggable,
}) => {
	const classes = selected ? 'item selected' : 'item';
	return (
		<rect width="200" height="200" x={(idx % 4) * 210} y={Math.floor(idx / 4) * 210 } data-draggable />
	)
};

export default Album;
