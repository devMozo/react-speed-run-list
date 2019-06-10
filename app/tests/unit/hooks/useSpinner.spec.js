import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import useSpinner from '../../../hooks/useSpinner';
import HookWrapper from '../../config/HookWrapper';

const MOCKED_TEXT = 'Mocked Text';
const Component = () => (
<div>
$
{MOCKED_TEXT}
</div>
);

describe('useSpinner', () => {
  it('should render', () => {
    const wrapper = shallow(<HookWrapper />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('check hook with default values', () => {
    let wrapper;

    act(() => {
      wrapper = shallow(<HookWrapper hook={() => useSpinner(<Component />)} />);
    });

    const { hook } = wrapper.find('div').props();
    const [NewComponent] = hook;

    const ShallowNewComponent = shallow(NewComponent);

    expect(ShallowNewComponent.find('p').exists()).toBeTruthy();
  });

  it('check hook triggering an action', () => {
    let wrapper;

    act(() => {
      wrapper = shallow(<HookWrapper hook={() => useSpinner(<Component />)} />);
    });

    let { hook } = wrapper.find('div').props();
    let [NewComponent, setLoading] = hook;
    setLoading(false);

    ({ hook } = wrapper.find('div').props());
    [NewComponent, setLoading] = hook;

    const ShallowNewComponent = shallow(NewComponent);

    expect(ShallowNewComponent.find('p').exists()).toBeFalsy();
  });
});
