import React from 'react';
import { shallow } from 'enzyme';
import HeaderView from '../../../components/HeaderView/HeaderView';

describe('<HeaderView />', () => {
  const MOCKED_PROPS = () => ({
    gameName: "Mocked Game's Name",
    img: 'mocked.png',
    playerName: "Mocked Player's Name",
    time: '12345678',
    link: 'mocked.com',
  });

  it('should render correctly', () => {
    const component = shallow(<HeaderView {...MOCKED_PROPS()} />);

    expect(component).toMatchSnapshot();
  });

  it('it must contain the correct fields', () => {
    const props = MOCKED_PROPS();
    const component = shallow(<HeaderView {...props} />);
    const gameName = component.find('.HeaderView__description h2');
    const img = component.find('.HeaderView__logo img');
    const playerName = component.find('.HeaderView__description p').first();
    const time = component.find('.HeaderView__description p').last();
    const link = component.find('.HeaderView__link a');

    expect(gameName.text()).toEqual(props.gameName);
    expect(img.prop('src')).toEqual(props.img);
    expect(img.prop('alt')).toEqual(props.gameName);
    expect(playerName.text()).toContain(props.playerName);
    expect(time.text()).toContain(props.time);
    expect(link.prop('href')).toEqual(props.link);
  });
});
