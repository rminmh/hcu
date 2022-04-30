import { useDispatch, useSelector } from 'react-redux';

export const useReducer = (reducerCategory = '', reducerName = '') => {
	const dispatch = useDispatch();
	const state = useSelector((store) => store[reducerCategory][reducerName] ?? null);

	return {
		state,

		setState: (values = {}, scope = '') =>
			dispatch({
				type: `${reducerCategory.toUpperCase()}/${reducerName.toUpperCase()}/SET`,
				payload: { values, scope },
			}),

		clearState: (values = {}, scope = '') =>
			dispatch({
				type: `${reducerCategory.toUpperCase()}/${reducerName.toUpperCase()}/CLEAR`,
				payload: { values, scope },
			}),

		customDispatch: (payload = {}) =>
			dispatch({
				type: `${reducerCategory.toUpperCase()}/${reducerName.toUpperCase()}/CUSTOM`,
				payload,
			}),
	};
};
