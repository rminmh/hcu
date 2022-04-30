export const PureForm = ({
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	...props
}) => {
	return (
		<form className={`${boxClass} ${boxSize} ${boxSpace}`} onSubmit={(e) => e.preventDefault()} {...props}>
			{children}
		</form>
	);
};
