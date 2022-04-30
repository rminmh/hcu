import CS from './PageLoader.module.scss';

import loader from '@public/svg/loader/primaryLoader.svg';

export const PageLoader = () => {
	return (
		<div className={`${CS.container}`}>
			<img className={CS.loader} alt='loader' src={loader.src} />
		</div>
	);
};
