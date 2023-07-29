import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppVue from '@/App.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(AppVue)
    expect(wrapper.text()).toContain('Player Counter')
  })
})
