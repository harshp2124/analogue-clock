import React, { useEffect, useState } from 'react';

function App() {
	const [hour, setHour] = useState(null);
	const [min, setMin] = useState(null);
	const [sec, setSec] = useState(null);

	useEffect(() => {
		date();
	}, [sec]);

	const date = () => {
		const deg = 6;
		let date = new Date();

		const mn = date.getMinutes() * deg;
		const hr = date.getHours() * 30 + mn / 12;
		const sc = date.getSeconds() * deg;

		setHour(hr);
		setMin(mn);
		setSec(sc);
	};

	setInterval(date, 1000);

	return (
		<div className='clock'>
			<div className='hour'>
				<div className='hr' style={{ transform: `rotateZ(${hour}deg)` }}></div>
			</div>
		</div>
	);
}

export default App;
