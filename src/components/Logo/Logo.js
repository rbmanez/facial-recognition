import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt br-2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }}>
				<div className="Tilt-inner pa4">
					<img alt='logo' src={logo} />
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;