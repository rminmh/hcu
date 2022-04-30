import { useState, useEffect } from 'react';

export const useTimer = (sec = null, autoStart = false, onEnd = null) => {
	const [seconds, setSeconds] = useState(sec);
	const [stop, setStop] = useState(!autoStart);

	useEffect(() => {
		const myInterval = setInterval(() => {
			if (stop) return;
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (!seconds || seconds === 0) {
				setStop(true);
				if (onEnd) onEnd();
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	const resetTimer = (time = sec, autoStart = false) => {
		setSeconds(time);
		setStop(!autoStart);
	};

	return { timer: seconds, setStopTimer: setStop, resetTimer };
};
