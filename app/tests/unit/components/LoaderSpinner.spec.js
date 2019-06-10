import React from 'react';
import { shallow } from 'enzyme';
import LoaderSpinner from '../../../components/LoaderSpinner/LoaderSpinner';

describe('<LoaderSpinner />', () => {
  it('should render correctly', () => {
    const component = shallow(<LoaderSpinner />);
    expect(component).toMatchSnapshot();
  });
});
