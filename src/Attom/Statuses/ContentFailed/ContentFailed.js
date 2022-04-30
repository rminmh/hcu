import CS from './ContentFailed.module.scss';

export const ContentFailed = ({ onReload = null }) => {
	return (
		<div className={CS.container}>
			<div>
				<div className={CS.captions}>
					{onReload && <i className='my-10px curser-pointer fa fa-refresh fa-lg' onClick={onReload} />}
					<br />
					<span className={CS.flash}>خطایی پیش آمده</span>
				</div>
			</div>
		</div>
	);
};
