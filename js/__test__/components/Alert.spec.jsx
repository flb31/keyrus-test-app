import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../components/Alert';

const alert = {
  id: '123456',
  type: 'success',
  message: 'Message okay'
};

test('Alert renders correctly', () => {
  const component = shallow(<Alert alert={alert} handleAlert={() => {}} />);
  expect(component).toMatchSnapshot();
});
