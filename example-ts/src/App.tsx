import React from 'react';
import FireConsole from 'react-fire-console';
import DefaultNavigatorConfig from './NavigatorConfig';

function App() {
  return (
    <FireConsole config={DefaultNavigatorConfig} />
  );
}

export default App;
