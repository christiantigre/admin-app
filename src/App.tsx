import React from 'react';
import Main from './main/Main';
import { SnackbarProvider } from 'notistack'

const App: React.FunctionComponent = () => {
  return ( <div>
    <SnackbarProvider/>
      <Main />
    </div>);
};

export default App;
