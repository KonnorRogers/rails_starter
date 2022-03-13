export function asPromise (callback, ...args) {
  return new Promise((resolve, reject) => {
    try {
      resolve(callback(...args))
    } catch(e) {
      reject(e)
    }
  })
}

export function preventDoubleClick () {
  window.addEventListener("click", (event) => {
    if (!clickEventIsSignificant(event)) return
    const target = (event.composedPath && event.composedPath()) || event.target

    const submitBtn = findSubmitButton(target)
    if (submitBtn == null) return
    if (submitBtn.hasAttribute("loading")) return

    submitBtn.setAttribute("loading", "")
    submitBtn.formSubmitController.submit()

  }, { capture: true })
}

function clickEventIsSignificant(event) {
  return !(
    (event.target && event.target.isContentEditable)
    || event.defaultPrevented
    || event.which > 1
    || event.altKey
    || event.ctrlKey
    || event.metaKey
    || event.shiftKey
  )
}

function findSubmitButton(target) {
  if (target instanceof HTMLElement) {
    return target.closest("sl-button[type='submit']:not([disabled]):not(:disabled)")
  }

  if (Array.isArray(target)) {
    return target.find((el) => {
      return el.type === "submit" && el.localName === "sl-button"
    })
  }
};

