import { css } from "lit"

import { normalize } from '../helpers/normalize.js'

export const styles = css`
  ${normalize}

  :host {
    display: inline-block;
    cursor: pointer;
  }

  .link {
    display: inherit;
    width: 100%;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    user-select: none;
    text-decoration: none;
    cursor: inherit;
    border-bottom: 1px solid transparent;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;

    padding-bottom: 2px;
    margin-bottom: -2px;
  }

  /* Default */
  .link--default:active,
  .link--default {
    color: var(--sl-color-neutral-900);
    border-color: var(--sl-color-neutral-500);
  }

  .link--default:focus,
  .link--default:hover {
    color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  /* Primary */
  .link--primary:active,
  .link--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .link--primary:focus,
  .link--primary:hover {
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-primary-500);
  }

  /* Success */
  .link--success:active,
  .link--success {
    color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
  }

  .link--success:focus,
  .link--success:hover {
    color: var(--sl-color-success-500);
  }

  /* Neutral */
  .link--neutral:active,
  .link--neutral {
    color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
  }

  .link--neutral:focus,
  .link--neutral:hover {
    color: var(--sl-color-neutral-500);
  }

  /* Warning */
  .link--warning:active,
  .link--warning {
    color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
  }

  .link--warning:focus,
  .link--warning:hover {
    color: var(--sl-color-warning-500);
  }

  /* Danger */
  .link--danger:active,
  .link--danger {
    color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
  }

  .link--danger:focus,
  .link--danger:hover {
    color: var(--sl-color-danger-500);
  }
`
