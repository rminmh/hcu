import { PureBreadCrumb } from '@attom';

export const PrimaryBreadCrumb = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	paths = [],
}) => {
	return (
		<PureBreadCrumb
			boxClass={boxClass}
			boxSize={boxSize}
			boxSpace={boxSpace}
			paths={paths}
			class_path='mx-2px text-text-secondary last:text-tertiary-1 text-xs'
			class_name='mx-1'
			class_separator='mx-1'
		/>
	);
};
