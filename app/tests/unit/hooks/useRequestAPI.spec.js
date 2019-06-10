import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import useRequestAPI from '../../../hooks/useRequestAPI';
import HookWrapper from '../../config/HookWrapper';
import { getSpeedRunList } from '../../../api/SpeedRunAPI';

describe('useRequestAPI', () => {
  it('should render', () => {
    const wrapper = shallow(<HookWrapper />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('check hook with default values', () => {
    let wrapper;

    act(() => {
      wrapper = shallow(<HookWrapper hook={() => useRequestAPI()} />);
    });

    const { hook } = wrapper.find('div').props();
    const [{ data, loading, error }] = hook;

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeFalsy();
  });

  it('check hook triggerin an action', () => {
    let wrapper;

    act(() => {
      wrapper = shallow(<HookWrapper hook={() => useRequestAPI()} />);
    });

    const { hook } = wrapper.find('div').props();
    const [{ data, loading, error }, setAxio] = hook;

    setAxio(getSpeedRunList);

    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeFalsy();
  });
});
