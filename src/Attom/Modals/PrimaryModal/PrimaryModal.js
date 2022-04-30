import { PureModal } from '@attom';

import CS from './PrimaryModal.module.scss';

export const PrimaryModal = ({
	children,
	// box Control
	boxClass = '',
	boxSize = '',
	boxSpace = '',
	//
	class_body = '',
	//custom props
	onClose = () => {},
	backDropDisabled = false,
	hideCloseIcon = false,
	contentOverflowDisabled = false,
}) => {
	return (
		<PureModal
			onClose={onClose}
			backDropDisabled={backDropDisabled}
			hideCloseIcon={hideCloseIcon}
			contentOverflowDisabled={contentOverflowDisabled}
			class_backdrop={CS.container}
			class_wrapper={`${CS.wrapper} ${boxClass} ${boxSize} ${boxSpace}`}
			class_body={class_body}
			class_icon={CS.closeIcon}
		>
			{children}
		</PureModal>
	);
};
