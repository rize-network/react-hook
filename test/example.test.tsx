import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Example } from '../stories/Example.stories';

describe('Example', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Example />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
