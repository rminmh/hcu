import { PureTable } from '@attom';

import CS from './PrimaryTable.module.scss';

export const PrimaryTable = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	// table Class
	class_table = '',
}) => {
	return (
		<PureTable boxClass={`${CS.container} ${class_table}`} boxSpace={boxSpace} boxSize={boxSize}>
			{children}
		</PureTable>
	);
};

/* <PrimaryTable boxClass={CS.table}>
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
</PrimaryTable>; */
