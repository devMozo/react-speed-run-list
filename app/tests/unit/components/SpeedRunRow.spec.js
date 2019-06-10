import React from 'react';
import { shallow } from 'enzyme';
import SpeedRunRow from '../../../components/SpeedRunRow/SpeedRunRow';
import ViewURL from '../../../constants/urls';

describe('<SpeedRunRow />', () => {
  const MOCKED_PROPS = () => ({
    data: {
      assets: {
        'cover-medium': {
          uri: 'mocked-uri',
        },
      },
      names: {
        international: 'Mocked International Name',
      },
      released: 'Mocked Released',
      id: 123,
    },
  });

  it('should render correctly', () => {
    const component = shallow(<SpeedRunRow {...MOCKED_PROPS()} />);

    expect(component).toMatchSnapshot();
  });

  it('it must contain the correct fields', () => {
    const props = MOCKED_PROPS();
    const { data } = props;
    const component = shallow(<SpeedRunRow {...props} />);
    const img = component.find('.SpeedRunRow__logo img');
    const name = component.find('.SpeedRunRow__description h2');
    const released = component.find('.SpeedRunRow__description h4');
    const link = component.find('.SpeedRunRow__link');

    expect(img.prop('src')).toEqual(data.assets['cover-medium'].uri);
    expect(img.prop('alt')).toEqual(data.names.international);
    expect(name.text()).toEqual(data.names.international);
    expect(released.text()).toContain(data.released);
    expect(link.prop('href')).toEqual(`${ViewURL}/${data.id}`);
  });
});
