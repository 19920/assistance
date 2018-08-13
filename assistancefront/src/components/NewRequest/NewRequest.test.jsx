import React from 'react';
import ReactDOM from 'react-dom';
import NewRequest from './NewRequest';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRequest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
