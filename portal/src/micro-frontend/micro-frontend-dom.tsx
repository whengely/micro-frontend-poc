import * as React from 'react'

declare global {
  interface Window {
    mount: { [key: string]: (container: string) => void }
    unmount: { [key: string]: (container: string) => void }
  }
}

export type MicroFrontendProps = {
  name: string
  host: string
}

export const removeFromDom = (name: string) => {
  console.log(`removing from dom: ${name}-container`)
  const windowUnmount = (window as any)[`unmount${name}`]
  windowUnmount && windowUnmount(`${name}-container`)
}

export const AddToDom = ({ name }: { name: string }) => {
  console.log(`adding to dom: ${name}-container`)
  return <div id={`${name}-container`} />
}

export const mountMicroFrontend = (name: string) => {
  const mount = window?.mount && window.mount[name]
  if (mount) mount(`${name}-container`)
}
