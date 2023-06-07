import * as React from "react";
import {
	Box,
	Typography,
} from "@mui/material";

export default function Introduction() {
	return (
		<Box className="card card-padding">
			<Box className="flex">
				<Typography variant="h5" className="white-text bold-text text-center">
					Instructions
				</Typography>
			</Box>
			<Box className="mt-20">
				<img src="/assets/images/instructions.jpg" className="instruction-image" alt=""/>
			</Box>
		</Box>
	);
}
