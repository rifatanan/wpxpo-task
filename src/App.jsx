import { useEffect, useState } from 'react';
import Svg from '../src/assets/Svg'
import Svg2 from '../src/assets/Svg2'

import './App.css'

function App() {
	const [rotation, setRotation] = useState(0);
	const [xy, setXy] = useState(0);
  const handleMouseMove = (e) => {
    const windowWidth = window.innerWidth;

    // Calculate rotation angle based on mouse position
    const mouseX = e.clientX;
	const mouseY = e.clientY;
	setXy(mouseX+" "+mouseY);
    const rotationAngle = (mouseX / windowWidth) * 90; // Scale from 0 to 45 degrees
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
				>{xy}
				<Svg2>
				</Svg2>
			</div>
		</div>
	)
}

export default App
