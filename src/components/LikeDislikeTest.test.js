import React from 'react';
import { shallow, mount } from 'enzyme';

import LikeDislikeTest from './LikeDislikeTest';

describe('LikeDislikeTest Component', () => {
  it('should render correctly', () => {
    const component = shallow(<LikeDislikeTest />);
    
    expect(component).toMatchSnapshot();
  });

  it('click of like button should increase one count of like', () => {
    const component  = mount(<LikeDislikeTest />);

    component
      .find("#like")
      .at(0)
      .simulate('click');
    
    expect(component.find("#like").at(0).text()).toBe("Like: 101");
  });

  it('click of dislike button should increase one count of dislike', () => {
    const component  = mount(<LikeDislikeTest />);

    component
      .find("#dislike")
      .at(0)
      .simulate('click');
    
    expect(component.find("#dislike").at(0).text()).toBe("Dislike: 101");
  });
});