import { mount } from 'enzyme';
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
    firstPlace: {
      run: {
        times: {
          realtime: '1H20M30S',
        },
        weblink: 'mockedlink.com',
      },
    },
    err: false,
  });

  it('should render', () => {
    const wrapper = mount(<View {...MOCKED_PROPS()} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.exists('.HeaderView')).toBeTruthy();
    expect(wrapper.exists('.ButtonHandleError')).toBeFalsy();
  });

  it('should render a handler error button if there was an error', () => {
    const wrapper = mount(<View {...MOCKED_PROPS()} err={{ err: true }} />);
    expect(wrapper.exists('.HeaderView')).toBeFalsy();
    expect(wrapper.exists('.ButtonHandleError')).toBeTruthy();
  });
});
