import React from 'react';
import ReactDOM from 'react-dom';
import SubPage from './sub-Page';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
