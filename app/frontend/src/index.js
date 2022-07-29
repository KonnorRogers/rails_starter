export function asPromise (callback) {
  return new Promise((resolve, reject) => {
    try {
      const result = callback()
      resolve(result)
    } catch(e) {
      reject(e)
    }
  })
}

export function preventDoubleClick () {
  window.addEventListener("click", (event) => {
    if (event.defaultPrevented) return
    if (!clickEventIsSignificant(event)) return

    const target = (event.composedPath && event.composedPath()) || event.target

    const submitBtn = findSubmitButton(target)
    if (submitBtn == null) return
    if (submitBtn.hasAttribute("loading")) return
    if (submitBtn.closest("form")?.querySelector("[invalid]") != null) return
    if (submitBtn.hasAttribute("needs-confirmation")) return

    submitBtn.setAttribute("loading", "")
    submitBtn.formSubmitController.submit(submitBtn)

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

