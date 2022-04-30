/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export const useDidUnMount = (cb = () => {}) => useEffect(() => () => cb(), []);
