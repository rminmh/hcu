import { useEffect, useState } from 'react';

import { Block } from '@attom';

export const PureTab = ({
	children,
	// box control
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	// custom props:
	headerTitles = [],
	activeTabIndex = 0,
	controlledTab = false,
	onSelect = null,
	// styles
	class_container = '',
	class_header = '',
	class_headerItem = '',
	class_body = '',
	...props
}) => {
	//
	const [activeIndex, setActiveIndex] = useState(activeTabIndex || (controlledTab ? null : 0));

	useEffect(() => {
		if (controlledTab) setActiveIndex(activeTabIndex);
	}, [activeTabIndex, controlledTab]);

	const selectHandler = (i) => {
		if (!controlledTab) setActiveIndex(i);
		else if (controlledTab && onSelect) onSelect(i);
	};

	return (
		<Block boxClass={`${boxClass} ${class_container}`} boxSize={boxSize} boxSpace={boxSpace} {...props}>
			<div className={class_header}>
				{headerTitles.map((title, i) => (
					<div
						key={i}
						onClick={() => selectHandler(i)}
						className={class_headerItem}
						_status={i === activeIndex ? 'active' : 'deactive'}
					>
						{typeof title === 'function' ? title() : title}
					</div>
				))}
			</div>
			<div className={class_body}>{(children && children[activeIndex]) || null}</div>
		</Block>
	);
};
