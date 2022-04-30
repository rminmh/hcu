/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import router from 'next/router';

import { useReducer } from '@hooks';
import { regex, Storage } from '@utils';

export const useAccessibility = (accessTypes = [], config = { clearStorage: false, redirect: true }) => {
	const { state } = useReducer('universal', 'account');

	const [type, setType] = useState(null);
	const [allow, setAllow] = useState(null);

	const clearStorage = config?.clearStorage ?? false;
	const redirect = config?.redirect ?? true;

	const redirectPaths = {
		G: { path: '/login' }, //Guest
		U: { path: '/dashboard' }, //User
		A: { path: '/dashboard' }, //Admin
		S: { path: '/dashboard' }, //SuperAdmin
	};

	useEffect(() => {
		// check data && set Type
		const token = Storage.getItem('token');
		const account = Storage.getItem('_account', true);

		if (!token || !regex.token.test(token) || !account || !account?.type) setType('G');
		else setType(account.type);
	}, [state]);

	useEffect(() => {
		//check state codes:
		if (type !== null) {
			const findedItem = accessTypes.find((item) => item === type);

			const allowAllItems = findedItem ? true : false;

			setAllow(allowAllItems);

			if (!findedItem && clearStorage) Storage.logout();

			// redirect
			if (!allowAllItems && redirect) {
				if (!findedItem && redirectPaths[type]?.path) router.push(redirectPaths[type].path, undefined);
			}
		}
	}, [type]);

	return { type, allow };
};
