import { PureTab } from '@attom';

import CS from './PrimaryTab.module.scss';

export const PrimaryTab = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	// custom props:
	headerTitles = [],
	activeTabIndex = 0,
	controlledTab = false,
}) => {
	return (
		<PureTab
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			headerTitles={headerTitles}
			activeTabIndex={activeTabIndex}
			controlledTab={controlledTab}
			class_container={CS.container}
			class_header={CS.header}
			class_headerItem={CS.headerItem}
		>
			{children}
		</PureTab>
	);
};
