import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {Checkbox} from "./Checkbox";
storiesOf("Checkbox", module)
  .add("with checked", () => (
    <Checkbox checked={true}>Hello checked</Checkbox>
  ))
  .add("with unchecked", () => (
    <Checkbox checked={false}>Hello unchecked</Checkbox>
  ))