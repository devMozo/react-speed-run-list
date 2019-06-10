import React from 'react';
import { shallow } from 'enzyme';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

describe('<SectionTitle />', () => {
  const MOCKED_PROPS = () => ({
    title: 'Mocked Title',
  });

  it('should render correctly', () => {
    const component = shallow(<SectionTitle {...MOCKED_PROPS()} />);

    expect(component).toMatchSnapshot();
  });

  it('it must contain the correct fields', () => {
    const props = MOCKED_PROPS();
    const component = shallow(<SectionTitle {...props} />);
    const title = component.find('h2');

    expect(title.text()).toEqual(props.title);
  });
});
