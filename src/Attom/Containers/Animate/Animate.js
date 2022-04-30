/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { Block } from '@attom';

import CS from './Animate.module.scss';

export const Animate = ({
	//
	children,
	// classNames
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	elClass = '',
	elSpace = '',
	// mode
	mode_opacity = true,
	mode_enterTop = false,
	mode_enterRight = false,
	mode_enterLeft = false,
	mode_enterBottom = false,
	mode_enterTopRight = false,
	mode_enterTopLeft = false,
	mode_enterBottomRight = false,
	mode_enterBottomLeft = false,
	mode_zoomIn = false,
	mode_zoomOut = false,
	// custom
	showBeforeRender = false,
	hideOverflow = false,
	delay = '0',
}) => {
	//hooks:
	const [renderCls, setRenderCls] = useState('waiting');

	useEffect(() => {
		setTimeout(() => {
			setRenderCls('rendered');
		}, parseInt(delay));
		return () => {
			setRenderCls('waiting');
		};
	}, []);

	//variables and functions:
	let modeClasses = '';
	if (mode_opacity) modeClasses += 'opacity-mode ';
	if (mode_enterTop) modeClasses += 'enter-top-mode ';
	if (mode_enterRight) modeClasses += 'enter-right-mode ';
	if (mode_enterLeft) modeClasses += 'enter-left-mode ';
	if (mode_enterBottom) modeClasses += 'enter-bottom-mode ';
	if (mode_enterTopRight) modeClasses += 'enter-top-right-mode ';
	if (mode_enterTopLeft) modeClasses += 'enter-top-left-mode ';
	if (mode_enterBottomRight) modeClasses += 'enter-bottom-right-mode ';
	if (mode_enterBottomLeft) modeClasses += 'enter-bottom-left-mode ';
	if (mode_zoomIn) modeClasses += 'zoom-in-mode ';
	if (mode_zoomOut) modeClasses += 'zoom-out-mode ';

	return (
		<Block
			boxClass={`${boxClass} ${CS.container} ${hideOverflow ? CS.hideOvFl : ''}`}
			boxSize={boxSize}
			boxSpace={boxSpace}
			_mode={modeClasses}
			_render={renderCls}
		>
			{!showBeforeRender && !renderCls === 'rendered' ? null : <div className={`${elClass} ${elSpace}`}>{children}</div>}
		</Block>
	);
};
