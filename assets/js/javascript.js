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

  if (paths.length > 1)
    return setInterval(showNextSlide, 6000)
}

function bootHomepage(gImg, gSlide, gList) {
  let intId = null

  fetch("/assets/img/gallery.json", { cache: "no-cache" })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error loading gallery! HTTP ${res.status}`)
      }
      return res.json()
    })
    .then(data => {
      intId = runSlideshow(gImg, gSlide, data)
    })
    .catch(err => alert(err))

  gList.querySelectorAll("#gallery-list-item").forEach(item => {
    item.addEventListener("mouseenter", ev => {
      clearInterval(intId)
      let newImg = ev.target.getAttribute("data-cover")

      gSlide.classList.add("hidden")
      setTimeout(() => {
        intId = runSlideshow(gImg, gSlide, [newImg])
      }, 1000)
    })
  })
}
