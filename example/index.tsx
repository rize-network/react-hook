import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UseMountExample } from '../example/Example';

const App = () => {
  return (
    <div>
      <UseMountExample />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
