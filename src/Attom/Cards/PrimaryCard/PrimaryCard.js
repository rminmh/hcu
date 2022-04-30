import { Block, ContentFailed, ContentLoader } from '@attom';

import CS from './PrimaryCard.module.scss';

export const PrimaryCard = ({
	children,
	// box control
	boxClass = '',
	boxSpace = '',
	boxSize = '',
	// el control
	elClass = '',
	elSpace = '',
	// status control:
	loading = false,
	onReload = null,
	status = '', // init - loading - ok - fail
	//features
	transparent = null,
	shadow = null,
	border = null,
	radius = null,
	hoverStyle = null,
	//
	...props
}) => {
	const GClass = (features = {}) =>
		Object.keys(features).reduce(
			(prev = '', current = {}) => (features[current] ? `${prev} ${current.toLowerCase()}` : prev),
			'',
		);

	const features = {
		transparent,
		shadow,
		border,
		radius,
		hoverStyle,
		loading: loading || status === 'loading',
		fail: status === 'fail',
	};

	return (
		<Block boxClass={`${boxClass} ${CS.container}`} boxSize={boxSize} boxSpace={boxSpace}>
			{(loading || status === 'loading') && <ContentLoader />}
			{!loading && status === 'fail' ? <ContentFailed onReload={onReload} /> : null}
			<div className={`${CS.body} ${elClass} ${elSpace}`} _features={`${GClass(features)}`} {...props}>
				{children}
			</div>
		</Block>
	);
};
