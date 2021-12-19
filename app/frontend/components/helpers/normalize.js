import { css } from 'lit'

export const normalize = css`
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }

  button {
    cursor: pointer;
  }
`
