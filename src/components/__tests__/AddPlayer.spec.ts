import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AddPlayer from '../AddPlayer.vue';

describe('AddPlayer', () => {
  it('renders properly', () => {
    const wrapper = mount(AddPlayer);
    expect(wrapper.text()).toContain('Add Players');
  });
});
