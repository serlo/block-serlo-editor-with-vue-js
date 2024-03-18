import React from 'react'
import ReactDOM from 'react-dom'
import { SimplestReactComponent } from './SimplestReactComponent'

// export const ReactTest = React.createElement('div', null, 'Test from React')
export const ReactTest = React.createElement(
  'div',
  null,
  React.createElement(SimplestReactComponent, null, [])
)

class ReactWrapper extends HTMLElement {
  constructor() {
    super()
    // Optionally, use shadow DOM to encapsulate React component
    // this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const container = document.createElement('div')
    // If using shadow DOM, append container to shadowRoot instead
    // this.shadowRoot.appendChild(container);
    this.appendChild(container)
    const reactElement = React.createElement(React.Suspense, { fallback: 'Loading...' }, ReactTest)

    ReactDOM.render(reactElement, container)
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this)
  }
}

customElements.define('react-wrapper', ReactWrapper)
