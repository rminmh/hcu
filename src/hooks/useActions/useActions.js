import { useDispatch } from 'react-redux';

import { actions } from '@redux/actions';

export const useActions = () => {
	const dispatch = useDispatch();

	return {
		dispatch,
		actions: actions,
	};
};
