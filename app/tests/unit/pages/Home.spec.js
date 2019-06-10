import { shallow } from 'enzyme';
import Home from '../../../../pages/Home';

describe('<Home />', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
