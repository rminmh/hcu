import { useDidMount } from '@hooks';
import { useRef } from 'react';

import CS from './PureModal.module.scss';

export const PureModal = ({
	children,
	//custom props
	onClose = () => {},
	backDropDisabled = false,
	hideCloseIcon = false,
	contentOverflowDisabled = false,
	//styles
	class_backdrop = '',
	class_wrapper = '',
	class_body = '',
	class_icon = '',
}) => {
	const ref = useRef();

	const closeHandler = (e) => !backDropDisabled && ref.current && !ref.current.contains(e.target) && onClose && onClose();

	useDidMount(() => {
		document.querySelector('body').classList.add('overflow-hidden');
		return () => {
			document.querySelector('body').classList.remove('overflow-hidden');
		};
	});

	return (
		<div className={`${CS.container} ${class_backdrop}`} onClick={(e) => closeHandler(e)}>
			<div className={`${CS.wrapper} ${class_wrapper}`} ref={ref} _overflow={contentOverflowDisabled ? 'none' : 'auto'}>
				<div className={class_body}>
					{!hideCloseIcon && onClose && <i className={`${CS.closeIcon} ${class_icon} fa fa-close`} onClick={onClose} />}
					{children}
				</div>
			</div>
		</div>
	);
};
