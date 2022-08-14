import React from 'react';
import Slider from '@mui/material/Slider';
const SliderProton = ({ value, changePrice }) => {
	return (
		<div>
			<Slider
				aria-label='Temperature'
				value={value}
				onChange={changePrice}
				valueLabelDisplay='auto'
				step={50000}
				marks
				min={100000}
				max={850000}
			/>
		</div>
	);
};

export default SliderProton;
