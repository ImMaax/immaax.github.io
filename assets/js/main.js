function decodeAndSend(input) {
  window.location.href = `mailto:${atob(input)}`
}
