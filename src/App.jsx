import { useEffect, useState } from 'react';
import Svg from '../src/assets/Svg'
import Svg2 from '../src/assets/Svg2'

import './App.css'

function App() {
		const [rotation, setRotation] = useState(0);
		const handleMouseMove = (e) => {
		const windowWidth = window.innerWidth;

		const mouseX = e.clientX;
		const rotationAngle = (mouseX / windowWidth) * 90;
		setRotation(rotationAngle);
  	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className='main'>
			<div className='svg1'><Svg/></div>
			<div 
				className='svg2'
				onMouseMove={handleMouseMove}
				style={{
					transform: `rotate(${rotation}deg)`,
				}}
				>
				<Svg2 />
			</div>
		</div>
	)
}

export default App
