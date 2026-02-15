function runSlideshow(targetImg, targetDiv, paths) {
  let isFirstRun = true
  let cur = 0
  showNextSlide()

  function fadeCurrentSlide() {
    targetDiv.classList.add("hidden")
  }
  function revFadeCurrentSlide() {
    targetDiv.classList.remove("hidden")
  }

  function showNextSlide() {
    if (!isFirstRun) {
      fadeCurrentSlide()

      setTimeout(() => {
        cur = (cur + 1) % paths.length
        targetImg.src = "/assets/img/photos/" + paths[cur]
      }, 500)
    } else {
      targetImg.src = "/assets/img/photos/" + paths[0]
      targetImg.style.opacity = "1"
      isFirstRun = false
    }

    setTimeout(() => {
      revFadeCurrentSlide()
    }, 1000)
  }

  setInterval(showNextSlide, 6000)
}

window.addEventListener("load", () => {
  const gImg   = document.getElementById("gallery-img")
  const gSlide = document.getElementById("gallery-slide")

  if (!gImg || !gSlide) return

  fetch("/assets/img/gallery.json", { cache: "no-cache" })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error loading gallery! HTTP ${res.status}`);
      }
      return res.json()
    })
    .then(data => runSlideshow(gImg, gSlide, data))
    .catch(err => alert(err))
})
