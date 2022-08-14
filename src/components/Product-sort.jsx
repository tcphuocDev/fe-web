import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductSort({ current, onchange }) {
	const handleSortChange = (e) => {
		if (onchange) onchange(e.target.value);
	};
	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 200 }}>
				<InputLabel id='demo-simple-select-helper-label'>Sắp xếp</InputLabel>
				<Select
					labelId='demo-simple-select-helper-label'
					id='demo-simple-select-helper'
					value={current ? current : ''}
					label='Giá'
					onChange={handleSortChange}
				>
					<MenuItem value='' selected>
						<em>Giá</em>
					</MenuItem>
					<MenuItem value={1}>Giá tăng dần</MenuItem>
					<MenuItem value={-1}>Giá giảm dần</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
