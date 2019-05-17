import * as React from "react";
import { configure, addDecorator } from '@storybook/react';
import { theme } from "../src/theme";
import { ThemeProvider } from "styled-components";

const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))
configure(loadStories, module);