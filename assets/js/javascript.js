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
    caption: item.getAttribute("data-caption")
  }))

  function openFullscreen(index) {
    currentIndex = index
    fullscreenImg.src = images[currentIndex].src
    fullscreenCaption.textContent = images[currentIndex].caption
    fullscreenView.classList.add("show")
  }

  function closeFullscreen() {
    fullscreenView.classList.remove("show")
  }

  function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length
    fullscreenImg.src = images[currentIndex].src
    fullscreenCaption.textContent = images[currentIndex].caption
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

  gridImages.forEach(img => { heights.push(img.height) })
  const average = heights.reduce((a, b) => a + b) / heights.length
  gridImages.forEach(img => {
    if (img.height > average) img.height = average
  })
}

function runSlideshow(slides) {
  slides[0].classList.add("active")
  let current = 0

  function showNextSlide() {
    slides[current].classList.remove("active")
    current = (current + 1) % slides.length

    setTimeout(() => {
      slides[current].classList.add("active")
    }, 500)
  }

  setInterval(showNextSlide, 4000)
}

window.addEventListener("load", () => {
  const fullscreen = document.querySelectorAll(".fullscreen")
  if (fullscreen.length > 0) prepareFullscreen()

  if (isWideScreen()) averageGridImageSize()

  const slides = document.querySelectorAll(".gallery-slide")
  if (slides.length > 0) runSlideshow(slides)
})
