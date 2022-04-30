import React from 'react';
//
export const Block = ({
	children,
	//
	boxClass = '', // custom class
	boxSize = '', // width & height
	boxSpace = '', // padding & margin
	//
	inlineBlock = null,
	...props
}) => {
	return inlineBlock ? (
		<span className={`inline-block ${boxClass} ${boxSize} ${boxSpace}`} {...props}>
			{children}
		</span>
	) : (
		<div className={`${boxClass} ${boxSize} ${boxSpace}`} {...props}>
			{children}
		</div>
	);
};

export default Block;
