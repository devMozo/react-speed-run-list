import React from 'react';
import { shallow } from 'enzyme';
import ButtonHandleError from '../../../components/ButtonHandleError/ButtonHandleError';

describe('<ButtonHandleError />', () => {
  const fnOnClick = jest.fn();

  it('should render correctly', () => {
    const component = shallow(<ButtonHandleError />);
    expect(component).toMatchSnapshot();
  });

  it('trigger click', () => {
    const component = shallow(<ButtonHandleError onClick={fnOnClick} />);
    component
      .find('button')
      .first()
      .simulate('click');
    expect(fnOnClick).toBeCalled();
  });
});
