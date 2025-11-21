function prepareFullscreen() {
  const gridItems = document.querySelectorAll(".album-grid-item")
  const fullscreenView = document.getElementById("fullscreen-view")
  const fullscreenImg = document.getElementById("fullscreen-img")
  const fullscreenCaption = document.getElementById("fullscreen-caption")
  const closeButton = document.getElementById("close-btn")
  const prevButton = document.getElementById("prev-btn")
  const nextButton = document.getElementById("next-btn")

  let currentIndex = 0

  const images = Array.from(gridItems).map(item => ({
    src: item.querySelector("img").src,
    caption: item.getAttribute("data-caption"),
    urlId: item.getAttribute("data-url-id")
  }))

  function updateCaption(image) {
    let iLink = `<a href='/photos/${image.urlId}'>Technical Details</a>`
    fullscreenCaption.innerHTML = image.caption + " &bull; " + iLink
  }

  function openFullscreen(index) {
    currentIndex = index

    fullscreenImg.src = images[currentIndex].src
    updateCaption(images[currentIndex])
    fullscreenView.classList.add("show")
  }

  function closeFullscreen() {
    fullscreenView.classList.remove("show")
  }

  function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length
    fullscreenImg.src = images[currentIndex].src
    updateCaption(images[currentIndex])
  }

  gridItems.forEach((item, index) => {
    item.addEventListener("click", ev => {
      ev.preventDefault()
      openFullscreen(index)
    })
  })

  fullscreenView.addEventListener("click", ev => {
    if (ev.target === fullscreenView) closeFullscreen()
  })
  closeButton.addEventListener("click", closeFullscreen)
  prevButton.addEventListener("click", () => changeImage(-1))
  nextButton.addEventListener("click", () => changeImage(1))

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFullscreen()
    } else if (event.key === "ArrowLeft") {
      changeImage(-1)
    } else if (event.key === "ArrowRight") {
      changeImage(1)
    }
  })
}

function isWideScreen() {
  return screen.width >= screen.height
}

function averageGridImageSize() {
  let heights = []
  const gridImages = document.querySelectorAll(".album-grid-item img")

  if (gridImages.length > 0) {
    gridImages.forEach(img => { heights.push(img.height) })
    const average = heights.reduce((a, b) => a + b) / heights.length
    gridImages.forEach(img => {
      if (img.height > average) img.height = average
    })
  }
}

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
      isFirstRun = false
    }

    setTimeout(() => {
      revFadeCurrentSlide()
    }, 1000)
  }

  setInterval(showNextSlide, 6000)
}

window.addEventListener("load", () => {
  const fullscreen = document.querySelectorAll(".fullscreen")
  if (fullscreen.length > 0) prepareFullscreen()

  if (isWideScreen()) averageGridImageSize()

  //const slides = document.querySelectorAll(".gallery-slide")
  //if (slides.length > 0) runSlideshow(slides)
  runSlideshow(
    document.getElementById("gallery-img"),
    document.getElementById("gallery-slide"),
    [
      "angels.jpg",
      "moorish-castle.jpg",
      "young-trees.jpg",
      "light-upon-death.jpg"
    ]
  )
})
