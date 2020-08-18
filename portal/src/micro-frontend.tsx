import * as React from 'react'

const getScriptId = (name: string) => `micro-frontend-script-${name}`

type MicroFrontendProps = {
  name: string
  host: string
}

export const MicroFrontend = ({ name, host }: MicroFrontendProps) => {
  React.useEffect(() => {
    const renderMicroFrontend = () => {
      const windowMfe = (window as any)[`render${name}`]
      // windowMfe && windowMfe(`${name}-container`, window.history)
      windowMfe && windowMfe(`container`, window.history)
    }

    const scriptId = getScriptId(name)

    if (document.getElementById(scriptId)) {
      renderMicroFrontend()
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
                renderMicroFrontend()
              }
            }
            script.crossOrigin = ''
            script.src = path
            console.log(`adding main element for container`)
            document.head.appendChild(script)
          })
      })

    return () => {
      const windowUnmount = (window as any)[`unmount${name}`]
      console.log(`removing main element for container`)
      // windowUnmount && windowUnmount(`${name}-container`)
      windowUnmount && windowUnmount(`container`)
    }
  }, [host, name])

  return <div />
}
