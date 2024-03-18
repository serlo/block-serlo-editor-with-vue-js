import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CkEditor from '../CkEditor.vue'

describe('CkEditor', () => {
  it.skip('renders properly', () => {
    const wrapper = mount(CkEditor, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
