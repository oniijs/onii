import Quill from 'quill'

export class OniiQuill extends HTMLElement {
  declare quill: Quill

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' })

    const sheet = new CSSStyleSheet()
    const theme = this.attributes.getNamedItem('theme')?.value ?? 'core'

    const [{ default: css }] = await Promise.all([
      import(`../styles/${theme}`) as Promise<{
        default: string
      }>,
      import(`quill/themes/${theme}`),
    ])

    await sheet.replace(css)

    shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, sheet]

    const fragment = document.createDocumentFragment()

    const container = document.createElement('div')
    fragment.append(container)

    this.quill = new Quill(container, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block'],
        ],
      },
      placeholder: 'Compose an epic...',
      theme,
    })

    shadow.append(fragment)
  }
}

export const define = (name = 'onii-quill') =>
  customElements.define(name, OniiQuill)
