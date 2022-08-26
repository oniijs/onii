export class OniiQuill extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'closed' })

    const div = document.createElement('div')
    div.textContent = 'Hello World, Web Components!'

    shadow.append(div)
  }
}

export const define = (name = 'onii-quill') =>
  customElements.define(name, OniiQuill)
