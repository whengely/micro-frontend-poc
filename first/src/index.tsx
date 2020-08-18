import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

export const APP_NAME = 'First'

declare global {
  interface Window {
    mount: { [key: string]: (container: string) => void }
    unmount: { [key: string]: (container: string) => void }
  }
}

const RenderApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const mountSecond = {
  [APP_NAME]: (container: string) =>
    ReactDOM.render(<RenderApp />, document.getElementById(container)),
}

const unmountSecond = {
  [APP_NAME]: (container: string) => {
    const el = document.getElementById(container)
    if (el) ReactDOM.unmountComponentAtNode(el)
  },
}

window.mount = Object.assign(window.mount ?? {}, mountSecond)
window.unmount = Object.assign(window.unmount ?? {}, unmountSecond)

if (!document.getElementById(`${APP_NAME}-container`)) {
  ReactDOM.render(<RenderApp />, document.getElementById('root'))
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
