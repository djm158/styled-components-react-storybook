import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import { Checkbox } from "./components/Checkbox";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Checkbox checked={true} />
			</div>
		</ThemeProvider>
	);
};

export default App;
