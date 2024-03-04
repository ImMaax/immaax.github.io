function decodeAndSend(input) {
  window.location.href = `mailto:${atob(input)}`
}

window.onload = () => {
  document.querySelectorAll("pre").forEach((item) => {
    let content = item.innerText
    let initText = "Copy this snippet"
    let copyBtn = document.createElement("a")

    copyBtn.innerText = initText
    copyBtn.href = "javascript:void(0)"
    copyBtn.classList.add("copybtn")

    copyBtn.onclick = (event) => {
      event.preventDefault()
      navigator.clipboard.writeText(content).then(() => {
        copyBtn.innerText = "Copied!"
        setTimeout(() => {
          copyBtn.innerText = initText
        }, 2000)
      }, (err) => {
        console.error(err)
      })
    }

    item.parentNode.insertBefore(copyBtn, item.nextSibling)
  })
}
