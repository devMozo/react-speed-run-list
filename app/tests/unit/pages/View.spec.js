import { shallow } from 'enzyme';
import View from '../../../../pages/View';

describe('<View />', () => {
  const MOCKED_PROPS = () => ({
    game: {
      assets: {
        'cover-medium': {
          uri: 'mocked-game-uri',
        },
      },
      names: {
        international: 'Mocked International Name',
      },
    },
    user: {
      names: {
        international: 'Mocked User International Name',
      },
    },
    run: {
      times: {
        realtime: '1H20M30S',
      },
      weblink: 'mockedlink.com',
    },
  });

  it('should render', () => {
    const wrapper = shallow(<View {...MOCKED_PROPS()} />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
