import { define, OniiQuill } from '@oniijs/quill'

test('it should just work', () => {
  expect(customElements.get('onii-quill')).toBeUndefined()

  define()
  expect(customElements.get('onii-quill')).toBe(OniiQuill)
})
