/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export const useDidMount = (cb = () => {}, dependency = []) => useEffect(() => cb(), dependency);
