import React from 'react';

import Webappbar from '../childComponent/Webappbar';

import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';


// Component to show chat is loading
const Spinner = () => {
	return (
		<Grid
			container spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: '100vh' }}
		>
			<Webappbar />
			<LinearProgress
				style={{
					color:"#5F95F5",
					width:"500px",
				}}
			/>

		</Grid>
	);
}

export default Spinner;
