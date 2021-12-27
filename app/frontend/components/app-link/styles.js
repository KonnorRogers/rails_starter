import { css } from "lit"

import { normalize } from '../helpers/normalize.js'

export const styles = css`
  ${normalize}

  :host {
    display: inline-block;
    cursor: pointer;
    padding: 0.15em 0.25em;
  }

  .link {
    display: inline-block;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    user-select: none;
    text-decoration: none;
    cursor: inherit;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;

    --border-width: 2px;

    border-bottom: var(--border-width) solid transparent;
    padding-bottom: var(--border-width);
    margin-bottom: calc(var(--border-width) * -1);
  }

  /* Primary */
  .link--default:active,
  .link--default {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .link--default:focus,
  .link--default:hover {
    border-color: var(--sl-color-primary-700);
    color: var(--sl-color-primary-700);
  }


  /* Success */
  .link--success:active,
  .link--success {
    color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
  }

  .link--success:focus,
  .link--success:hover {
    color: var(--sl-color-success-700);
    border-color: var(--sl-color-success-700);
  }

  /* Neutral */
  .link--neutral:active,
  .link--neutral {
    color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
  }

  .link--neutral:focus,
  .link--neutral:hover {
    color: var(--sl-color-neutral-800);
    border-color: var(--sl-color-neutral-800);
  }

  /* Warning */
  .link--warning:active,
  .link--warning {
    color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
  }

  .link--warning:focus,
  .link--warning:hover {
    color: var(--sl-color-warning-700);
    border-color: var(--sl-color-warning-700);
  }

  /* Danger */
  .link--danger:active,
  .link--danger {
    color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
  }

  .link--danger:focus,
  .link--danger:hover {
    color: var(--sl-color-danger-700);
    border-color: var(--sl-color-danger-700);
  }
`
