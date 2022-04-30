import { Block } from '@attom';

import CS from './PureTable.module.scss';

export const PureTable = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
}) => {
	return (
		<Block boxClass={`${boxClass} ${CS.container}`} boxSpace={boxSpace} boxSize={boxSize}>
			{children}
		</Block>
	);
};

/* <PureTable boxClass={CS.table}>
	<div className={CS.thead}>
		<div className={CS.th}>
			<div className={CS.td}>1</div>
			<div className={CS.td}>2</div>
			<div className={CS.td}>3</div>
		</div>
	</div>
	<div className={CS.tbody}>
		<div className={CS.tr}>
			<div className={CS.td}>1</div>
			<div className={CS.td}>2</div>
			<div className={CS.td}>3</div>
		</div>
	</div>
</PureTable>; */
