import { Block } from '@attom';

export const PureBreadCrumb = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	nameProperty = 'name',
	onClickProperty = 'onClick',
	separator = '/',
	paths = [],
	//styles
	class_path = '',
	class_name = '',
	class_separator = '',
}) => {
	return (
		<Block boxClass={boxClass} boxSize={boxSize} boxSpace={boxSpace}>
			{paths.map((item, i) => (
				<span
					key={i}
					className={`${class_path} ${item[onClickProperty] ? 'cursor-pointer' : ''}`}
					onClick={item[onClickProperty] ?? null}
				>
					<span className={class_name}>{item[nameProperty] ?? ''}</span>
					{i + 1 < paths.length && <span className={class_separator}>{separator}</span>}
				</span>
			))}
		</Block>
	);
};
