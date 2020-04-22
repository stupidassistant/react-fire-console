import * as React from 'react';
import Paperbase from './Paperbase';
import { FireConsoleProps } from '../..';

function FireConsole(props: FireConsoleProps) {
  return <Paperbase navigatorConfig={props.config} />;
}

export default FireConsole;