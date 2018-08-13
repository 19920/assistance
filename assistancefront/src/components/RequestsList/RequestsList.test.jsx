import React from 'react';
import ReactDOM from 'react-dom';
import RequestsList from './RequestsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RequestsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
