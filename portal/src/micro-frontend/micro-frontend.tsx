import * as React from 'react'
import {
  mountMicroFrontend,
  removeFromDom,
  AddToDom,
  MicroFrontendProps,
} from './micro-frontend-dom'

const getScriptId = (name: string) => `micro-frontend-script-${name}`

export const MicroFrontend = ({ name, host }: MicroFrontendProps) => {
  React.useEffect(() => {
    const scriptId = getScriptId(name)

    if (document.getElementById(scriptId)) {
      mountMicroFrontend(name)
      return
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        let chunkCount = -1
        Object.keys(manifest['files'])
          .filter((key) => key.endsWith('.js'))
          .forEach((key, _, arr) => {
            if (chunkCount < 0) {
              chunkCount = arr.length
            }
            const path = `${host}/${manifest['files'][key]}`
            const script = document.createElement('script')
            if (key === 'main.js') {
              script.id = scriptId
            }

            script.onload = () => {
              chunkCount--
              if (chunkCount === 0) {
                mountMicroFrontend(name)
              }
            }
            script.crossOrigin = ''
            script.src = path
            document.head.appendChild(script)
          })
      })

    return () => {
      removeFromDom(name)
    }
  }, [host, name])

  return <AddToDom name={name} />
}
