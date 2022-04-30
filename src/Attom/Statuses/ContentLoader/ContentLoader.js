import CS from './ContentLoader.module.scss';

import loader from '@public/svg/loader/primaryLoader.svg';

export const ContentLoader = () => {
	return (
		<div className={`${CS.container}`}>
			<img className={CS.loader} alt='loader' src={loader.src} />
			{/* <i className={`${CS.loader} my-10px curser-pointer fa fa-refresh fa-lg`} /> */}
		</div>
	);
};
