import fs from 'node:fs/promises'
import path from 'node:path'

import { __PROD__ } from '@pkgr/utils'
import postcss from 'postcss'
import postcssrc from 'postcss-load-config'

const QUILL_STYLES_SRC_DIR = 'node_modules/quill/dist'
const QUILL_STYLES_DEST_DIR = 'packages/@oniijs/quill/styles'

const main = async () => {
  await fs.mkdir(QUILL_STYLES_DEST_DIR, {
    recursive: true,
  })

  const srcFiles = await fs.readdir(QUILL_STYLES_SRC_DIR)

  await Promise.all(
    srcFiles
      .filter(file => file.endsWith('.css'))
      .map(async file => {
        const theme = file.match(/^quill\.(.*)\.css$/)![1]
        let css = await fs.readFile(
          path.resolve(QUILL_STYLES_SRC_DIR, file),
          'utf8',
        )
        if (__PROD__) {
          const { plugins, options } = await postcssrc({
            parser: postcss,
          })
          const result = await postcss(plugins).process(css, options)
          css = result.css
        }
        return fs.writeFile(
          path.resolve(QUILL_STYLES_DEST_DIR, `${theme}.ts`),
          `export default \`${css.replaceAll('\\', '\\\\\\\\')}\`\n`,
        )
      }),
  )

  console.info('Build styles for quill successfully!')
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch(console.error)
