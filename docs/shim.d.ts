import { OniiQuill } from '@oniijs/quill'

export type CustomElement<T> = Partial<
  DOMAttributes<T> & T & { children: unknown }
>

export type CustomEvents<K extends string, T = unknown> = {
  [key in K]: (event: CustomEvent<T>) => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['onii-quill']: CustomElement<OniiQuill>
    }
  }
}
