import Quill, { QuillOptionsStatic } from 'quill'

export const QUILL_ATTRIBUTES = [
  {
    name: 'debug',
    json: true,
  },
  {
    name: 'modules',
    json: true,
  },
  'placeholder',
  {
    name: 'readOnly',
    json: true,
  },
  'theme',
  {
    name: 'formats',
    json: true,
  },
  'bounds',
  'scrollingContainer',
  {
    name: 'strict',
    json: true,
  },
] as const

export class OniiQuill extends HTMLElement {
  declare quill: Quill

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' })

    const sheet = new CSSStyleSheet()
    const theme = this.getAttributeValue('theme') ?? 'core'

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

    this.quill = new Quill(
      container,
      QUILL_ATTRIBUTES.reduce<QuillOptionsStatic>((acc, curr) => {
        if (typeof curr === 'string') {
          const attrVal = this.getAttributeValue(curr)
          if (attrVal != null) {
            acc[curr] = attrVal
          }
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        } else if (curr.json) {
          const attrVal = this.getAttributeValue(curr.name, true)
          if (attrVal != null) {
            // @ts-expect-error
            acc[curr.name] = attrVal
          }
        }
        return acc
      }, {}),
    )

    shadow.append(fragment)
  }

  private getAttributeValue(name: string): string | undefined
  private getAttributeValue<T>(name: string, json: boolean): T
  private getAttributeValue<T>(name: string, json?: boolean) {
    const attrValue = this.attributes.getNamedItem(name)?.value
    if (attrValue && json) {
      try {
        return JSON.parse(attrValue) as T
      } catch {}
    }
    return attrValue
  }
}

export const define = (name = 'onii-quill') =>
  customElements.define(name, OniiQuill)
